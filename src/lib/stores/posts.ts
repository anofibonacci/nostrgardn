import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';
import { ndkInstance, connect } from './ndk';
import { filterEventsWithStats, populateAuthorInfo, type FilteredPost, type FilterStats } from '../filters';
import { display, whitelist } from '../config';
import type { NDKFilter } from '@nostr-dev-kit/ndk';

// ============================================================================
// TYPES
// ============================================================================

export interface PostsState {
	posts: FilteredPost[];
	stats: FilterStats;
	loading: boolean;
	error: string | null;
	lastFetched: number | null;
}

const initialStats: FilterStats = {
	total: 0,
	blocked: 0,
	whitelisted: 0,
	taggedWithImages: 0,
	rejectedNoTag: 0,
	rejectedNoImages: 0
};

const initialState: PostsState = {
	posts: [],
	stats: initialStats,
	loading: false,
	error: null,
	lastFetched: null
};

// ============================================================================
// STORE
// ============================================================================

export const postsStore = writable<PostsState>(initialState);

// Track if prefetch is in progress (to avoid duplicate calls)
let prefetchPromise: Promise<void> | null = null;

// ============================================================================
// PREFETCH FUNCTION
// ============================================================================

/**
 * Prefetch posts from relays in the background.
 * Safe to call multiple times - will only fetch once until data expires.
 *
 * Called from:
 * - +layout.svelte on mount (background prefetch)
 * - /feed/+page.ts if no cached data exists
 */
export async function prefetchPosts(): Promise<void> {
	if (!browser) {
		return;
	}

	// Check if we already have recent data (within 5 minutes)
	const current = get(postsStore);
	const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;

	if (current.lastFetched && current.lastFetched > fiveMinutesAgo && current.posts.length > 0) {
		console.log('[nostrgardn] Using cached posts from', new Date(current.lastFetched).toLocaleTimeString());
		return;
	}

	// If already fetching, wait for that to complete
	if (prefetchPromise) {
		return prefetchPromise;
	}

	// Start the fetch
	prefetchPromise = _fetchPosts();

	try {
		await prefetchPromise;
	} finally {
		prefetchPromise = null;
	}
}

/**
 * Force refresh posts (ignores cache)
 */
export async function refreshPosts(): Promise<void> {
	if (!browser) {
		return;
	}

	// Clear current state and refetch
	postsStore.update(s => ({ ...s, lastFetched: null }));
	await _fetchPosts();
}

/**
 * Internal fetch implementation
 */
async function _fetchPosts(): Promise<void> {
	postsStore.update(s => ({ ...s, loading: true, error: null }));

	try {
		// Ensure NDK is connected (with retry)
		try {
			await connect();
		} catch (connErr) {
			console.warn('[nostrgardn] Initial connection failed, retrying...', connErr);
			// Wait a moment and try again
			await new Promise(r => setTimeout(r, 2000));
			await connect();
		}

		// Fetch kind 1 events from relays
		const filter: NDKFilter = {
			kinds: [1],
			authors: whitelist,
			limit: display.initialFetchLimit
		};

		console.log('[nostrgardn] Prefetching events from relays...');
		const events = await ndkInstance.fetchEvents(filter, { closeOnEose: true });
		console.log(`[nostrgardn] Received ${events.size} events from relays`);

		// Apply filter decision tree
		const { posts, stats } = filterEventsWithStats(events);
		console.log('[nostrgardn] Filter stats:', stats);

		// Fetch author profiles (with timeout)
		const profilePromises = posts.map(async (post) => {
			try {
				const user = ndkInstance.getUser({ pubkey: post.author.pubkey });
				await user.fetchProfile();
				populateAuthorInfo(post, user.profile);
			} catch (err) {
				console.warn(`[nostrgardn] Failed to fetch profile for ${post.author.pubkey}:`, err);
			}
		});

		await Promise.race([
			Promise.all(profilePromises),
			new Promise((resolve) => setTimeout(resolve, 5000))
		]);

		// Update store with results
		postsStore.set({
			posts,
			stats,
			loading: false,
			error: null,
			lastFetched: Date.now()
		});

	} catch (err) {
		console.error('[nostrgardn] Error prefetching posts:', err);
		postsStore.update(s => ({
			...s,
			loading: false,
			error: err instanceof Error ? err.message : 'Failed to load posts'
		}));
	}
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if posts are currently being loaded
 */
export function isLoading(): boolean {
	return get(postsStore).loading;
}

/**
 * Check if we have cached posts
 */
export function hasCachedPosts(): boolean {
	const state = get(postsStore);
	return state.posts.length > 0 && state.lastFetched !== null;
}

import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { postsStore, prefetchPosts, hasCachedPosts } from '$lib/stores/posts';
import type { PostsState } from '$lib/stores/posts';

// Disable SSR - data fetching requires WebSocket (browser only)
export const ssr = false;

// Don't prerender - content is dynamic from relays
export const prerender = false;

export interface PageData {
	initialState: PostsState;
}

export async function load(): Promise<PageData> {
	// Return empty state for SSR (shouldn't happen with ssr: false)
	if (!browser) {
		return {
			initialState: get(postsStore)
		};
	}

	// If we don't have cached posts (user navigated directly to /feed),
	// trigger a fetch and wait for it
	if (!hasCachedPosts()) {
		console.log('[nostrgardn/feed] No cached posts, fetching...');
		await prefetchPosts();
	} else {
		console.log('[nostrgardn/feed] Using prefetched posts');
	}

	return {
		initialState: get(postsStore)
	};
}

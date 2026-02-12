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
	// If we don't have cached posts, kick off a fetch but DON'T await it.
	// The page component subscribes reactively to postsStore and handles
	// loading/error/empty states. Awaiting here blocks SvelteKit from
	// rendering the page entirely — if a relay hangs, the user sees nothing.
	if (browser && !hasCachedPosts()) {
		console.log('[nostrgardn/feed] No cached posts, fetching...');
		prefetchPosts();
	}

	return {
		initialState: get(postsStore)
	};
}

// ============================================================================
// NOSTRGARDN LIB BARREL EXPORT
// ============================================================================

// Configuration
export * from './config';

// Filtering logic
export * from './filters';

// NDK store and utilities
export { default as ndk, ndkInstance, connect, connectWithSigner } from './stores/ndk';

// Posts store (shared state for prefetch/display)
export { postsStore, prefetchPosts, refreshPosts, hasCachedPosts, isLoading } from './stores/posts';
export type { PostsState } from './stores/posts';

// Existing utilities
export * from './utils';
export * from './theme';

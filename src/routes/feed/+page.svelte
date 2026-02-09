<script lang="ts">
	import FullPostCard from '$lib/components/FullPostCard.svelte';
	import PhotoOnlyFrame from '$lib/components/PhotoOnlyFrame.svelte';
	import { postsStore, refreshPosts } from '$lib/stores/posts';
	import { getLoadingMessage, getDadJoke } from '$lib/utils/dadJokes';

	// Subscribe to the shared posts store for reactive updates
	$: ({ posts, stats, error, loading } = $postsStore);

	// Get random dad jokes
	const loadingJoke = getLoadingMessage();
	const emptyJoke = getDadJoke('empty');

	async function handleRefresh() {
		await refreshPosts();
	}
</script>

<section>
	<header>
		<h1 class="wabi-wobble"><a href="/">nostrgardn</a></h1>
		<p class="subtitle wabi-underline">the feed</p>
	</header>

	{#if loading}
		<div class="status">
			<p class="loading font-mono">{loadingJoke}</p>
		</div>
	{:else if error}
		<div class="status error">
			<p class="font-mono">{getDadJoke('error')}</p>
			<p class="error-detail">{error}</p>
			<button on:click={handleRefresh}>Try Again</button>
		</div>
	{:else if posts.length === 0}
		<div class="status empty">
			<p class="font-mono">{emptyJoke}</p>
			<button on:click={handleRefresh}>Refresh</button>
		</div>
	{:else}
		<!-- Stats (dev mode only) -->
		{#if import.meta.env.DEV}
			<div class="stats">
				<small>
					{stats.total} events &rarr; {posts.length} displayed
					({stats.whitelisted} gardener, {stats.taggedWithImages} guest)
					| Filtered: {stats.rejectedNoTag} no tag, {stats.rejectedNoImages} no images, {stats.blocked} blocked
				</small>
			</div>
		{/if}

		<div class="refresh-bar">
			<button class="refresh-btn" on:click={handleRefresh} disabled={loading}>
				{loading ? getLoadingMessage() : 'Refresh Feed'}
			</button>
		</div>

		<div class="posts">
			{#each posts as post (post.event.id)}
				{#if post.displayType === 'full'}
					<FullPostCard {post} />
				{:else}
					<PhotoOnlyFrame {post} />
				{/if}
			{/each}
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-inline: var(--size-3);
	}

	header {
		text-align: center;
		margin-bottom: var(--size-5);
	}

	h1 {
		color: var(--brand);
		font-size: clamp(2.5rem, 12vw, 6rem);
		font-weight: var(--font-weight-3);
		margin-block: var(--size-3);
		margin-bottom: 0;
	}

	h1 a {
		color: inherit;
		text-decoration: none;
	}

	h1 a:hover {
		color: white;
		text-shadow: rgb(58, 161, 130) 0px 0px 10px;
	}

	.subtitle {
		color: var(--text-2);
		font-size: var(--font-size-fluid-0);
		font-style: italic;
		margin-top: var(--size-1);
	}

	.status {
		text-align: center;
		padding: var(--size-5);
	}

	.status.error {
		color: var(--amber-warm);
	}

	.error-detail {
		font-size: var(--font-size-0);
		color: var(--text-tertiary);
		margin-top: var(--space-sm);
		font-style: italic;
	}

	.status button {
		margin-top: var(--size-3);
		padding: var(--size-2) var(--size-4);
		background: var(--surface-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		color: var(--text-1);
		cursor: pointer;
	}

	.status button:hover {
		background: var(--surface-4);
	}

	.loading {
		color: var(--text-2);
		font-style: italic;
	}

	.stats {
		margin-bottom: var(--size-4);
		padding: var(--size-2) var(--size-3);
		background: var(--surface-1);
		border-radius: var(--radius-2);
		opacity: 0.7;
	}

	.stats small {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.refresh-bar {
		margin-bottom: var(--size-4);
	}

	.refresh-btn {
		padding: var(--size-2) var(--size-4);
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		color: var(--text-2);
		cursor: pointer;
		font-size: var(--font-size-0);
		transition: all 0.2s ease;
	}

	.refresh-btn:hover:not(:disabled) {
		background: var(--surface-3);
		color: var(--text-1);
	}

	.refresh-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-4);
		width: 100%;
		max-width: 900px;
	}
</style>

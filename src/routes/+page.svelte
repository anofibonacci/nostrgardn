<script lang="ts">
	import { site } from '$lib/config';
	import { postsStore } from '$lib/stores/posts';

	// Show a subtle loading indicator if prefetch is in progress
	$: prefetching = $postsStore.loading;
	$: postCount = $postsStore.posts.length;

	// Showcase images from static/pix
	const showcaseImages = [
		'/pix/IMG_20230809_7270.jpeg',
		'/pix/IMG_20230809_7278.jpeg',
		'/pix/IMG_20230809_7292.jpeg',
		'/pix/IMG_20230807_8531.jpeg'
	];
</script>

<svelte:head>
	<title>{site.title} - A curated garden on Nostr</title>
	<meta name="description" content={site.description} />
</svelte:head>

<section class="landing">
	<!-- Hero Section -->
	<header class="hero">
		<h1 class="title">nostrgardn</h1>
		<p class="tagline">An evolving garden befitting ofNostr</p>
	</header>

	<!-- Visual Showcase -->
	<div class="showcase">
		{#each showcaseImages as src, i}
			<div class="showcase-item" style="--delay: {i * 0.1}s">
				<img {src} alt="Garden scene {i + 1}" loading="lazy" />
			</div>
		{/each}
	</div>

	<!-- Mission Teaser -->
	<div class="mission">
		<p>
			We tend this virtual space to celebrate nature's thriving abundance
			through decentralized photo sharing.
		</p>
		<p class="small">
			Powered by <a href="https://nostr.com" target="_blank" rel="noopener">Nostr</a> &mdash;
			the protocol for freedom.
		</p>
	</div>

	<!-- Call to Action -->
	<div class="cta">
		<a href="/feed" class="enter-btn" data-sveltekit-preload-data="hover">
			Enter the Garden
			{#if prefetching}
				<span class="status-dot loading" title="Loading posts..."></span>
			{:else if postCount > 0}
				<span class="status-dot ready" title="{postCount} posts ready"></span>
			{/if}
		</a>
		<a href="/about" class="about-link">Learn how it works</a>
	</div>

	<!-- Subtle footer note -->
	<!--
	<p class="footer-note">
		California, USA
	</p>
	-->
</section>

<style>
	.landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 70vh;
		padding: var(--size-5);
		text-align: center;
	}

	/* Hero */
	.hero {
		margin-bottom: var(--size-7);
	}

	.title {
		color: var(--brand);
		font-size: clamp(3rem, 15vw, 10rem);
		font-weight: var(--font-weight-3);
		margin: 0;
		line-height: 1;
	}

	.tagline {
		color: var(--text-2);
		font-size: var(--font-size-fluid-1);
		font-style: italic;
		margin-top: var(--size-2);
	}

	/* Showcase Grid */
	.showcase {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--size-3);
		max-width: 600px;
		margin-bottom: var(--size-7);
	}

	@media (min-width: 640px) {
		.showcase {
			grid-template-columns: repeat(4, 1fr);
			max-width: 800px;
		}
	}

	.showcase-item {
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: var(--radius-3);
		opacity: 0;
		animation: fadeIn 0.5s ease forwards;
		animation-delay: var(--delay);
	}

	.showcase-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.showcase-item:hover img {
		transform: scale(1.05);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mission */
	.mission {
		max-width: 500px;
		margin-bottom: var(--size-7);
		text-align: center;
	}

	.mission p {
		color: var(--text-1);
		font-size: var(--font-size-fluid-0);
		line-height: 1.6;
		--margin: 0;
	}

	.mission .small {
		color: var(--text-2);
		font-size: var(--font-size-0);
		margin-top: var(--size-3);
	}

	.mission a {
		color: var(--brand);
		text-decoration: none;
	}

	.mission a:hover {
		text-decoration: underline;
	}

	/* CTA */
	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
	}

	.enter-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--size-2);
		padding: var(--size-3) var(--size-6);
		background: var(--brand);
		color: var(--gray-0);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-5);
		text-decoration: none;
		border-radius: var(--radius-3);
		transition: all 0.2s ease;
		box-shadow: 0 4px 12px rgba(58, 161, 130, 0.3);
	}

	.enter-btn:hover {
		background: var(--green-7);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(58, 161, 130, 0.4);
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.status-dot.loading {
		background: var(--yellow-5);
		animation: pulse 1s ease infinite;
	}

	.status-dot.ready {
		background: var(--green-3);
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.about-link {
		color: var(--text-2);
		font-size: var(--font-size-0);
		text-decoration: none;
	}

	.about-link:hover {
		color: var(--text-1);
		text-decoration: underline;
	}

	/* Footer note */
	.footer-note {
		margin-top: var(--size-9);
		color: var(--text-2);
		font-size: var(--font-size-00);
		opacity: 0.6;
	}
</style>

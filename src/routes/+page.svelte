<script lang="ts">
	import { site } from '$lib/config';
	import { postsStore } from '$lib/stores/posts';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import CodeRain from '$lib/components/effects/CodeRain.svelte';
	import { getLoadingMessage } from '$lib/utils/dadJokes';

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

	let isMobile = true;
	onMount(() => {
		if (browser) {
			isMobile = window.innerWidth < 768;
		}
	});

	const loadingJoke = getLoadingMessage();
</script>

<svelte:head>
	<title>{site.title} - A curated garden on Nostr</title>
	<meta name="description" content={site.description} />
</svelte:head>

<section class="landing">
	<!-- Code Rain Background (Desktop Only) -->
	{#if !isMobile}
		<div class="code-rain-bg">
			<CodeRain height="100%" enableMorphing={false} desktop={true} mobile={false} />
		</div>
	{/if}

	<!-- Hero Section -->
	<header class="hero">
		<h1 class="title">nostrgardn</h1>
		<p class="tagline">An evolving garden befitting of Nostr</p>
		<div class="terminal-prompt">
			<span class="prompt-char">$</span>
			<span class="prompt-text">where sprockets meet sprouts</span>
			<span class="cursor">█</span>
		</div>
	</header>

	<!-- Visual Showcase -->
	<div class="showcase">
		{#each showcaseImages as src, i}
			<div class="showcase-item" style="--delay: {i * 0.15}s; --wobble: {(i % 2 === 0 ? 1 : -1) * 0.5}deg;">
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

	<!-- Call to Action (Terminal Style) -->
	<div class="cta">
		<a href="/feed" class="enter-btn" data-sveltekit-preload-data="hover">
			<span class="btn-prompt">&gt;</span>
			<span class="btn-text">./enter_garden.sh</span>
			{#if prefetching}
				<span class="status-dot loading" title="{loadingJoke}"></span>
			{:else if postCount > 0}
				<span class="status-dot ready" title="{postCount} posts ready"></span>
			{/if}
		</a>
		<a href="/about" class="about-link">
			<span class="link-prompt">?</span> cat README.md
		</a>
	</div>
</section>

<style>
	.landing {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		padding: var(--size-5);
		text-align: center;
		overflow: hidden;
	}

	/* Code Rain Background */
	.code-rain-bg {
		position: absolute;
		inset: 0;
		opacity: 0.35;
		pointer-events: none;
		z-index: 0;
	}

	/* Hero */
	.hero {
		position: relative;
		z-index: 1;
		margin-bottom: var(--size-7);
	}

	.title {
		color: var(--brand);
		font-family: 'Cormorant Variable', serif;
		font-size: clamp(3.5rem, 15vw, 10rem);
		font-weight: 300;
		margin: 0;
		line-height: 0.95;
		text-shadow: 0 0 40px rgba(0, 255, 65, 0.3);
		/* Wabi-sabi: Slight wobble */
		transform: rotate(-0.3deg) translate(1px, 0px);
	}

	.tagline {
		color: var(--text-2);
		font-family: 'Cormorant Variable', serif;
		font-size: var(--font-size-fluid-1);
		font-style: italic;
		margin-top: var(--size-2);
		/* Wabi-sabi: Hand-drawn underline */
		text-decoration: underline;
		text-decoration-style: wavy;
		text-decoration-color: var(--text-2);
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
	}

	/* Terminal Prompt */
	.terminal-prompt {
		margin-top: var(--size-3);
		font-family: 'JetBrains Mono', monospace;
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.prompt-char {
		color: var(--brand);
		font-weight: bold;
		margin-right: 0.25rem;
	}

	.prompt-text {
		color: var(--text-2);
	}

	.cursor {
		color: var(--brand);
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	/* Showcase Grid */
	.showcase {
		position: relative;
		z-index: 1;
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
		/* Wabi-sabi: Each image tilts slightly differently */
		transform: rotate(var(--wobble));
		border: 1px solid rgba(0, 255, 65, 0.1);
	}

	.showcase-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
		/* Undo the global img rotate so showcase stays clean */
		transform: rotate(0deg);
	}

	.showcase-item:hover img {
		transform: scale(1.08) rotate(0deg);
	}

	.showcase-item:hover {
		border-color: var(--brand);
		box-shadow: 0 0 12px rgba(0, 255, 65, 0.2);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px) rotate(var(--wobble, 0deg));
		}
		to {
			opacity: 1;
			transform: translateY(0) rotate(var(--wobble, 0deg));
		}
	}

	/* Mission */
	.mission {
		position: relative;
		z-index: 1;
		max-width: 500px;
		margin-bottom: var(--size-7);
		text-align: center;
	}

	.mission p {
		color: var(--text-1);
		font-family: 'Cormorant Variable', serif;
		font-size: 1.15rem;
		line-height: 1.6;
		margin: 0;
	}

	.mission .small {
		color: var(--text-2);
		font-family: 'JetBrains Mono', monospace;
		font-size: var(--font-size-0);
		margin-top: var(--size-3);
	}

	.mission a {
		color: var(--brand);
		text-decoration: none;
	}

	.mission a:hover {
		text-decoration: underline;
		text-decoration-style: wavy;
	}

	/* CTA - Terminal Style */
	.cta {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
	}

	.enter-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.5rem;
		background: var(--surface-2);
		color: var(--text-1);
		font-family: 'JetBrains Mono', monospace;
		font-size: var(--font-size-1);
		text-decoration: none;
		border: 1px solid var(--brand);
		border-radius: var(--radius-3);
		transition: all 0.2s ease;
		box-shadow: 0 0 10px rgba(0, 255, 65, 0.15);
		/* Wabi-sabi: Slight offset */
		transform: translate(0.5px, 0.5px) rotate(0.2deg);
	}

	.enter-btn:hover {
		background: var(--surface-3);
		color: var(--brand);
		transform: translateY(-2px) rotate(0deg);
		box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
		border-color: var(--text-ahover);
	}

	.btn-prompt {
		color: var(--brand);
		font-weight: bold;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.status-dot.loading {
		background: var(--text-ahover);
		animation: pulse 1s ease infinite;
	}

	.status-dot.ready {
		background: var(--brand);
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.about-link {
		color: var(--text-2);
		font-family: 'JetBrains Mono', monospace;
		font-size: var(--font-size-0);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.about-link:hover {
		color: var(--text-1);
	}

	.link-prompt {
		color: var(--text-ahover);
		font-weight: bold;
	}
</style>

<script lang="ts">
	/**
	 * LandingHero - Epic landing page hero section
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Desktop: Full workshop spectacle with code rain, massive type, hexagons
	 * Mobile: Pocket greenhouse — clean, fast, focused
	 *
	 * Usage:
	 *   <LandingHero showcaseImages={imageArray} />
	 */

	import CodeRain from './effects/CodeRain.svelte';
	import HexagonGrid from './HexagonGrid.svelte';
	import RelayStatus from './RelayStatus.svelte';
	import type { HexItem } from './HexagonGrid.svelte';

	export let showcaseImages: HexItem[] = [];
	export let showCodeRain: boolean = true;
	export let showHexagons: boolean = true;
	export let showRelayStatus: boolean = true;

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let isMobile: boolean = false;

	onMount(() => {
		if (browser) {
			isMobile = window.innerWidth < 768;
		}
	});
</script>

<div class="landing-hero">
	<!-- Code Rain Background (Desktop Only) -->
	{#if showCodeRain && !isMobile}
		<div class="code-rain-bg">
			<CodeRain height="100%" enableMorphing={false} desktop={true} mobile={false} />
		</div>
	{/if}

	<!-- Hero Content -->
	<div class="hero-content">
		<!-- Title Section -->
		<header class="hero-header">
			<h1 class="hero-title font-display">
				<span class="title-line">Nostr</span>
				<span class="title-line">Gardn</span>
			</h1>

			<div class="terminal-tagline font-mono">
				<span class="prompt">$</span>
				<span class="tagline">Built with duct tape and cryptography 🔧⚡</span>
			</div>

			<p class="hero-subtitle font-mono">
				A curated garden of photography on Nostr • Cypherpunk meets botanical sanctuary
			</p>
		</header>

		<!-- Terminal Navigation -->
		<nav class="terminal-nav font-mono">
			<a href="/feed" class="nav-link">
				<span class="prompt">&gt;</span>
				<span class="label">./enter_garden.sh</span>
			</a>
			<a href="/pow" class="nav-link">
				<span class="prompt">$</span>
				<span class="label">git log --all</span>
			</a>
			<a href="/about" class="nav-link">
				<span class="prompt">?</span>
				<span class="label">cat README.md</span>
			</a>
		</nav>

		<!-- Relay Status Widget (Collapsible) - Browser only -->
		{#if showRelayStatus && browser}
			<div class="relay-widget">
				<RelayStatus />
			</div>
		{/if}
	</div>

	<!-- Hexagon Showcase Grid -->
	{#if showHexagons && showcaseImages.length > 0}
		<div class="showcase-section">
			<h2 class="showcase-title font-mono">
				<span class="prompt">#</span>
				Latest from the Garden
			</h2>
			<HexagonGrid items={showcaseImages} columns={isMobile ? 2 : 4} glitchOnHover={true} />
		</div>
	{/if}
</div>

<style>
	.landing-hero {
		position: relative;
		min-height: 100vh;
		background: var(--bg-terminal);
		color: var(--text-primary);
		overflow: hidden;
	}

	/* Code Rain Background */
	.code-rain-bg {
		position: absolute;
		inset: 0;
		opacity: 0.3;
		pointer-events: none;
		z-index: 0;
	}

	/* Hero Content */
	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 1400px;
		margin: 0 auto;
		padding: var(--space-3xl) var(--space-xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	/* Title Section */
	.hero-header {
		margin-bottom: var(--space-3xl);
	}

	.hero-title {
		font-size: var(--font-size-11); /* 9.313rem - massive */
		font-weight: 300;
		color: var(--text-terminal);
		text-shadow:
			0 0 30px rgba(0, 255, 65, 0.6),
			0 0 60px rgba(0, 255, 65, 0.3);
		line-height: 0.9;
		margin-bottom: var(--space-lg);
		letter-spacing: -0.02em;
	}

	.title-line {
		display: block;
	}

	/* Mobile: Smaller title */
	@media (max-width: 768px) {
		.hero-title {
			font-size: var(--font-size-8); /* 4.768rem */
		}
	}

	/* Terminal Tagline */
	.terminal-tagline {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
		font-size: var(--font-size-1);
		color: var(--text-secondary);
	}

	.terminal-tagline .prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	.hero-subtitle {
		font-size: var(--font-size-1);
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	/* Terminal Navigation */
	.terminal-nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-md);
		justify-content: center;
		margin-bottom: var(--space-3xl);
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-sm) var(--space-md);
		background: var(--terminal-gray-dark);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-sm);
		color: var(--text-primary);
		text-decoration: none;
		font-size: var(--font-size-0);
		transition: all var(--duration-fast);
		cursor: pointer;

		/* Wabi-sabi: Slight offset */
		transform: translate(
			calc(var(--wobble-sm) * (2 * random() - 1)),
			calc(var(--wobble-sm) * (2 * random() - 1))
		);
	}

	.nav-link:hover {
		background: var(--bg-surface);
		border-color: var(--interactive-hover);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 255, 65, 0.2);
	}

	.nav-link .prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	.nav-link .label {
		color: var(--text-primary);
	}

	/* Relay Widget */
	.relay-widget {
		width: 100%;
		max-width: 600px;
		margin-bottom: var(--space-3xl);
	}

	/* Showcase Section */
	.showcase-section {
		position: relative;
		z-index: 1;
		max-width: 1400px;
		margin: 0 auto;
		padding: var(--space-3xl) var(--space-xl);
	}

	.showcase-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-size: var(--font-size-3);
		color: var(--interactive-hover);
		margin-bottom: var(--space-xl);
		text-align: center;
	}

	.showcase-title .prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.hero-content {
			padding: var(--space-xl) var(--space-md);
		}

		.terminal-tagline {
			font-size: var(--font-size-0);
			flex-direction: column;
			gap: var(--space-xs);
		}

		.hero-subtitle {
			font-size: var(--font-size-0);
		}

		.terminal-nav {
			flex-direction: column;
			width: 100%;
		}

		.nav-link {
			width: 100%;
			justify-content: center;
		}

		.showcase-section {
			padding: var(--space-xl) var(--space-md);
		}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.hero-title {
			text-shadow: none;
		}

		.nav-link:hover {
			transform: none;
			box-shadow: none;
		}
	}
</style>

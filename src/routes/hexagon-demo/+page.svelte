<script lang="ts">
	import HexagonGrid from '$lib/components/HexagonGrid.svelte';
	import type { HexItem } from '$lib/components/HexagonGrid.svelte';

	// Demo showcase images
	const showcaseImages: HexItem[] = [
		{ src: '/pix/IMG_20230809_7270.jpeg', alt: 'Garden scene 1', href: '/feed' },
		{ src: '/pix/IMG_20230809_7278.jpeg', alt: 'Garden scene 2' },
		{ src: '/pix/IMG_20230809_7292.jpeg', alt: 'Garden scene 3' },
		{ src: '/pix/IMG_20230807_8531.jpeg', alt: 'Garden scene 4' },
		{ src: '/pix/IMG_20230809_7270.jpeg', alt: 'Garden scene 5' },
		{ src: '/pix/IMG_20230809_7278.jpeg', alt: 'Garden scene 6' }
	];
</script>

<svelte:head>
	<title>Hexagon Grid Demo - NostrGardn</title>
</svelte:head>

<div class="demo-page">
	<header class="demo-header">
		<h1 class="font-display">Hexagon Grid</h1>
		<p class="font-mono subtitle">The Handbuilt Greenhouse • Honeycomb Showcase</p>
	</header>

	<section class="demo-section">
		<h2 class="font-mono">Default Configuration (4 columns)</h2>
		<p class="description">
			Hover to see VHS glitch effects: scan line → RGB split → amber border settle
		</p>
		<HexagonGrid items={showcaseImages} />
	</section>

	<section class="demo-section">
		<h2 class="font-mono">3 Column Layout</h2>
		<HexagonGrid items={showcaseImages.slice(0, 6)} columns={3} />
	</section>

	<section class="demo-section">
		<h2 class="font-mono">Without Glitch Effects</h2>
		<HexagonGrid items={showcaseImages.slice(0, 4)} columns={4} glitchOnHover={false} />
	</section>

	<div class="demo-notes font-mono">
		<h3>Features:</h3>
		<ul>
			<li>✅ Hexagonal clip-path on desktop</li>
			<li>✅ Wabi-sabi micro-variations (each hex slightly offset/rotated)</li>
			<li>✅ VHS glitch effects on hover (scan → split → settle)</li>
			<li>✅ Responsive: honeycomb on desktop, 2-col grid on mobile</li>
			<li>✅ Keyboard accessible with focus states</li>
			<li>✅ Respects prefers-reduced-motion</li>
		</ul>

		<h3>Mobile Behavior:</h3>
		<p>
			Resize window below 768px to see mobile layout: hexagons become rounded cards in 2-column grid
		</p>
	</div>

	<footer class="demo-footer font-mono">
		<p>Built with duct tape and cryptography 🔧⚡</p>
		<nav>
			<a href="/terminal-demo">← Terminal Demo</a>
			<span>|</span>
			<a href="/code-rain-demo">Code Rain Demo →</a>
		</nav>
	</footer>
</div>

<style>
	.demo-page {
		min-height: 100vh;
		background: var(--bg-terminal);
		color: var(--text-primary);
		padding: var(--space-xl);
	}

	.demo-header {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	h1 {
		font-size: var(--font-size-9);
		color: var(--text-terminal);
		margin-bottom: var(--space-sm);
		text-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
	}

	.subtitle {
		font-size: var(--font-size-1);
		color: var(--text-secondary);
	}

	.demo-section {
		max-width: 1400px;
		margin: 0 auto var(--space-3xl);
		padding: var(--space-xl);
		background: var(--bg-surface);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-lg);
	}

	h2 {
		font-size: var(--font-size-3);
		color: var(--interactive-hover);
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--border-subtle);
	}

	.description {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin-bottom: var(--space-lg);
	}

	.demo-notes {
		max-width: 800px;
		margin: 0 auto var(--space-3xl);
		padding: var(--space-lg);
		background: var(--terminal-gray);
		border: 1px dashed var(--border-subtle);
		border-radius: var(--radius-md);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
	}

	.demo-notes h3 {
		color: var(--code-rain);
		font-size: var(--font-size-2);
		margin-bottom: var(--space-sm);
		margin-top: var(--space-lg);
	}

	.demo-notes h3:first-child {
		margin-top: 0;
	}

	.demo-notes ul {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-md);
	}

	.demo-notes li {
		padding-left: var(--space-md);
		margin-bottom: var(--space-xs);
	}

	.demo-notes p {
		margin: var(--space-sm) 0;
		line-height: 1.6;
	}

	.demo-footer {
		text-align: center;
		margin-top: var(--space-3xl);
		padding-top: var(--space-xl);
		border-top: 1px dashed var(--border-subtle);
		color: var(--text-tertiary);
	}

	.demo-footer p {
		margin-bottom: var(--space-sm);
	}

	.demo-footer nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-md);
	}

	.demo-footer a {
		color: var(--interactive-hover);
		text-decoration: none;
		transition: color var(--duration-fast);
	}

	.demo-footer a:hover {
		color: var(--code-rain);
		text-decoration: underline;
	}

	.demo-footer span {
		color: var(--text-tertiary);
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		.demo-page {
			padding: var(--space-lg);
		}

		h1 {
			font-size: var(--font-size-7);
		}

		.demo-section {
			padding: var(--space-md);
		}
	}
</style>

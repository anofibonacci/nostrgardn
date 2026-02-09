<script lang="ts">
	/**
	 * HexagonGrid - Honeycomb showcase grid for landing page
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Desktop: Hexagonal honeycomb pattern with VHS glitch effects
	 * Mobile: Simple vertical card grid
	 *
	 * Usage:
	 *   <HexagonGrid items={showcaseImages} />
	 */

	export interface HexItem {
		src: string;
		alt: string;
		href?: string;
	}

	export let items: HexItem[] = [];
	export let columns: number = 4; // Desktop columns
	export let glitchOnHover: boolean = true;

	// Wabi-sabi: Slight variations for each hexagon
	const variations = items.map(() => ({
		offsetX: Math.random() * 2 - 1, // -1 to 1px
		offsetY: Math.random() * 2 - 1,
		rotate: Math.random() * 1 - 0.5 // -0.5 to 0.5 degrees
	}));

	let hoveredIndex: number | null = null;
	let glitchPhase: 'scan' | 'split' | 'settle' | null = null;

	function handleMouseEnter(index: number) {
		if (!glitchOnHover) return;
		hoveredIndex = index;

		// VHS glitch sequence
		glitchPhase = 'scan';
		setTimeout(() => (glitchPhase = 'split'), 100);
		setTimeout(() => (glitchPhase = 'settle'), 150);
		setTimeout(() => (glitchPhase = null), 300);
	}

	function handleMouseLeave() {
		hoveredIndex = null;
		glitchPhase = null;
	}
</script>

<div class="hexagon-grid" style="--columns: {columns}">
	{#each items as item, i}
		{@const variation = variations[i]}
		{@const isHovered = hoveredIndex === i}

		<div
			class="hex-wrapper"
			class:hovered={isHovered}
			class:glitch-scan={isHovered && glitchPhase === 'scan'}
			class:glitch-split={isHovered && glitchPhase === 'split'}
			class:glitch-settle={isHovered && glitchPhase === 'settle'}
			on:mouseenter={() => handleMouseEnter(i)}
			on:mouseleave={handleMouseLeave}
			role="button"
			tabindex="0"
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					if (item.href) window.location.href = item.href;
				}
			}}
			style="--offset-x: {variation.offsetX}px; --offset-y: {variation.offsetY}px; --rotate: {variation.rotate}deg;"
		>
			{#if item.href}
				<a href={item.href} class="hex-link">
					<div class="hexagon">
						<img src={item.src} alt={item.alt} loading="lazy" />
						<div class="hex-overlay" aria-hidden="true"></div>
					</div>
				</a>
			{:else}
				<div class="hexagon">
					<img src={item.src} alt={item.alt} loading="lazy" />
					<div class="hex-overlay" aria-hidden="true"></div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.hexagon-grid {
		display: grid;
		gap: var(--space-md);
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-lg);
	}

	/* Mobile: Simple 2-column grid, no hexagons */
	@media (max-width: 768px) {
		.hexagon-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-sm);
		}

		.hexagon {
			clip-path: none !important;
			border-radius: var(--radius-md);
		}
	}

	/* Desktop: Hexagon honeycomb */
	@media (min-width: 769px) {
		.hexagon-grid {
			grid-template-columns: repeat(var(--columns), 1fr);
			gap: var(--space-lg);
		}

		/* Offset every other row for honeycomb effect */
		.hex-wrapper:nth-child(even) {
			transform: translateY(calc(var(--space-lg) * 0.5));
		}
	}

	.hex-wrapper {
		position: relative;
		aspect-ratio: 1;
		transition: transform var(--duration-fast) var(--ease-out);

		/* Wabi-sabi: Slight imperfection */
		transform: translate(var(--offset-x), var(--offset-y)) rotate(var(--rotate));
	}

	.hex-wrapper:hover {
		transform: translate(var(--offset-x), var(--offset-y)) rotate(var(--rotate)) scale(1.05);
		z-index: 10;
	}

	.hex-link {
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	.hexagon {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;

		/* Hexagon shape (desktop only) */
		clip-path: polygon(
			30% 0%,
			70% 0%,
			100% 50%,
			70% 100%,
			30% 100%,
			0% 50%
		);

		transition: all var(--duration-normal) var(--ease-out);
	}

	.hexagon img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.hex-wrapper:hover .hexagon img {
		transform: scale(1.1);
	}

	/* Hex overlay for glitch effects */
	.hex-overlay {
		position: absolute;
		inset: 0;
		background: transparent;
		pointer-events: none;
		transition: all var(--duration-fast) var(--ease-out);
	}

	/* VHS Glitch Effects */
	.hex-wrapper.glitch-scan .hex-overlay {
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(0, 255, 65, 0.1) 50%,
			transparent 100%
		);
		animation: scan-line 100ms linear;
	}

	@keyframes scan-line {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}

	.hex-wrapper.glitch-split .hexagon {
		filter:
			drop-shadow(2px 0 0 rgba(255, 0, 0, 0.5))
			drop-shadow(-2px 0 0 rgba(0, 255, 255, 0.5));
	}

	.hex-wrapper.glitch-settle .hexagon {
		border: 2px solid var(--amber-warm);
		box-shadow:
			0 0 10px rgba(255, 149, 0, 0.3),
			inset 0 0 10px rgba(255, 149, 0, 0.1);
	}

	/* Settled hover state */
	.hex-wrapper.hovered:not(.glitch-scan):not(.glitch-split) .hex-overlay {
		background: linear-gradient(
			135deg,
			transparent 0%,
			rgba(255, 149, 0, 0.1) 100%
		);
	}

	/* Keyboard focus */
	.hex-wrapper:focus-visible {
		outline: 2px solid var(--interactive-hover);
		outline-offset: 4px;
		border-radius: var(--radius-sm);
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.hex-wrapper,
		.hexagon,
		.hexagon img,
		.hex-overlay {
			transition: none !important;
			animation: none !important;
		}

		.hex-wrapper:hover {
			transform: translate(var(--offset-x), var(--offset-y)) rotate(var(--rotate));
		}

		.hex-wrapper.glitch-scan .hex-overlay,
		.hex-wrapper.glitch-split .hexagon,
		.hex-wrapper.glitch-settle .hexagon {
			animation: none;
			filter: none;
			border: none;
			box-shadow: none;
		}
	}
</style>

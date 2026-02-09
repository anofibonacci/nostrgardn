<script lang="ts">
	/**
	 * CodeRain - Matrix-style falling code animation with ASCII art morphing
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Desktop: Canvas-based animation with Nostr event data morphing into ASCII plants
	 * Mobile: Minimal CSS fallback or disabled for performance
	 *
	 * Usage:
	 *   <CodeRain height="400px" />
	 */

	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let height: string = '400px';
	export let enableMorphing: boolean = true; // ASCII art morphing
	export let desktop: boolean = true; // Use Canvas on desktop
	export let mobile: boolean = false; // Show on mobile (CSS fallback)

	// Nostr-themed characters for the rain
	const nostrChars = [
		// JSON keys
		'"kind"',
		'"pubkey"',
		'"content"',
		'"tags"',
		'"sig"',
		'"created_at"',
		// Nostr data snippets
		'npub1',
		'note1',
		'nevent1',
		'nsec1',
		// Lightning
		'lnbc',
		'⚡',
		'sats',
		// Terminal
		'$ ',
		'> ',
		'./  ',
		'npm ',
		'git ',
		// Punctuation
		':',
		'{',
		'}',
		'[',
		']',
		',',
		// Nature ASCII
		'🌱',
		'🌿',
		'🍃',
		'🌾'
	];

	// ASCII art plants that code morphs into
	const asciiPlants = [
		// Fern
		`    ,@@@,
   @@@@@@@
  @@@@@@@@@
 @@@@@@@@@@@
   @@@@@@@
     |||`,

		// Flower
		`   _\\/_
   /o\\
  ( = )
   |||
   |||`,

		// Tree
		`   ^^^
  ^^^^^
 ^^^^^^^
   |||
   |||`,

		// Sprout
		`  \\/
  /\\
  ||
  ||`,

		// Tall grass
		`  |||
 | | |
|| | ||
  |||`
	];

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationFrame: number;
	let drops: number[] = [];
	let morphTimer: number = 0;
	let currentPlant: string | null = null;
	let plantAlpha: number = 0;
	let isMobile: boolean = false;

	// Wabi-sabi: Slight speed variations per column
	let columnSpeeds: number[] = [];

	onMount(() => {
		if (!browser) return;

		// Check if mobile
		isMobile = window.innerWidth < 768;

		// Skip canvas setup if mobile and not enabled
		if (isMobile && !mobile) return;

		// Skip canvas if desktop not enabled
		if (!isMobile && !desktop) return;

		// Setup canvas
		if (canvas) {
			setupCanvas();
			animate();
		}
	});

	onDestroy(() => {
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});

	function setupCanvas() {
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width;
		canvas.height = rect.height;

		ctx = canvas.getContext('2d');
		if (!ctx) return;

		const fontSize = isMobile ? 10 : 14;
		const columns = Math.floor(canvas.width / fontSize);

		// Wabi-sabi: Stagger initial positions so columns aren't synchronized
		const rows = Math.floor(canvas.height / fontSize);
		drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * rows));

		// Wabi-sabi: Wide speed spread so fast/slow strands are visibly distinct
		columnSpeeds = drops.map(() => 0.18 + Math.random() * 0.36); // 0.18 to 0.54

		ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
	}

	function animate() {
		if (!ctx || !canvas) return;

		// Fade effect — higher alpha = faster fade = more contrast between rain and dark bg
		ctx.fillStyle = 'rgba(8, 8, 8, 0.07)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Code rain color — slightly dialed back from full #00ff41 (~8% dimmer)
		ctx.fillStyle = 'rgba(0, 235, 60, 0.92)';

		const fontSize = isMobile ? 10 : 14;

		// Draw characters
		for (let i = 0; i < drops.length; i++) {
			// Pick random Nostr character
			const text = nostrChars[Math.floor(Math.random() * nostrChars.length)];

			// Draw character
			const x = i * fontSize;
			const y = drops[i] * fontSize;

			ctx.fillText(text, x, y);

			// Reset drop to top — looser threshold so columns restart at different times
			if (y > canvas.height && Math.random() > 0.95) {
				drops[i] = 0;
			}

			// Move drop down at wabi-sabi speed
			drops[i] += columnSpeeds[i];
		}

		// ASCII art morphing (desktop only)
		if (enableMorphing && !isMobile) {
			morphTimer++;

			// Every ~240 frames (4 seconds at 60fps), start morphing
			if (morphTimer >= 240 && !currentPlant) {
				currentPlant = asciiPlants[Math.floor(Math.random() * asciiPlants.length)];
				plantAlpha = 0;
			}

			// Fade in plant
			if (currentPlant && plantAlpha < 1) {
				plantAlpha += 0.02;
			}

			// Hold for ~300 frames (5 seconds)
			if (currentPlant && plantAlpha >= 1 && morphTimer < 540) {
				// Hold plant
			}

			// Fade out plant
			if (currentPlant && morphTimer >= 540) {
				plantAlpha -= 0.02;
				if (plantAlpha <= 0) {
					currentPlant = null;
					morphTimer = 0;
				}
			}

			// Draw ASCII plant in center
			if (currentPlant && plantAlpha > 0) {
				ctx.save();
				ctx.fillStyle = `rgba(255, 149, 0, ${plantAlpha})`; // Amber color
				ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

				const lines = currentPlant.split('\n');
				const plantWidth = Math.max(...lines.map((line) => line.length)) * fontSize;
				const plantHeight = lines.length * fontSize * 1.5;
				const startX = (canvas.width - plantWidth) / 2;
				const startY = (canvas.height - plantHeight) / 2;

				lines.forEach((line, index) => {
					ctx!.fillText(line, startX, startY + index * fontSize * 1.5);
				});

				ctx.restore();
			}
		}

		animationFrame = requestAnimationFrame(animate);
	}
</script>

<div class="code-rain-wrapper" style="--height: {height}">
	{#if browser}
		{#if (desktop && !isMobile) || (mobile && isMobile)}
			<canvas
				bind:this={canvas}
				class="code-rain-canvas"
				aria-hidden="true"
				data-motion="animated"
			></canvas>
		{:else if isMobile}
			<!-- CSS fallback for mobile (simpler, lighter) -->
			<div class="code-rain-css" aria-hidden="true">
				{#each Array(8) as _, i}
					<div class="rain-column" style="--delay: {i * 0.3}s; --duration: {3 + i * 0.2}s">
						{#each nostrChars.slice(0, 15) as char}
							<span>{char}</span>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.code-rain-wrapper {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		overflow: hidden;
	}

	.code-rain-canvas {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* CSS fallback for mobile */
	.code-rain-css {
		position: absolute;
		inset: 0;
		display: flex;
		gap: var(--space-md);
		justify-content: space-around;
		overflow: hidden;
	}

	.rain-column {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--code-rain);
		opacity: 0.6;
		animation: rain-fall var(--duration, 3s) linear infinite;
		animation-delay: var(--delay, 0s);
	}

	@keyframes rain-fall {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		10% {
			opacity: 0.6;
		}
		90% {
			opacity: 0.6;
		}
		100% {
			transform: translateY(100vh);
			opacity: 0;
		}
	}

	/* Reduced motion: Static gradient instead of animation */
	@media (prefers-reduced-motion: reduce) {
		.code-rain-canvas,
		.code-rain-css {
			display: none;
		}

		.code-rain-wrapper {
			background: linear-gradient(
				180deg,
				var(--terminal-black) 0%,
				var(--terminal-gray-dark) 100%
			);
		}
	}
</style>

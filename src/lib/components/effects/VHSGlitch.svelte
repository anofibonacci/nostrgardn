<script lang="ts">
	/**
	 * VHSGlitch - Apply VHS glitch effects to wrapped content
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Three-phase glitch sequence:
	 * 1. Scan line sweeps across (100ms)
	 * 2. RGB channel split (red/blue offset, 50ms)
	 * 3. Settles with amber border glow
	 *
	 * Usage:
	 *   <VHSGlitch trigger={isHovered}>
	 *     <YourContent />
	 *   </VHSGlitch>
	 */

	export let trigger: boolean = false; // External trigger (hover, click, etc.)
	export let autoGlitch: boolean = false; // Auto-trigger every X seconds
	export let autoInterval: number = 5000; // Auto-glitch interval (ms)
	export let intensity: 'subtle' | 'medium' | 'heavy' = 'medium'; // Glitch intensity

	type GlitchPhase = 'scan' | 'split' | 'settle' | null;
	let glitchPhase: GlitchPhase = null;
	let autoTimer: ReturnType<typeof setInterval> | null = null;

	// Intensity settings
	const intensitySettings = {
		subtle: { splitOffset: 1, borderWidth: 1, glowSize: 5 },
		medium: { splitOffset: 2, borderWidth: 2, glowSize: 10 },
		heavy: { splitOffset: 4, borderWidth: 3, glowSize: 15 }
	};

	const currentIntensity = intensitySettings[intensity];

	$: if (trigger && !glitchPhase) {
		startGlitchSequence();
	}

	$: if (!trigger) {
		glitchPhase = null;
	}

	$: if (autoGlitch && !autoTimer) {
		autoTimer = setInterval(() => {
			startGlitchSequence();
		}, autoInterval);
	} else if (!autoGlitch && autoTimer) {
		clearInterval(autoTimer);
		autoTimer = null;
	}

	function startGlitchSequence() {
		glitchPhase = 'scan';
		setTimeout(() => (glitchPhase = 'split'), 100);
		setTimeout(() => (glitchPhase = 'settle'), 150);
		setTimeout(() => (glitchPhase = null), 300);
	}

	// Cleanup
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		if (autoTimer) clearInterval(autoTimer);
	});
</script>

<div
	class="vhs-glitch"
	class:scan={glitchPhase === 'scan'}
	class:split={glitchPhase === 'split'}
	class:settle={glitchPhase === 'settle'}
	style="--split-offset: {currentIntensity.splitOffset}px; --border-width: {currentIntensity.borderWidth}px; --glow-size: {currentIntensity.glowSize}px;"
>
	<slot />
	<div class="glitch-overlay" aria-hidden="true"></div>
</div>

<style>
	.vhs-glitch {
		position: relative;
		display: inline-block;
		transition: all var(--duration-fast) var(--ease-out);
	}

	.glitch-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: transparent;
		transition: all var(--duration-fast) var(--ease-out);
	}

	/* Phase 1: Scan line sweep */
	.vhs-glitch.scan .glitch-overlay {
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(0, 255, 65, 0.1) 50%,
			transparent 100%
		);
		animation: scan-sweep 100ms linear;
	}

	@keyframes scan-sweep {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}

	/* Phase 2: RGB channel split */
	.vhs-glitch.split {
		filter: drop-shadow(var(--split-offset) 0 0 rgba(255, 0, 0, 0.5))
			drop-shadow(calc(var(--split-offset) * -1) 0 0 rgba(0, 255, 255, 0.5));
	}

	/* Phase 3: Amber border settle */
	.vhs-glitch.settle {
		border: var(--border-width) solid var(--amber-warm);
		box-shadow:
			0 0 var(--glow-size) rgba(255, 149, 0, 0.3),
			inset 0 0 var(--glow-size) rgba(255, 149, 0, 0.1);
	}

	/* Reduced motion: Disable all effects */
	@media (prefers-reduced-motion: reduce) {
		.vhs-glitch.scan .glitch-overlay,
		.vhs-glitch.split,
		.vhs-glitch.settle {
			animation: none;
			filter: none;
			border: none;
			box-shadow: none;
		}
	}
</style>

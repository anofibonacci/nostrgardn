<script lang="ts">
	/**
	 * LoadingBar - Terminal-style progress indicator
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Usage:
	 *   <LoadingBar progress={75} message="Photosynthesizing..." />
	 *   <LoadingBar indeterminate message="Watering the relays..." />
	 *   <LoadingBar progress={50} variant="success" showPercentage />
	 */

	type Variant = 'default' | 'success' | 'warning' | 'chaos';

	export let progress: number = 0; // 0-100
	export let message: string = '';
	export let indeterminate: boolean = false;
	export let variant: Variant = 'default';
	export let showPercentage: boolean = true;
	export let barLength: number = 20; // Number of characters in progress bar

	// Generate terminal-style progress bar: [████████░░░░]
	$: filled = Math.round((progress / 100) * barLength);
	$: empty = barLength - filled;
	$: bar = '█'.repeat(filled) + '░'.repeat(empty);
	$: percentage = Math.round(progress);
</script>

<div class="loading-bar" class:indeterminate class:chaos={variant === 'chaos'}>
	{#if message}
		<div class="message font-mono">
			{message}
		</div>
	{/if}

	<div class="bar-container">
		<span class="bracket" aria-hidden="true">[</span>
		<span
			class="bar"
			class:success={variant === 'success'}
			class:warning={variant === 'warning'}
			class:chaos={variant === 'chaos'}
			role="progressbar"
			aria-valuenow={progress}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-label={message || 'Loading'}
		>
			{bar}
		</span>
		<span class="bracket" aria-hidden="true">]</span>

		{#if showPercentage && !indeterminate}
			<span class="percentage">{percentage}%</span>
		{/if}
	</div>
</div>

<style>
	.loading-bar {
		font-family: var(--font-mono);
		color: var(--text-terminal);
		line-height: 1.5;
	}

	.message {
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin-bottom: var(--space-xs);
		text-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
	}

	.bar-container {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-1);
	}

	.bracket {
		color: var(--text-terminal);
		font-weight: 700;
	}

	.bar {
		color: var(--interactive-default);
		text-shadow: 0 0 8px rgba(0, 255, 65, 0.5);
		letter-spacing: -0.05em; /* Tighten character spacing for bars */
		transition: color var(--duration-normal) var(--ease-out);
	}

	/* Indeterminate animation */
	.loading-bar.indeterminate .bar {
		animation: pulse 1.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			text-shadow: 0 0 8px rgba(0, 255, 65, 0.5);
		}
		50% {
			opacity: 0.5;
			text-shadow: 0 0 4px rgba(0, 255, 65, 0.2);
		}
	}

	/* Variants */
	.bar.success {
		color: var(--moss-green);
		text-shadow: 0 0 8px rgba(74, 95, 63, 0.5);
	}

	.bar.warning {
		color: var(--amber-warm);
		text-shadow: 0 0 8px rgba(255, 149, 0, 0.5);
	}

	/* Chaos variant - Comic Sans mayhem */
	.loading-bar.chaos {
		font-family: var(--font-chaos);
	}

	.loading-bar.chaos .bar {
		color: var(--amber-warm);
		animation: wobble 0.5s ease-in-out infinite;
	}

	@keyframes wobble {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-2px);
		}
	}

	.percentage {
		color: var(--text-secondary);
		font-size: var(--font-size-0);
		min-width: 3em;
		text-align: right;
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.bar,
		.loading-bar.chaos .bar {
			animation: none !important;
		}
	}
</style>

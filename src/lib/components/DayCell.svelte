<script lang="ts">
	import { goto } from '$app/navigation';
	import type { DayStats } from '../types';

	export let day: DayStats;

	function handleClick() {
		if (day.date) {
			// Format: /pow/YYYY/MM/DD
			const [year, month, dayNum] = day.date.split('-');
			goto(`/pow/${year}/${month}/${dayNum}`);
		}
	}

	function getTooltip(): string {
		if (!day.date) return '';
		if (day.count === 0) return `${day.date}: no photos`;
		if (day.count === 1) return `${day.date}: 1 photo`;
		return `${day.date}: ${day.count} photos`;
	}

	function getColorClass(): string {
		const baseClass = 'pow-cell';
		if (day.intensity === 0) return `${baseClass} pow-empty`;
		if (day.intensity === 1) return `${baseClass} pow-level-1`;
		if (day.intensity === 2) return `${baseClass} pow-level-2`;
		if (day.intensity === 3) return `${baseClass} pow-level-3`;
		return `${baseClass} pow-level-4`;
	}
</script>

<div
	class={getColorClass()}
	title={getTooltip()}
	role="button"
	tabindex="0"
	on:click={handleClick}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			handleClick();
		}
	}}
	aria-label={getTooltip()}
/>

<style>
	.pow-cell {
		width: var(--pow-cell-size, 12px);
		height: var(--pow-cell-size, 12px);
		border-radius: var(--pow-cell-radius, 2px);
		cursor: pointer;
		border: 1px solid transparent;
		transition: all 0.2s ease;
	}

	.pow-cell:not(.pow-empty) {
		cursor: pointer;
	}

	.pow-cell:not(.pow-empty):hover {
		transform: scale(1.15);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.pow-cell:focus {
		outline: 2px solid var(--color-text-primary);
		outline-offset: 1px;
	}

	/* Color classes */
	.pow-empty {
		background-color: transparent;
		border-color: var(--color-border-subtle);
	}

	.pow-level-1 {
		background-color: var(--pow-level-1);
	}

	.pow-level-2 {
		background-color: var(--pow-level-2);
	}

	.pow-level-3 {
		background-color: var(--pow-level-3);
	}

	.pow-level-4 {
		background-color: var(--pow-level-4);
	}
</style>

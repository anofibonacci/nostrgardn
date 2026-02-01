<script lang="ts">
	import { currentYearWeeks } from '../stores/pow';
	import DayCell from './DayCell.svelte';

	const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
</script>

<div class="heatmap-container">
	<!-- Weekday labels (aligned with grid columns) -->
	<div class="weekday-labels">
		{#each weekdayLabels as label}
			<div class="weekday-label">{label}</div>
		{/each}
	</div>

	<!-- Heatmap grid -->
	<div class="weeks-container">
		{#each $currentYearWeeks as week}
			<div class="week">
				{#each week as day}
					<DayCell {day} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.heatmap-container {
		display: flex;
		gap: var(--size-3);
		width: 100%;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		padding: var(--size-3) 0;
	}

	.weekday-labels {
		display: flex;
		flex-direction: column;
		gap: var(--pow-cell-gap, 2px);
		flex-shrink: 0;
	}

	.weekday-label {
		width: auto;
		height: var(--pow-cell-size, 12px);
		font-size: var(--font-size--2);
		font-weight: 600;
		color: var(--color-text-secondary);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		user-select: none;
		min-width: 24px;
	}

	.weeks-container {
		display: flex;
		gap: var(--pow-cell-gap, 2px);
		flex-shrink: 0;
	}

	.week {
		display: flex;
		flex-direction: column;
		gap: var(--pow-cell-gap, 2px);
	}

	@media (min-width: 768px) {
		:root {
			--pow-cell-size: 14px;
			--pow-cell-gap: 3px;
		}
	}
</style>

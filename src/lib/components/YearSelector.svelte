<script lang="ts">
	import { selectedYear } from '../stores/pow';
	import { getAvailableYears, getYearRange } from '../stores/pow';

	const availableYears = getAvailableYears();
	const [minYear, maxYear] = getYearRange();
</script>

<div class="year-selector">
	<label for="year-select">Year:</label>
	<select
		id="year-select"
		bind:value={$selectedYear}
		on:change
	>
		{#each availableYears as year (year)}
			<option value={year}>
				{year}
			</option>
		{/each}
	</select>
	<span class="year-range">({minYear} - {maxYear})</span>
</div>

<style>
	.year-selector {
		display: flex;
		align-items: center;
		gap: var(--size-3);
		margin-bottom: var(--size-5);
	}

	label {
		font-weight: 600;
		font-size: var(--font-size-1);
	}

	select {
		padding: var(--size-2) var(--size-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		font-size: var(--font-size-0);
		font-family: inherit;
		cursor: pointer;
		background-color: var(--color-bg-secondary);
		color: var(--color-text-primary);
		min-width: 100px;
		transition: border-color 0.2s ease;
	}

	select:hover {
		border-color: var(--color-border-hover);
	}

	select:focus {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}

	.year-range {
		font-size: var(--font-size--1);
		color: var(--color-text-secondary);
	}

	@media (max-width: 640px) {
		.year-selector {
			margin-bottom: var(--size-4);
		}

		select {
			min-width: 80px;
		}
	}
</style>

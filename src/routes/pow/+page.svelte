<script lang="ts">
	import { getYearRange } from '$lib/stores/pow';
	import YearSelector from '$lib/components/YearSelector.svelte';
	import PowHeatmap from '$lib/components/PowHeatmap.svelte';

	const [minYear, maxYear] = getYearRange();
</script>

<svelte:head>
	<title>Proof of Work - Visual History</title>
	<meta name="description" content="GitHub-style contributions heatmap showing daily photo activity" />
</svelte:head>

<main class="pow-page">
	<header class="pow-header">
		<h1>Proof of Work</h1>
		<p class="subtitle">Visual history of daily photo activity</p>
	</header>

	<section class="pow-section">
		<YearSelector />
		<PowHeatmap />
	</section>

	<footer class="pow-footer">
		<p>
			Click any day to view photos from that date. Data spans {minYear} to {maxYear}.
		</p>
	</footer>
</main>

<style>
	.pow-page {
		max-width: 1200px;
		margin: var(--size-7) auto;
		padding: var(--size-4);
	}

	.pow-header {
		margin-bottom: var(--size-7);
		text-align: center;
	}

	.pow-header h1 {
		margin: 0 0 var(--size-2) 0;
		font-size: var(--font-size-5);
		font-weight: 700;
	}

	.subtitle {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: var(--font-size-1);
	}

	.pow-section {
		background-color: var(--color-bg-secondary);
		padding: var(--size-5);
		border-radius: var(--radius-3);
		border: 1px solid var(--color-border);
	}

	.pow-footer {
		margin-top: var(--size-5);
		text-align: center;
		color: var(--color-text-secondary);
		font-size: var(--font-size-0);
	}

	.pow-footer p {
		margin: 0;
	}

	@media (max-width: 640px) {
		.pow-page {
			margin: var(--size-5) auto;
			padding: var(--size-3);
		}

		.pow-header h1 {
			font-size: var(--font-size-4);
		}

		.pow-section {
			padding: var(--size-4);
		}
	}
</style>

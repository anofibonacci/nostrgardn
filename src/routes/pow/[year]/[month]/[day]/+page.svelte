<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getPhotosForDay, getDiaryForDay } from '$lib/stores/pow';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import DiaryEntry from '$lib/components/DiaryEntry.svelte';

	$: year = $page.params.year;
	$: month = $page.params.month;
	$: day = $page.params.day;
	$: dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

	$: photos = getPhotosForDay(dateStr);
	$: diary = getDiaryForDay(dateStr);

	function formatDate(dateStr: string): string {
		// Parse YYYY-MM-DD in local time (not UTC)
		const [year, month, day] = dateStr.split('-').map(Number);
		const date = new Date(year, month - 1, day);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		});
	}

	function goBack() {
		goto('/pow');
	}
</script>

<svelte:head>
	<title>Photos from {formatDate(dateStr)} - Proof of Work</title>
	<meta name="description" content="Photos from {formatDate(dateStr)}" />
</svelte:head>

<main class="day-view">
	<header class="day-header">
		<button class="back-button" on:click={goBack} aria-label="Back to heatmap">
			← Back to Calendar
		</button>
		<div class="day-title-section">
			<h1>{formatDate(dateStr)}</h1>
			<p class="photo-count">
				{photos.length} {photos.length === 1 ? 'photo' : 'photos'}
			</p>
		</div>
	</header>

	{#if photos.length > 0}
		<section class="photos-section">
			<DiaryEntry content={diary} date={dateStr} />
			<PhotoGrid {photos} />
		</section>
	{:else}
		<section class="empty-state">
			<p>No photos from this date</p>
			<button class="return-button" on:click={goBack}>Return to Calendar</button>
		</section>
	{/if}
</main>

<style>
	.day-view {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--size-4);
	}

	.day-header {
		margin-bottom: var(--size-7);
	}

	.back-button {
		background: none;
		border: none;
		color: var(--color-link);
		cursor: pointer;
		font-size: var(--font-size-0);
		font-weight: 600;
		padding: 0;
		margin-bottom: var(--size-3);
		transition: color 0.2s ease;
	}

	.back-button:hover {
		color: var(--color-link-hover);
	}

	.day-title-section h1 {
		margin: var(--size-3) 0 var(--size-2) 0;
		font-size: var(--font-size-5);
		font-weight: 700;
	}

	.photo-count {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: var(--font-size-1);
	}

	.photos-section {
		margin-bottom: var(--size-7);
	}

	.empty-state {
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-3);
		padding: var(--size-7);
		text-align: center;
	}

	.empty-state p {
		margin: 0 0 var(--size-4) 0;
		color: var(--color-text-secondary);
		font-size: var(--font-size-1);
	}

	.return-button {
		padding: var(--size-2) var(--size-4);
		background-color: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		cursor: pointer;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.return-button:hover {
		background-color: var(--color-bg-secondary);
	}

	@media (max-width: 640px) {
		.day-view {
			padding: var(--size-3);
		}

		.day-header {
			margin-bottom: var(--size-5);
		}

		.day-title-section h1 {
			font-size: var(--font-size-4);
		}
	}
</style>

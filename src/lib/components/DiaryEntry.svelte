<script lang="ts">
	export let content: string | null;
	export let date: string = '';
</script>

{#if content}
	<div class="diary-card">
		<div class="diary-header">
			<h3>Diary Entry</h3>
			{#if date}
				<span class="diary-date">{date}</span>
			{/if}
		</div>
		<div class="diary-content">
			{@html content.replace(/\n/g, '<br />')}
		</div>
	</div>
{:else if date}
	<div class="diary-empty">
		<p>No diary entry for {date}</p>
	</div>
{/if}

<style>
	.diary-card {
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-3);
		padding: var(--size-5);
		margin-bottom: var(--size-5);
	}

	.diary-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: var(--size-3);
		border-bottom: 2px solid var(--color-border);
		padding-bottom: var(--size-2);
	}

	.diary-header h3 {
		margin: 0;
		font-size: var(--font-size-2);
		font-weight: 700;
	}

	.diary-date {
		font-size: var(--font-size--1);
		color: var(--color-text-secondary);
	}

	.diary-content {
		font-size: var(--font-size-0);
		line-height: 1.6;
		color: var(--color-text-primary);
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	.diary-empty {
		background-color: var(--color-bg-tertiary);
		border: 1px dashed var(--color-border);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		margin-bottom: var(--size-5);
		text-align: center;
	}

	.diary-empty p {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: var(--font-size-0);
	}
</style>

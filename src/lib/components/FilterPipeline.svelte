<script lang="ts">
	/**
	 * FilterPipeline - CSS-only vertical flowchart showing the 4-step
	 * post filtering decision tree used by NostrGardn.
	 *
	 * Part of "The Handbuilt Greenhouse" design system.
	 * Purely presentational — no data fetching or relay interaction.
	 *
	 * Usage:
	 *   <FilterPipeline />
	 */

	type Step = {
		number: number;
		question: string;
		yesLabel: string;
		noLabel: string;
		yesResult: string | null;
		noResult: string | null;
		terminal: 'yes' | 'no' | null;
	};

	const steps: Step[] = [
		{
			number: 1,
			question: 'From our relay?',
			yesLabel: 'Yes',
			noLabel: 'No',
			yesResult: null,
			noResult: 'Ignored',
			terminal: 'no'
		},
		{
			number: 2,
			question: 'Gardener pubkey?',
			yesLabel: 'Yes',
			noLabel: 'No',
			yesResult: 'Full post displayed',
			noResult: null,
			terminal: 'yes'
		},
		{
			number: 3,
			question: 'Required tags?',
			yesLabel: 'Yes',
			noLabel: 'No',
			yesResult: null,
			noResult: 'Ignored',
			terminal: 'no'
		},
		{
			number: 4,
			question: 'Has images?',
			yesLabel: 'Yes',
			noLabel: 'No',
			yesResult: 'Images displayed \u{1F331}',
			noResult: 'No images found',
			terminal: null
		}
	];

	let hoveredStep: number | null = null;
</script>

<div
	class="filter-pipeline"
	role="img"
	aria-label="Post filtering pipeline: 4-step decision tree showing how posts are filtered before display. Step 1 checks relay origin, Step 2 checks gardener pubkey, Step 3 checks required tags, Step 4 checks for images."
>
	<!-- Entry node -->
	<div class="entry-node" class:glowing={hoveredStep !== null}>
		<span class="entry-icon" aria-hidden="true">{'\u{1F4E1}'}</span>
		<span class="entry-text">Post arrives on relay</span>
	</div>

	<!-- Connector from entry to first step -->
	<div class="connector" class:active={hoveredStep !== null} aria-hidden="true"></div>

	<!-- Steps -->
	{#each steps as step, i (step.number)}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="step-wrapper"
			class:hovered={hoveredStep === step.number}
			on:mouseenter={() => (hoveredStep = step.number)}
			on:mouseleave={() => (hoveredStep = null)}
		>
			<div class="decision-row">
				<!-- Step number -->
				<div class="step-number" class:active={hoveredStep === step.number}>
					{step.number}
				</div>

				<!-- Decision box -->
				<div class="decision-box">
					<span class="question">{step.question}</span>
				</div>
			</div>

			<!-- Branches -->
			<div class="branches">
				<!-- Yes branch -->
				<div class="branch yes-branch">
					<span class="branch-label yes-label">{step.yesLabel}</span>
					{#if step.yesResult}
						<span class="result success-result">{step.yesResult}</span>
					{:else}
						<span class="result continue-result">continue &darr;</span>
					{/if}
				</div>

				<!-- No branch -->
				<div class="branch no-branch">
					<span class="branch-label no-label">{step.noLabel}</span>
					{#if step.noResult}
						<span class="result rejected-result">{step.noResult}</span>
					{:else}
						<span class="result continue-result">continue &darr;</span>
					{/if}
				</div>
			</div>
		</div>

		<!-- Connector between steps (except after last) -->
		{#if i < steps.length - 1}
			<div
				class="connector"
				class:active={hoveredStep === step.number || hoveredStep === steps[i + 1].number}
				aria-hidden="true"
			></div>
		{/if}
	{/each}
</div>

<style>
	.filter-pipeline {
		font-family: var(--font-mono);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		padding: var(--space-md);
		max-width: 480px;
		margin: 0 auto;
	}

	/* ===== Entry node ===== */
	.entry-node {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-xs) var(--space-md);
		background: var(--terminal-gray-dark);
		border: 1px dashed var(--border-subtle);
		border-radius: var(--radius-md);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		transition: border-color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
	}

	.entry-node.glowing {
		border-color: var(--code-rain);
		background: var(--terminal-gray);
	}

	.entry-icon {
		font-size: var(--font-size-2);
		line-height: 1;
	}

	.entry-text {
		white-space: nowrap;
	}

	/* ===== Vertical connectors ===== */
	.connector {
		width: 2px;
		height: 24px;
		background: var(--border-subtle);
		transition: background-color var(--duration-fast) var(--ease-out);
	}

	.connector.active {
		background: var(--code-rain);
	}

	/* ===== Step wrapper ===== */
	.step-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-2xs);
	}

	/* ===== Decision row (number + box) ===== */
	.decision-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		width: 100%;
		justify-content: center;
	}

	/* Step number circle */
	.step-number {
		width: 22px;
		height: 22px;
		min-width: 22px;
		border-radius: 50%;
		background: var(--terminal-gray);
		color: var(--text-secondary);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-00);
		font-weight: bold;
		line-height: 1;
		transition: background-color var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out);
	}

	.step-number.active {
		background: var(--code-rain);
		color: var(--terminal-black);
	}

	/* Decision box */
	.decision-box {
		background: var(--terminal-gray-dark);
		border: 1px dashed var(--border-subtle);
		border-radius: var(--radius-md);
		padding: var(--space-xs) var(--space-md);
		transition: border-color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out),
			box-shadow var(--duration-fast) var(--ease-out);
	}

	.step-wrapper.hovered .decision-box {
		border-color: var(--code-rain);
		background: var(--terminal-gray);
		box-shadow: 0 0 12px rgba(0, 255, 65, 0.3);
	}

	.question {
		font-size: var(--font-size-0);
		color: var(--text-primary);
		white-space: nowrap;
	}

	/* ===== Branches ===== */
	.branches {
		display: flex;
		gap: var(--space-lg);
		justify-content: center;
		width: 100%;
		padding: var(--space-3xs) 0;
	}

	.branch {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		font-size: var(--font-size-00);
		transition: opacity var(--duration-fast) var(--ease-out);
	}

	.step-wrapper.hovered .branch {
		opacity: 1;
	}

	/* Branch labels */
	.branch-label {
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: bold;
		font-size: var(--font-size-00);
		letter-spacing: 0.03em;
	}

	.yes-label {
		color: var(--code-rain);
		background: rgba(0, 255, 65, 0.1);
	}

	.no-label {
		color: var(--clay-terracotta);
		background: rgba(160, 82, 45, 0.1);
	}

	/* Result text */
	.result {
		font-size: var(--font-size-00);
	}

	.success-result {
		color: var(--code-rain);
	}

	.rejected-result {
		color: var(--text-tertiary);
		font-style: italic;
	}

	.continue-result {
		color: var(--text-tertiary);
		font-size: var(--font-size-00);
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		.entry-node,
		.connector,
		.step-number,
		.decision-box,
		.branch {
			transition: none;
		}
	}

	/* ===== Mobile responsive ===== */
	@media (max-width: 480px) {
		.filter-pipeline {
			padding: var(--space-sm);
			max-width: 100%;
		}

		.branches {
			gap: var(--space-md);
		}

		.decision-box {
			padding: var(--space-3xs) var(--space-xs);
		}

		.question {
			font-size: var(--font-size-00);
		}

		.entry-node {
			padding: var(--space-3xs) var(--space-xs);
			font-size: var(--font-size-00);
		}

		.entry-icon {
			font-size: var(--font-size-1);
		}

		.connector {
			height: 16px;
		}
	}
</style>

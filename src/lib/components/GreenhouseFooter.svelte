<script lang="ts">
	/**
	 * GreenhouseFooter - Reusable footer component
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Usage:
	 *   <GreenhouseFooter />
	 */

	export let showNav: boolean = true;
	export let compact: boolean = false;

	// Rotate between two garden shed steampunk taglines
	const taglines = [
		{ text: 'Assembled from copper pipes and compost', icons: '🪠♻️' },
		{ text: 'Where sprockets meet sprouts', icons: '⚙️🌱' }
	];

	// Pick random tagline on component mount
	const tagline = taglines[Math.floor(Math.random() * taglines.length)];
</script>

<footer class="greenhouse-footer font-mono" class:compact>
	<!-- Badge/Tagline -->
	<div class="footer-badge wabi-wobble">
		<span class="badge-text">{tagline.text}</span>
		<span class="badge-icons">{tagline.icons}</span>
	</div>

	<!-- Navigation (optional) -->
	{#if showNav}
		<nav class="footer-nav">
			<a href="/feed" class="footer-link">Feed</a>
			<span class="separator">•</span>
			<a href="/pow" class="footer-link">PoW</a>
			<span class="separator">•</span>
			<a href="/about" class="footer-link">About</a>
			<span class="separator">•</span>
			<a href="/relays" class="footer-link">Relays</a>
		</nav>
	{/if}

	<!-- Subtle Dad Joke -->
	<div class="footer-hint">
		{#if !compact}
			<p>(And occasionally held together with hope)</p>
		{/if}
	</div>
</footer>

<style>
	.greenhouse-footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-xl) var(--space-md);
		background: var(--terminal-gray-dark);
		border-top: 1px dashed var(--border-subtle);
		color: var(--text-tertiary);
		font-size: var(--font-size-0);
	}

	.greenhouse-footer.compact {
		padding: var(--space-md);
		gap: var(--space-sm);
	}

	/* Footer Badge */
	.footer-badge {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-xs) var(--space-md);
		background: var(--terminal-black);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-round);
		color: var(--text-primary);
	}

	.badge-text {
		font-size: var(--font-size-0);
	}

	.badge-icons {
		font-size: var(--font-size-1);
	}

	/* Footer Navigation */
	.footer-nav {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer-link {
		color: var(--interactive-hover);
		text-decoration: none;
		transition: color var(--duration-fast);
	}

	.footer-link:hover {
		color: var(--code-rain);
		text-decoration: underline;
	}

	.separator {
		color: var(--text-tertiary);
		font-size: var(--font-size-00);
	}

	/* Footer Hint */
	.footer-hint {
		font-size: var(--font-size-00);
		font-style: italic;
		color: var(--text-tertiary);
		text-align: center;
	}

	.footer-hint p {
		margin: 0;
	}

	/* Mobile Responsive */
	@media (max-width: 640px) {
		.greenhouse-footer {
			padding: var(--space-lg) var(--space-md);
		}

		.footer-badge {
			flex-direction: column;
			gap: var(--space-xs);
			padding: var(--space-sm);
		}

		.badge-text {
			font-size: var(--font-size-00);
			text-align: center;
		}

		.footer-nav {
			font-size: var(--font-size-00);
		}
	}
</style>

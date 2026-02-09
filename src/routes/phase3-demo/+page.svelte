<script lang="ts">
	import { getDadJoke, dadJokes } from '$lib/utils/dadJokes';
	import LoadingBar from '$lib/components/terminal/LoadingBar.svelte';
	import TerminalButton from '$lib/components/terminal/TerminalButton.svelte';
	import GreenhouseFooter from '$lib/components/GreenhouseFooter.svelte';

	let currentLoadingJoke = getDadJoke('loading');
	let currentSuccessJoke = getDadJoke('success');
	let currentErrorJoke = getDadJoke('error');
	let currentGitJoke = getDadJoke('git');
	let currentTerminalJoke = getDadJoke('terminal');

	function refreshJokes() {
		currentLoadingJoke = getDadJoke('loading');
		currentSuccessJoke = getDadJoke('success');
		currentErrorJoke = getDadJoke('error');
		currentGitJoke = getDadJoke('git');
		currentTerminalJoke = getDadJoke('terminal');
	}
</script>

<svelte:head>
	<title>Phase 3: Polish & Dad Jokes - NostrGardn</title>
</svelte:head>

<div class="demo-page">
	<header class="demo-header">
		<h1 class="font-display">Phase 3: Light Polish</h1>
		<p class="font-mono subtitle">Dad Jokes & Subtle Charm • No Glitches, Just Vibes ⚡</p>
	</header>

	<!-- Dad Joke System Demo -->
	<section class="demo-section">
		<div class="section-header">
			<h2 class="font-mono">
				<span class="prompt">$</span>
				Dad Joke Loading System
			</h2>
			<TerminalButton variant="primary" on:click={refreshJokes}>
				Refresh Jokes
			</TerminalButton>
		</div>

		<p class="description font-mono">
			Rotating terminal messages with maximum dad energy. Click "Refresh Jokes" to get new ones!
		</p>

		<!-- Loading Messages -->
		<div class="joke-showcase">
			<h3 class="font-mono category-title">Loading Messages:</h3>
			<LoadingBar progress={45} message={currentLoadingJoke} showPercentage={false} />
			<LoadingBar indeterminate message={getDadJoke('loading')} showPercentage={false} />
		</div>

		<!-- Success Messages -->
		<div class="joke-showcase">
			<h3 class="font-mono category-title">Success Messages:</h3>
			<LoadingBar progress={100} variant="success" message={currentSuccessJoke} />
		</div>

		<!-- Error Messages -->
		<div class="joke-showcase">
			<h3 class="font-mono category-title">Error Messages:</h3>
			<div class="error-box font-mono">
				<span class="error-icon">⚠️</span>
				<span class="error-text">{currentErrorJoke}</span>
			</div>
		</div>

		<!-- Git Messages -->
		<div class="joke-showcase">
			<h3 class="font-mono category-title">Git Commit Style:</h3>
			<div class="terminal-box font-mono">
				<span class="prompt">$</span>
				<span class="command">{currentGitJoke}</span>
			</div>
		</div>

		<!-- Terminal Commands -->
		<div class="joke-showcase">
			<h3 class="font-mono category-title">Terminal Commands:</h3>
			<div class="terminal-box font-mono">
				<span class="prompt">$</span>
				<span class="command">{currentTerminalJoke}</span>
			</div>
		</div>
	</section>

	<!-- All Dad Jokes List -->
	<section class="demo-section">
		<h2 class="font-mono">
			<span class="prompt">#</span>
			Complete Dad Joke Arsenal
		</h2>

		<div class="jokes-grid">
			<!-- Loading -->
			<div class="joke-category">
				<h3 class="font-mono">Loading ({dadJokes.loading.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.loading as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>

			<!-- Success -->
			<div class="joke-category">
				<h3 class="font-mono">Success ({dadJokes.success.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.success as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>

			<!-- Error -->
			<div class="joke-category">
				<h3 class="font-mono">Error ({dadJokes.error.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.error as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>

			<!-- Git -->
			<div class="joke-category">
				<h3 class="font-mono">Git ({dadJokes.git.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.git as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>

			<!-- Terminal -->
			<div class="joke-category">
				<h3 class="font-mono">Terminal ({dadJokes.terminal.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.terminal as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>

			<!-- Nostr -->
			<div class="joke-category">
				<h3 class="font-mono">Nostr ({dadJokes.nostr.length})</h3>
				<ul class="joke-list font-mono">
					{#each dadJokes.nostr as joke}
						<li>{joke}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<!-- Footer Component Demo -->
	<section class="demo-section">
		<h2 class="font-mono">
			<span class="prompt">&gt;</span>
			Greenhouse Footer Component
		</h2>

		<p class="description font-mono">Reusable footer with dad energy badge</p>

		<div class="footer-demo">
			<div class="footer-preview">
				<GreenhouseFooter />
			</div>

			<div class="footer-preview compact-preview">
				<GreenhouseFooter compact={true} showNav={false} />
			</div>
		</div>
	</section>

	<!-- Error Page Preview -->
	<section class="demo-section">
		<h2 class="font-mono">
			<span class="prompt">!</span>
			Terminal-Style 404 Page
		</h2>

		<p class="description font-mono">
			Try visiting a non-existent page like:
			<a href="/this-page-doesnt-exist" class="test-link">/this-page-doesnt-exist</a>
		</p>

		<div class="terminal-box font-mono">
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="command">cd /page-you-wanted</span>
			</div>
			<div class="output-line error">
				<span class="error-code">Error 404:</span>
				This page touched grass and never came back.
			</div>
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="comment"># (Random dad joke appears here)</span>
			</div>
		</div>
	</section>

	<!-- Phase 3 Summary -->
	<section class="demo-section summary">
		<h2 class="font-mono success">
			<span class="prompt">✓</span>
			Phase 3 Progress: Light Polish Applied
		</h2>

		<div class="checklist font-mono">
			<div class="checklist-item">
				<span class="check">✅</span>
				<span class="label">Dad Joke Loading System (6 categories, 80+ jokes)</span>
			</div>
			<div class="checklist-item">
				<span class="check">✅</span>
				<span class="label">Terminal-Style 404 Error Page</span>
			</div>
			<div class="checklist-item">
				<span class="check">✅</span>
				<span class="label">Greenhouse Footer Component</span>
			</div>
			<div class="checklist-item pending">
				<span class="check">⏳</span>
				<span class="label">Subtle Wabi-Sabi touches (next steps)</span>
			</div>
			<div class="checklist-item pending">
				<span class="check">⏳</span>
				<span class="label">Performance optimization (next steps)</span>
			</div>
		</div>
	</section>
</div>

<!-- Reusable Footer -->
<GreenhouseFooter />

<style>
	.demo-page {
		min-height: 100vh;
		background: var(--bg-terminal);
		color: var(--text-primary);
		padding: var(--space-xl);
	}

	.demo-header {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	h1 {
		font-size: var(--font-size-9);
		color: var(--text-terminal);
		margin-bottom: var(--space-sm);
		text-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
	}

	.subtitle {
		font-size: var(--font-size-1);
		color: var(--text-secondary);
	}

	.demo-section {
		max-width: 1400px;
		margin: 0 auto var(--space-3xl);
		padding: var(--space-xl);
		background: var(--bg-surface);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-lg);
	}

	.demo-section.summary {
		background: var(--terminal-gray-dark);
		border-color: var(--code-rain);
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-md);
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	h2 {
		font-size: var(--font-size-3);
		color: var(--interactive-hover);
		margin-bottom: var(--space-md);
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	h2.success {
		color: var(--code-rain);
	}

	.prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	.description {
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin-bottom: var(--space-lg);
		line-height: 1.6;
	}

	.test-link {
		color: var(--interactive-hover);
		text-decoration: underline;
	}

	/* Joke Showcase */
	.joke-showcase {
		margin-bottom: var(--space-xl);
	}

	.category-title {
		font-size: var(--font-size-1);
		color: var(--amber-warm);
		margin-bottom: var(--space-sm);
	}

	.error-box,
	.terminal-box {
		padding: var(--space-md);
		background: var(--terminal-black);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-0);
	}

	.error-box {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		border-left: 3px solid var(--amber-warm);
		background: rgba(255, 149, 0, 0.05);
	}

	.error-icon {
		font-size: var(--font-size-2);
	}

	.error-text {
		color: var(--amber-warm);
	}

	.terminal-box {
		color: var(--text-primary);
	}

	.command {
		color: var(--text-primary);
	}

	.output-line {
		margin-bottom: var(--space-xs);
	}

	.output-line.error {
		color: var(--amber-warm);
	}

	.error-code {
		font-weight: bold;
		margin-right: var(--space-xs);
	}

	.comment {
		color: var(--text-tertiary);
		font-style: italic;
	}

	/* Jokes Grid */
	.jokes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-lg);
	}

	.joke-category h3 {
		font-size: var(--font-size-1);
		color: var(--code-rain);
		margin-bottom: var(--space-sm);
		padding-bottom: var(--space-xs);
		border-bottom: 1px solid var(--border-subtle);
	}

	.joke-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.joke-list li {
		padding: var(--space-xs) 0;
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
	}

	.joke-list li:last-child {
		border-bottom: none;
	}

	/* Footer Demo */
	.footer-demo {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.footer-preview {
		border: 2px solid var(--border-subtle);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.compact-preview {
		max-width: 600px;
	}

	/* Checklist */
	.checklist {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		padding: var(--space-lg);
		background: var(--terminal-black);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
	}

	.checklist-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-1);
	}

	.checklist-item.pending .label {
		color: var(--text-secondary);
	}

	.check {
		color: var(--code-rain);
		font-size: var(--font-size-2);
	}

	.label {
		color: var(--text-primary);
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.demo-page {
			padding: var(--space-lg);
		}

		h1 {
			font-size: var(--font-size-7);
		}

		.demo-section {
			padding: var(--space-md);
		}

		.jokes-grid {
			grid-template-columns: 1fr;
		}

		.section-header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

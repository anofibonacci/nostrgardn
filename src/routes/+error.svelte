<script lang="ts">
	import { page } from '$app/stores';
	import { getDadJoke } from '$lib/utils/dadJokes';

	$: status = $page.status;
	$: message = $page.error?.message || 'Unknown error';

	// Get a random error dad joke
	const errorJoke = getDadJoke('error');
	const terminalJoke = getDadJoke('terminal');
</script>

<svelte:head>
	<title>Error {status} - NostrGardn</title>
</svelte:head>

<div class="error-page font-mono">
	<div class="terminal-window">
		<!-- Terminal Header -->
		<div class="terminal-header">
			<div class="terminal-buttons">
				<span class="button red"></span>
				<span class="button yellow"></span>
				<span class="button green"></span>
			</div>
			<div class="terminal-title">nostrgardn@greenhouse:~</div>
		</div>

		<!-- Terminal Body -->
		<div class="terminal-body">
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="command">cd /page-you-wanted</span>
			</div>

			<div class="output-line error">
				<span class="error-code">Error {status}:</span>
				{#if status === 404}
					This page touched grass and never came back.
				{:else if status === 500}
					Internal Server Error (the greenhouse is on fire)
				{:else}
					{message}
				{/if}
			</div>

			<div class="output-line">
				<span class="prompt">$</span>
				<span class="comment"># {errorJoke}</span>
			</div>

			<div class="output-line spacer"></div>

			<!-- Git Status Style -->
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="command">git status</span>
			</div>

			<div class="output-line status">
				<span class="status-label">On branch:</span>
				<span class="status-value">lost-in-the-weeds</span>
			</div>

			<div class="output-line status">
				<span class="status-label">Status:</span>
				<span class="status-value warning">nothing to commit, working tree is confused</span>
			</div>

			<div class="output-line spacer"></div>

			<!-- Suggestions -->
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="comment"># Try these instead:</span>
			</div>

			<div class="nav-links">
				<a href="/" class="nav-link">
					<span class="prompt">&gt;</span>
					<span>./enter_garden.sh</span>
					<span class="hint">(Home)</span>
				</a>

				<a href="/feed" class="nav-link">
					<span class="prompt">&gt;</span>
					<span>./view_feed.sh</span>
					<span class="hint">(Feed)</span>
				</a>

				<a href="/pow" class="nav-link">
					<span class="prompt">&gt;</span>
					<span>git log --all</span>
					<span class="hint">(PoW)</span>
				</a>

				<a href="/about" class="nav-link">
					<span class="prompt">&gt;</span>
					<span>cat README.md</span>
					<span class="hint">(About)</span>
				</a>
			</div>

			<div class="output-line spacer"></div>

			<!-- Footer Joke -->
			<div class="output-line">
				<span class="prompt">$</span>
				<span class="command">{terminalJoke}</span>
			</div>

			<div class="output-line">
				<span class="cursor">█</span>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="error-footer">
		<p>Built with duct tape and cryptography 🔧⚡</p>
		<p class="hint">(And occasionally held together with hope)</p>
	</footer>
</div>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--bg-terminal);
		color: var(--text-primary);
		padding: var(--space-xl);
	}

	/* Terminal Window */
	.terminal-window {
		width: 100%;
		max-width: 800px;
		background: var(--terminal-black);
		border: 2px solid var(--border-accent);
		border-radius: var(--radius-md);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
		overflow: hidden;
	}

	.terminal-header {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-sm) var(--space-md);
		background: var(--terminal-gray-dark);
		border-bottom: 1px solid var(--border-subtle);
	}

	.terminal-buttons {
		display: flex;
		gap: var(--space-xs);
	}

	.button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.button.red {
		background: #ff5f56;
	}
	.button.yellow {
		background: #ffbd2e;
	}
	.button.green {
		background: #27c93f;
	}

	.terminal-title {
		flex: 1;
		text-align: center;
		font-size: var(--font-size-0);
		color: var(--text-secondary);
	}

	/* Terminal Body */
	.terminal-body {
		padding: var(--space-lg);
		font-size: var(--font-size-1);
		line-height: 1.6;
	}

	.output-line {
		margin-bottom: var(--space-sm);
		color: var(--text-primary);
	}

	.output-line.spacer {
		height: var(--space-md);
	}

	.prompt {
		color: var(--code-rain);
		margin-right: var(--space-xs);
		font-weight: bold;
	}

	.command {
		color: var(--text-primary);
	}

	.comment {
		color: var(--text-tertiary);
		font-style: italic;
	}

	.output-line.error {
		color: var(--amber-warm);
		margin-left: var(--space-md);
		padding: var(--space-sm);
		background: rgba(255, 149, 0, 0.1);
		border-left: 3px solid var(--amber-warm);
	}

	.error-code {
		font-weight: bold;
		margin-right: var(--space-xs);
	}

	.output-line.status {
		margin-left: var(--space-md);
		color: var(--text-secondary);
	}

	.status-label {
		color: var(--text-tertiary);
		margin-right: var(--space-xs);
	}

	.status-value {
		color: var(--text-primary);
	}

	.status-value.warning {
		color: var(--amber-warm);
	}

	/* Navigation Links */
	.nav-links {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-left: var(--space-md);
		margin-top: var(--space-md);
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-xs) var(--space-sm);
		color: var(--text-primary);
		text-decoration: none;
		border-radius: var(--radius-sm);
		transition: all var(--duration-fast);
	}

	.nav-link:hover {
		background: var(--terminal-gray-dark);
		padding-left: var(--space-md);
	}

	.nav-link .hint {
		margin-left: auto;
		color: var(--text-tertiary);
		font-size: var(--font-size-0);
	}

	/* Cursor */
	.cursor {
		color: var(--code-rain);
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	/* Footer */
	.error-footer {
		margin-top: var(--space-3xl);
		text-align: center;
		color: var(--text-tertiary);
		font-size: var(--font-size-0);
	}

	.error-footer p {
		margin-bottom: var(--space-xs);
	}

	.error-footer .hint {
		font-style: italic;
		font-size: var(--font-size-00);
	}

	/* Mobile Responsive */
	@media (max-width: 640px) {
		.error-page {
			padding: var(--space-md);
		}

		.terminal-window {
			border-radius: var(--radius-sm);
		}

		.terminal-body {
			padding: var(--space-md);
			font-size: var(--font-size-0);
		}

		.terminal-title {
			font-size: var(--font-size-00);
		}
	}
</style>

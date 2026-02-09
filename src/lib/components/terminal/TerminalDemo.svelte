<script lang="ts">
	/**
	 * TerminalDemo - Showcase of Terminal UI components
	 * View at: /terminal-demo route (create route to see this)
	 */

	import TerminalButton from './TerminalButton.svelte';
	import LoadingBar from './LoadingBar.svelte';
	import StatusBadge from './StatusBadge.svelte';

	let progress = 0;
	let isLoading = false;

	function simulateProgress() {
		isLoading = true;
		progress = 0;
		const interval = setInterval(() => {
			progress += 10;
			if (progress >= 100) {
				clearInterval(interval);
				isLoading = false;
			}
		}, 300);
	}
</script>

<div class="terminal-demo">
	<h1 class="font-display">Terminal UI Components</h1>
	<p class="font-mono subtitle">The Handbuilt Greenhouse Design System</p>

	<!-- Buttons Section -->
	<section class="demo-section">
		<h2 class="font-mono">TerminalButton</h2>

		<div class="demo-grid">
			<div class="demo-item">
				<p class="label">Default</p>
				<TerminalButton>./enter_garden.sh</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Primary</p>
				<TerminalButton variant="primary" icon="$">Run Script</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Success</p>
				<TerminalButton variant="success" icon="✓">Planted</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Danger</p>
				<TerminalButton variant="danger" icon="✗">Compost</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Chaos (Comic Sans!)</p>
				<TerminalButton variant="chaos" icon="🌿">Touch Grass</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Loading</p>
				<TerminalButton loading>Processing...</TerminalButton>
			</div>

			<div class="demo-item">
				<p class="label">Disabled</p>
				<TerminalButton disabled>Unavailable</TerminalButton>
			</div>

			<div class="demo-item full-width">
				<p class="label">Full Width</p>
				<TerminalButton fullWidth icon="➜">Navigate to /pow</TerminalButton>
			</div>
		</div>
	</section>

	<!-- Loading Bars Section -->
	<section class="demo-section">
		<h2 class="font-mono">LoadingBar</h2>

		<div class="demo-stack">
			<div class="demo-item">
				<p class="label">Default Progress</p>
				<LoadingBar {progress} message="Photosynthesizing your feed..." />
			</div>

			<div class="demo-item">
				<p class="label">Success Variant</p>
				<LoadingBar progress={75} variant="success" message="Watering the relays..." />
			</div>

			<div class="demo-item">
				<p class="label">Warning Variant</p>
				<LoadingBar progress={30} variant="warning" message="git commit -m 'fix: garden'" />
			</div>

			<div class="demo-item">
				<p class="label">Indeterminate</p>
				<LoadingBar indeterminate message="Consulting the almanac..." showPercentage={false} />
			</div>

			<div class="demo-item">
				<p class="label">Chaos Mode (Comic Sans!)</p>
				<LoadingBar progress={50} variant="chaos" message="npm install grass --save-dev" />
			</div>

			<div class="demo-item">
				<TerminalButton variant="primary" on:click={simulateProgress} disabled={isLoading}>
					{isLoading ? 'Running...' : 'Simulate Progress'}
				</TerminalButton>
			</div>
		</div>
	</section>

	<!-- Status Badges Section -->
	<section class="demo-section">
		<h2 class="font-mono">StatusBadge</h2>

		<div class="demo-grid">
			<div class="demo-item">
				<p class="label">Connected</p>
				<StatusBadge status="connected">3/5 relays</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Disconnected</p>
				<StatusBadge status="disconnected">Offline</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Connecting (animated)</p>
				<StatusBadge status="connecting" pulse>Connecting...</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Warning</p>
				<StatusBadge status="warning">Slow</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Master Gardener</p>
				<StatusBadge role="master" pulse>Built This Thing</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Trusted Gardener</p>
				<StatusBadge role="gardener">Trusted</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Pleb</p>
				<StatusBadge role="pleb">Guest</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Blocked</p>
				<StatusBadge role="blocked">Spam</StatusBadge>
			</div>

			<div class="demo-item">
				<p class="label">Custom Icon</p>
				<StatusBadge icon="⚡">Lightning</StatusBadge>
			</div>
		</div>
	</section>

	<!-- Dad Joke Examples -->
	<section class="demo-section">
		<h2 class="font-mono">Dad Joke Loading Messages (Examples)</h2>

		<div class="demo-stack">
			<LoadingBar progress={15} message="~/garden$ npm install grass --save-dev" />
			<LoadingBar
				progress={40}
				variant="success"
				message="git commit -m 'feat: added one (1) tomato 🍅'"
			/>
			<LoadingBar progress={65} message="Checking if robots.txt allows gardening..." />
			<LoadingBar progress={90} variant="warning" message="// TODO: Figure out why this works" />
			<LoadingBar indeterminate message="NIP-420: Proof of Photosynthesis (Draft)" />
		</div>
	</section>

	<!-- Footer -->
	<footer class="demo-footer font-mono">
		<p>Built with duct tape and cryptography 🔧⚡</p>
		<p class="font-chaos">Maximum Dad Jokes Enabled</p>
		<nav class="demo-nav">
			<a href="/code-rain-demo">Code Rain Demo →</a>
			<span>|</span>
			<a href="/hexagon-demo">Hexagon Demo →</a>
		</nav>
	</footer>
</div>

<style>
	.terminal-demo {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-2xl);
		font-family: var(--font-mono);
		color: var(--text-primary);
		background: var(--bg-terminal);
		min-height: 100vh;
	}

	h1 {
		font-size: var(--font-size-8);
		color: var(--text-terminal);
		margin-bottom: var(--space-xs);
		text-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
	}

	.subtitle {
		font-size: var(--font-size-1);
		color: var(--text-secondary);
		margin-bottom: var(--space-3xl);
	}

	.demo-section {
		margin-bottom: var(--space-3xl);
		padding: var(--space-lg);
		background: var(--bg-surface);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
	}

	h2 {
		font-size: var(--font-size-3);
		color: var(--interactive-hover);
		margin-bottom: var(--space-lg);
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--border-subtle);
	}

	.demo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-lg);
	}

	.demo-stack {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.demo-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.demo-item.full-width {
		grid-column: 1 / -1;
	}

	.label {
		font-size: var(--font-size-0);
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.demo-footer {
		margin-top: var(--space-3xl);
		padding-top: var(--space-xl);
		border-top: 1px dashed var(--border-subtle);
		text-align: center;
		color: var(--text-tertiary);
	}

	.demo-footer p {
		margin-bottom: var(--space-xs);
	}

	.demo-footer .font-chaos {
		color: var(--amber-warm);
	}

	.demo-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-md);
		margin-top: var(--space-md);
	}

	.demo-nav a {
		color: var(--interactive-hover);
		text-decoration: none;
		transition: color var(--duration-fast);
	}

	.demo-nav a:hover {
		color: var(--code-rain);
		text-decoration: underline;
	}

	.demo-nav span {
		color: var(--text-tertiary);
	}

	/* Mobile responsive */
	@media (max-width: 640px) {
		.terminal-demo {
			padding: var(--space-lg);
		}

		h1 {
			font-size: var(--font-size-6);
		}

		.demo-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	import CodeRain from '$lib/components/effects/CodeRain.svelte';

	let enableMorphing = true;
	let desktopEnabled = true;
	let mobileEnabled = false;
</script>

<svelte:head>
	<title>Code Rain Demo - NostrGardn</title>
</svelte:head>

<div class="demo-page">
	<header class="demo-header">
		<h1 class="font-display">Code Rain Animation</h1>
		<p class="font-mono subtitle">The Matrix meets Nostr • Digital photosynthesis in progress</p>
	</header>

	<section class="demo-section">
		<h2 class="font-mono">Full Canvas Experience (Desktop)</h2>
		<p class="description">
			Watch Nostr event data fall like rain, morphing into ASCII art plants every 4 seconds.
			Meditative. Hypnotic. Built with duct tape and cryptography. 🌧️💻
		</p>
		<CodeRain height="500px" enableMorphing={true} />
	</section>

	<section class="demo-section">
		<h2 class="font-mono">Without Morphing</h2>
		<p class="description">Pure code rain, no ASCII plants.</p>
		<CodeRain height="300px" enableMorphing={false} />
	</section>

	<section class="demo-section">
		<h2 class="font-mono">Mobile CSS Fallback</h2>
		<p class="description">
			Lightweight CSS animation for mobile devices (resize browser below 768px to see difference).
		</p>
		<CodeRain height="300px" desktop={true} mobile={true} enableMorphing={false} />
	</section>

	<div class="demo-notes font-mono">
		<h3>Features:</h3>
		<ul>
			<li>✅ Canvas-based Matrix rain (desktop)</li>
			<li>✅ Nostr event data as falling characters</li>
			<li>✅ ASCII art morphing (plants emerge from code every 8-10s)</li>
			<li>✅ Wabi-sabi variations (each column falls at slightly different speed)</li>
			<li>✅ CSS fallback for mobile (lightweight)</li>
			<li>✅ Respects prefers-reduced-motion (static gradient)</li>
			<li>✅ Terminal greenhouse color palette</li>
		</ul>

		<h3>Performance:</h3>
		<p>
			Desktop: Canvas animation at 60fps (~0.5-1% CPU on modern hardware)<br />
			Mobile: CSS-only fallback or disabled (user configurable)<br />
			Reduced motion: Static gradient background
		</p>

		<h3>Character Set:</h3>
		<code class="char-showcase">
			"kind": "pubkey": "content": npub1 note1 nevent1 lnbc ⚡ sats $ > ./ npm git : {"{ }"}
			[ ] , 🌱 🌿 🍃 🌾
		</code>

		<h3>ASCII Plants:</h3>
		<pre class="ascii-showcase">
  Fern        Flower       Tree        Sprout      Grass
  ,@@@,        _\/_         ^^^          \/        |||
 @@@@@@@      /o\         ^^^^^         /\       | | |
@@@@@@@@@    ( = )       ^^^^^^^        ||      || | ||
 @@@@@@@      |||          |||          ||        |||
  |||         |||          |||
		</pre>
	</div>

	<div class="demo-controls font-mono">
		<h3>Interactive Controls (Coming Soon):</h3>
		<label>
			<input type="checkbox" bind:checked={enableMorphing} disabled />
			Enable ASCII art morphing
		</label>
		<label>
			<input type="checkbox" bind:checked={desktopEnabled} disabled />
			Desktop Canvas (high quality)
		</label>
		<label>
			<input type="checkbox" bind:checked={mobileEnabled} disabled />
			Mobile CSS fallback
		</label>
		<p class="hint">Controls are for documentation - refresh to reset</p>
	</div>

	<footer class="demo-footer font-mono">
		<p>Built with duct tape and cryptography 🔧⚡</p>
		<nav>
			<a href="/terminal-demo">← Terminal Demo</a>
			<span>|</span>
			<a href="/hexagon-demo">Hexagon Demo →</a>
		</nav>
	</footer>
</div>

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

	h2 {
		font-size: var(--font-size-3);
		color: var(--interactive-hover);
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--border-subtle);
	}

	.description {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin-bottom: var(--space-lg);
	}

	.demo-notes {
		max-width: 1000px;
		margin: 0 auto var(--space-3xl);
		padding: var(--space-lg);
		background: var(--terminal-gray);
		border: 1px dashed var(--border-subtle);
		border-radius: var(--radius-md);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
	}

	.demo-notes h3 {
		color: var(--code-rain);
		font-size: var(--font-size-2);
		margin-bottom: var(--space-sm);
		margin-top: var(--space-lg);
	}

	.demo-notes h3:first-child {
		margin-top: 0;
	}

	.demo-notes ul {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-md);
	}

	.demo-notes li {
		padding-left: var(--space-md);
		margin-bottom: var(--space-xs);
	}

	.demo-notes p {
		margin: var(--space-sm) 0;
		line-height: 1.6;
	}

	.char-showcase {
		display: block;
		padding: var(--space-sm);
		background: var(--terminal-black);
		color: var(--code-rain);
		border-radius: var(--radius-sm);
		margin: var(--space-sm) 0;
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		overflow-x: auto;
	}

	.ascii-showcase {
		padding: var(--space-md);
		background: var(--terminal-black);
		color: var(--amber-warm);
		border-radius: var(--radius-sm);
		margin: var(--space-sm) 0;
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		overflow-x: auto;
		white-space: pre;
	}

	.demo-controls {
		max-width: 800px;
		margin: 0 auto var(--space-3xl);
		padding: var(--space-lg);
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		font-size: var(--font-size-0);
	}

	.demo-controls h3 {
		color: var(--interactive-hover);
		font-size: var(--font-size-2);
		margin-bottom: var(--space-md);
	}

	.demo-controls label {
		display: block;
		margin-bottom: var(--space-sm);
		color: var(--text-secondary);
		cursor: not-allowed;
		opacity: 0.6;
	}

	.demo-controls input[type='checkbox'] {
		margin-right: var(--space-xs);
	}

	.hint {
		margin-top: var(--space-md);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		font-style: italic;
	}

	.demo-footer {
		text-align: center;
		margin-top: var(--space-3xl);
		padding-top: var(--space-xl);
		border-top: 1px dashed var(--border-subtle);
		color: var(--text-tertiary);
	}

	.demo-footer p {
		margin-bottom: var(--space-sm);
	}

	.demo-footer nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-md);
	}

	.demo-footer a {
		color: var(--interactive-hover);
		text-decoration: none;
		transition: color var(--duration-fast);
	}

	.demo-footer a:hover {
		color: var(--code-rain);
		text-decoration: underline;
	}

	.demo-footer span {
		color: var(--text-tertiary);
	}

	/* Mobile responsive */
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

		.ascii-showcase {
			font-size: 0.5rem;
		}
	}
</style>

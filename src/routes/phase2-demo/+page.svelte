<script lang="ts">
	import LandingHero from '$lib/components/LandingHero.svelte';
	import VHSGlitch from '$lib/components/effects/VHSGlitch.svelte';
	import type { HexItem } from '$lib/components/HexagonGrid.svelte';

	// Demo showcase images
	const showcaseImages: HexItem[] = [
		{ src: '/pix/IMG_20230809_7270.jpeg', alt: 'Garden scene 1', href: '/feed' },
		{ src: '/pix/IMG_20230809_7278.jpeg', alt: 'Garden scene 2' },
		{ src: '/pix/IMG_20230809_7292.jpeg', alt: 'Garden scene 3' },
		{ src: '/pix/IMG_20230807_8531.jpeg', alt: 'Garden scene 4' },
		{ src: '/pix/IMG_20230809_7270.jpeg', alt: 'Garden scene 5' },
		{ src: '/pix/IMG_20230809_7278.jpeg', alt: 'Garden scene 6' },
		{ src: '/pix/IMG_20230809_7292.jpeg', alt: 'Garden scene 7' },
		{ src: '/pix/IMG_20230807_8531.jpeg', alt: 'Garden scene 8' }
	];

	let glitchTrigger = false;
</script>

<svelte:head>
	<title>Phase 2: The Spectacle - NostrGardn</title>
</svelte:head>

<!-- Landing Hero: Full Experience -->
<LandingHero {showcaseImages} showCodeRain={true} showHexagons={true} showRelayStatus={true} />

<!-- Additional Demo Sections -->
<div class="demo-sections">
	<!-- VHS Glitch Demo -->
	<section class="demo-section">
		<div class="section-content">
			<h2 class="font-mono section-title">
				<span class="prompt">&gt;</span>
				VHS Glitch Effect
			</h2>

			<p class="description font-mono">
				Hover over the image to trigger the three-phase glitch sequence: scan → RGB split → amber
				settle
			</p>

			<div class="glitch-demo">
				<VHSGlitch trigger={glitchTrigger} intensity="medium">
					<div
						class="demo-image"
						on:mouseenter={() => (glitchTrigger = true)}
						on:mouseleave={() => (glitchTrigger = false)}
						role="button"
						tabindex="0"
					>
						<img src="/pix/IMG_20230809_7270.jpeg" alt="Garden photo with VHS glitch effect" />
					</div>
				</VHSGlitch>
			</div>

			<div class="intensity-demo">
				<h3 class="font-mono subsection-title">Intensity Levels:</h3>
				<div class="intensity-grid">
					<VHSGlitch autoGlitch={true} autoInterval={3000} intensity="subtle">
						<div class="intensity-box subtle">
							<span class="font-mono">Subtle</span>
						</div>
					</VHSGlitch>

					<VHSGlitch autoGlitch={true} autoInterval={3500} intensity="medium">
						<div class="intensity-box medium">
							<span class="font-mono">Medium</span>
						</div>
					</VHSGlitch>

					<VHSGlitch autoGlitch={true} autoInterval={4000} intensity="heavy">
						<div class="intensity-box heavy">
							<span class="font-mono">Heavy</span>
						</div>
					</VHSGlitch>
				</div>
			</div>
		</div>
	</section>

	<!-- Phase 2 Completion Summary -->
	<section class="demo-section completion">
		<div class="section-content">
			<h2 class="font-mono section-title success">
				<span class="prompt">✓</span>
				Phase 2: The Spectacle — COMPLETE
			</h2>

			<div class="checklist font-mono">
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">Code Rain Animation (Canvas + CSS fallback)</span>
				</div>
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">VHS Glitch Effect (Reusable component)</span>
				</div>
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">Landing Page Hero (Massive type + code rain)</span>
				</div>
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">Relay Connection Status Widget (Real-time)</span>
				</div>
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">Hexagon Grid Integration</span>
				</div>
				<div class="checklist-item">
					<span class="check">✅</span>
					<span class="label">Terminal Navigation</span>
				</div>
			</div>

			<div class="terminal-output font-mono">
				<div class="output-line">
					<span class="prompt">$</span>
					<span class="command">git status</span>
				</div>
				<div class="output-line status">Phase 2: The Spectacle — All tasks complete</div>
				<div class="output-line status">Ready for Phase 3: Polish & Dad Jokes</div>
				<div class="output-line hint">
					<span class="prompt">→</span>
					Run <code>git commit -m "feat: complete Phase 2 spectacle"</code>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation Footer -->
	<footer class="demo-footer font-mono">
		<p>Built with duct tape and cryptography 🔧⚡</p>
		<nav>
			<a href="/terminal-demo">← Terminal Demo</a>
			<span>|</span>
			<a href="/code-rain-demo">Code Rain Demo</a>
			<span>|</span>
			<a href="/hexagon-demo">Hexagon Demo →</a>
		</nav>
	</footer>
</div>

<style>
	.demo-sections {
		background: var(--bg-terminal);
		color: var(--text-primary);
	}

	.demo-section {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-3xl) var(--space-xl);
	}

	.demo-section.completion {
		background: var(--terminal-gray-dark);
		border-top: 2px solid var(--code-rain);
		border-bottom: 2px solid var(--code-rain);
	}

	.section-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-4);
		color: var(--interactive-hover);
		margin-bottom: var(--space-md);
	}

	.section-title.success {
		color: var(--code-rain);
	}

	.section-title .prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	.description {
		font-size: var(--font-size-1);
		color: var(--text-secondary);
		line-height: 1.6;
	}

	/* Glitch Demo */
	.glitch-demo {
		display: flex;
		justify-content: center;
	}

	.demo-image {
		max-width: 600px;
		cursor: pointer;
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.demo-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Intensity Demo */
	.intensity-demo {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.subsection-title {
		font-size: var(--font-size-2);
		color: var(--amber-warm);
	}

	.intensity-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-lg);
	}

	.intensity-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150px;
		border: 2px solid var(--border-accent);
		border-radius: var(--radius-md);
		background: var(--terminal-gray-dark);
		font-size: var(--font-size-2);
		color: var(--text-primary);
	}

	.intensity-box.subtle {
		background: linear-gradient(135deg, var(--terminal-gray-dark) 0%, var(--moss-green) 100%);
	}

	.intensity-box.medium {
		background: linear-gradient(135deg, var(--terminal-gray-dark) 0%, var(--amber-warm) 100%);
	}

	.intensity-box.heavy {
		background: linear-gradient(135deg, var(--terminal-gray-dark) 0%, var(--code-rain) 100%);
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

	.check {
		color: var(--code-rain);
		font-size: var(--font-size-2);
	}

	.label {
		color: var(--text-primary);
	}

	/* Terminal Output */
	.terminal-output {
		padding: var(--space-lg);
		background: var(--terminal-black);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
		font-size: var(--font-size-0);
	}

	.output-line {
		margin-bottom: var(--space-sm);
		color: var(--text-secondary);
	}

	.output-line .prompt {
		color: var(--code-rain);
		margin-right: var(--space-xs);
	}

	.output-line .command {
		color: var(--text-primary);
	}

	.output-line.status {
		color: var(--code-rain);
		padding-left: var(--space-md);
	}

	.output-line.hint {
		color: var(--amber-warm);
		margin-top: var(--space-md);
	}

	.output-line code {
		color: var(--interactive-hover);
		background: var(--terminal-gray-dark);
		padding: var(--space-3xs) var(--space-xs);
		border-radius: var(--radius-sm);
	}

	/* Footer */
	.demo-footer {
		text-align: center;
		padding: var(--space-3xl) var(--space-xl);
		border-top: 1px dashed var(--border-subtle);
		color: var(--text-tertiary);
	}

	.demo-footer p {
		margin-bottom: var(--space-md);
	}

	.demo-footer nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-md);
		flex-wrap: wrap;
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

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.demo-section {
			padding: var(--space-xl) var(--space-md);
		}

		.section-title {
			font-size: var(--font-size-3);
		}

		.intensity-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

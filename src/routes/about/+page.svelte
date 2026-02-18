<script lang="ts">
	import * as config from '$lib/config';
	import { scrollReveal } from '$lib/actions/scrollReveal';
	import FilterPipeline from '$lib/components/FilterPipeline.svelte';
	import StatusBadge from '$lib/components/terminal/StatusBadge.svelte';
</script>

<svelte:head>
	<title>About - {config.site.title}</title>
	<meta
		name="description"
		content="About nostrgardn — a curated nature photography garden on the Nostr protocol. Learn how our filter pipeline works and how to contribute."
	/>
</svelte:head>

<!-- ============================================================
     SECTION 1: THE GARDEN HALF
     ============================================================ -->
<section class="garden-half">
	<!-- 1a. Hero -->
	<header class="garden-hero">
		<h1 class="garden-title">
			<a href="/">{config.site.title}</a>
		</h1>
		<p class="garden-subtitle">about the garden</p>
		<p class="garden-location">Tended from California, USA</p>
	</header>

	<!-- 1b. Photo Strip -->
	<div class="photo-strip" use:scrollReveal>
		<div class="photo-item wabi-vary">
			<img
				src="/pix/IMG_20230809_7271.jpeg"
				alt="Nature photograph from the nostrgardn collection"
				loading="lazy"
			/>
		</div>
		<div class="photo-item wabi-vary">
			<img
				src="/pix/IMG_20230807_8530.jpeg"
				alt="Nature photograph from the nostrgardn collection"
				loading="lazy"
			/>
		</div>
		<div class="photo-item wabi-vary">
			<img
				src="/pix/IMG_20230809_7285.jpeg"
				alt="Nature photograph from the nostrgardn collection"
				loading="lazy"
			/>
		</div>
		<div class="photo-item wabi-vary">
			<img
				src="/pix/IMG_20230810_7301.jpeg"
				alt="Nature photograph from the nostrgardn collection"
				loading="lazy"
			/>
		</div>
	</div>

	<!-- 1c. Mission -->
	<div class="mission" use:scrollReveal={{ delay: 100 }}>
		<p>
			We tend this virtual space to celebrate nature's thriving abundance through decentralized
			photo sharing. A curated garden on Nostr &mdash; where every image arrives through the
			protocol, not a platform.
		</p>
		<p>
			Our aim is to be responsible stewards of the garden; protecting, preserving, building, and
			celebrating our ecosystems and habitats through freedom technologies.
		</p>
		<p class="mission-coda">No algorithms. No corporations. Just relays, keys, and sunlight.</p>
	</div>

	<!-- 1d. Gardener Roles (Abstract) -->
	<div class="garden-roles" use:scrollReveal={{ delay: 150 }}>
		<div class="role-card">
			<h3 class="role-title">Master Gardener</h3>
			<p class="role-desc">Full access. Every post blooms &mdash; no restrictions, no filters.</p>
		</div>
		<div class="role-card">
			<h3 class="role-title">Gardener</h3>
			<p class="role-desc">Trusted contributors. Tag with <code>#gardn</code> to plant.</p>
		</div>
		<div class="role-card">
			<h3 class="role-title">Pleb</h3>
			<p class="role-desc">
				Community contributors. Tag + image = gallery display only.
			</p>
		</div>
	</div>
</section>

<!-- ============================================================
     TRANSITION
     ============================================================ -->
<div class="transition-zone" aria-hidden="true">
	<div class="transition-gradient"></div>
	<div class="transition-line"></div>
</div>

<!-- ============================================================
     SECTION 2: THE TERMINAL HALF
     ============================================================ -->
<section class="terminal-half">
	<!-- 2a. Section Header -->
	<header class="terminal-header" use:scrollReveal>
		<h2 class="terminal-prompt">
			<span class="prompt-symbol">$</span> ./how_it_works.sh<span class="cursor">_</span>
		</h2>
		<p class="terminal-subtitle">Every post passes through the filter pipeline</p>
	</header>

	<!-- 2b. Filter Pipeline -->
	<div class="pipeline-section" use:scrollReveal={{ delay: 100 }}>
		<FilterPipeline />
	</div>

	<!-- 2c. Roles (Terminal Voice) -->
	<div class="terminal-roles" use:scrollReveal={{ delay: 150 }}>
		<div class="ls-output">
			<div class="ls-row">
				<span class="ls-perms">drwxrwxrwx</span>
				<span class="ls-user master">master-gardener</span>
				<span class="ls-desc">All posts bloom. No restrictions.</span>
			</div>
			<div class="ls-row">
				<span class="ls-perms">drwxr-xr--</span>
				<span class="ls-user gardener">gardener</span>
				<span class="ls-desc">Trusted. Tag with #gardn to plant.</span>
			</div>
			<div class="ls-row">
				<span class="ls-perms">dr--r-----</span>
				<span class="ls-user pleb">pleb</span>
				<span class="ls-desc">Tag + image = gallery display only.</span>
			</div>
		</div>
	</div>

	<!-- 2d. Built With -->
	<div class="built-with" use:scrollReveal={{ delay: 200 }}>
		<p class="built-label">built with</p>
		<div class="badge-row">
			<a href="https://nostr.com" target="_blank" rel="noopener noreferrer" class="badge-link">
				<StatusBadge status="connected" icon="&#9889;">nostr</StatusBadge>
			</a>
			<a
				href="https://github.com/nostr-dev-kit/ndk"
				target="_blank"
				rel="noopener noreferrer"
				class="badge-link"
			>
				<StatusBadge status="connected" icon="&#128268;">ndk 2.x</StatusBadge>
			</a>
			<a
				href="https://kit.svelte.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="badge-link"
			>
				<StatusBadge status="connected" icon="&#9881;">sveltekit</StatusBadge>
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer" class="badge-link">
				<StatusBadge status="connected" icon="&#127793;">svelte 4</StatusBadge>
			</a>
		</div>
	</div>
</section>

<style>
	/* =============================================================
	   SECTION 1: GARDEN HALF
	   ============================================================= */
	.garden-half {
		padding-bottom: var(--space-2xl);
	}

	/* --- Hero --- */
	.garden-hero {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.garden-title {
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 12vw, 6rem);
		font-weight: 300;
		color: var(--brand);
		margin-bottom: 0;
		line-height: 1.1;
		transform: rotate(-0.3deg) translate(1px, 0px);
	}

	.garden-title a {
		color: inherit;
		text-decoration: none;
		min-height: auto;
		min-width: auto;
	}

	.garden-title a:hover {
		color: white;
		text-shadow: 0 0 10px rgba(58, 161, 130, 0.7);
		text-decoration: none;
	}

	.garden-subtitle {
		font-family: var(--font-display);
		font-size: var(--font-size-3);
		font-style: italic;
		color: var(--text-secondary);
		margin-top: var(--space-xs);
		margin-bottom: var(--space-2xs);
		text-decoration: underline;
		text-decoration-style: wavy;
		text-decoration-color: var(--border-accent);
		text-underline-offset: 6px;
		text-decoration-thickness: 1px;
	}

	.garden-location {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0;
	}

	/* --- Photo Strip --- */
	.photo-strip {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-sm);
		margin-bottom: var(--space-2xl);
	}

	@media (min-width: 640px) {
		.photo-strip {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.photo-item {
		overflow: hidden;
		border-radius: var(--radius-md);
		aspect-ratio: 4 / 3;
	}

	.photo-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0;
		transform: rotate(0deg);
	}

	/* --- Mission --- */
	.mission {
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--space-2xl);
	}

	.mission p {
		font-family: var(--font-display);
		font-size: var(--font-size-2);
		line-height: 1.7;
		color: var(--text-primary);
	}

	.mission-coda {
		font-style: italic;
		color: var(--text-secondary) !important;
		font-size: var(--font-size-3) !important;
		text-align: center;
		margin-top: var(--space-lg);
	}

	/* --- Gardener Roles --- */
	.garden-roles {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-md);
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 640px) {
		.garden-roles {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.role-card {
		padding: var(--space-md);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		background: var(--terminal-gray-dark);
		text-align: center;
	}

	.role-title {
		font-family: var(--font-display);
		font-size: var(--font-size-3);
		color: var(--moss-green);
		margin-bottom: var(--space-xs);
	}

	.role-desc {
		font-family: var(--font-display);
		font-size: var(--font-size-1);
		color: var(--text-secondary);
		margin-bottom: 0;
		line-height: 1.5;
	}

	.role-desc code {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--code-rain);
		background: rgba(0, 255, 65, 0.08);
		padding: 2px 6px;
		border-radius: 3px;
	}

	/* =============================================================
	   TRANSITION
	   ============================================================= */
	.transition-zone {
		position: relative;
		margin-left: calc(-1 * var(--space-md));
		margin-right: calc(-1 * var(--space-md));
		/* Extend to layout edges */
		width: calc(100% + var(--space-md) * 2);
	}

	.transition-gradient {
		height: 80px;
		background: linear-gradient(to bottom, transparent, var(--terminal-black));
	}

	.transition-line {
		border-top: 1px dashed var(--border-accent);
	}

	/* =============================================================
	   SECTION 2: TERMINAL HALF
	   ============================================================= */
	.terminal-half {
		background: var(--terminal-black);
		margin-left: calc(-1 * var(--space-md));
		margin-right: calc(-1 * var(--space-md));
		padding-left: var(--space-md);
		padding-right: var(--space-md);
		padding-top: var(--space-2xl);
		padding-bottom: var(--space-2xl);
		/* Extend to layout edges */
		width: calc(100% + var(--space-md) * 2);
	}

	/* --- Terminal Header --- */
	.terminal-header {
		text-align: center;
		margin-bottom: var(--space-xl);
	}

	.terminal-prompt {
		font-family: var(--font-mono);
		font-size: clamp(var(--font-size-2), 4vw, var(--font-size-4));
		font-weight: 400;
		color: var(--code-rain);
		margin-bottom: var(--space-xs);
		letter-spacing: -0.02em;
	}

	.prompt-symbol {
		color: var(--text-tertiary);
		margin-right: var(--space-2xs);
	}

	.cursor {
		animation: blink 1s step-end infinite;
		color: var(--code-rain);
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor {
			animation: none;
			opacity: 1;
		}
	}

	.terminal-subtitle {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin-bottom: 0;
	}

	/* --- Pipeline Section --- */
	.pipeline-section {
		margin-bottom: var(--space-xl);
	}

	/* --- Terminal Roles (ls -la) --- */
	.terminal-roles {
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--space-xl);
	}

	.ls-output {
		background: var(--terminal-gray-dark);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		overflow-x: auto;
	}

	.ls-row {
		display: flex;
		gap: var(--space-sm);
		align-items: baseline;
		padding: var(--space-3xs) 0;
		white-space: nowrap;
	}

	.ls-row + .ls-row {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.ls-perms {
		color: var(--text-tertiary);
		flex-shrink: 0;
	}

	.ls-user {
		flex-shrink: 0;
		min-width: 110px;
	}

	.ls-user.master {
		color: var(--code-rain);
		font-weight: 600;
	}

	.ls-user.gardener {
		color: var(--moss-green);
	}

	.ls-user.pleb {
		color: var(--text-secondary);
	}

	.ls-desc {
		color: var(--text-secondary);
	}

	/* Mobile: stack ls rows */
	@media (max-width: 560px) {
		.ls-row {
			flex-wrap: wrap;
			gap: var(--space-3xs) var(--space-xs);
		}

		.ls-user {
			min-width: auto;
		}

		.ls-desc {
			flex-basis: 100%;
			padding-left: 0;
			white-space: normal;
		}
	}

	/* --- Built With --- */
	.built-with {
		text-align: center;
	}

	.built-label {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: var(--space-sm);
	}

	.badge-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-xs);
	}

	.badge-link {
		text-decoration: none;
		min-height: auto;
		min-width: auto;
	}

	.badge-link:hover {
		text-decoration: none;
	}
</style>

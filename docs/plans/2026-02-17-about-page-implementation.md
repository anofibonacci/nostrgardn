# About Page Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the About page as a "Split Personality" experience — garden storytelling on top, terminal tech explainer on bottom — using the existing Handbuilt Greenhouse design system.

**Architecture:** Three new components (ScrollReveal action, FilterPipeline diagram, the page itself). The page is pure Svelte + CSS — no new dependencies, no data fetching. Intersection Observer handles scroll animations. The filter pipeline is a CSS-only vertical flowchart with hover interactivity.

**Tech Stack:** SvelteKit 1.x, Svelte 4, existing Handbuilt Greenhouse design tokens (`app.css`), StatusBadge component.

**Design Doc:** `docs/plans/2026-02-17-about-page-redesign.md`

---

## Task 1: Create ScrollReveal Svelte Action

A reusable Svelte action that fades elements in when they enter the viewport using Intersection Observer.

**Files:**
- Create: `src/lib/actions/scrollReveal.ts`

**Step 1: Create the action file**

```typescript
// src/lib/actions/scrollReveal.ts

/**
 * ScrollReveal - Svelte action for scroll-triggered fade-in animations.
 * Uses Intersection Observer for performance.
 *
 * Usage:
 *   <div use:scrollReveal>Content</div>
 *   <div use:scrollReveal={{ threshold: 0.3, delay: 200 }}>Delayed</div>
 */

interface ScrollRevealOptions {
	/** How much of the element must be visible (0-1). Default: 0.15 */
	threshold?: number;
	/** Delay before animation starts (ms). Default: 0 */
	delay?: number;
	/** Root margin for early triggering. Default: '0px 0px -50px 0px' */
	rootMargin?: string;
}

export function scrollReveal(node: HTMLElement, options: ScrollRevealOptions = {}) {
	const { threshold = 0.15, delay = 0, rootMargin = '0px 0px -50px 0px' } = options;

	// Set initial hidden state via inline styles
	node.style.opacity = '0';
	node.style.transform = 'translateY(20px)';
	node.style.transition = `opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)`;

	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
```

**Step 2: Verify it compiles**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npx svelte-check --threshold error 2>&1 | tail -5`
Expected: No errors related to `scrollReveal.ts`

**Step 3: Commit**

```bash
git add src/lib/actions/scrollReveal.ts
git commit -m "feat: add scrollReveal Svelte action for scroll-triggered animations"
```

---

## Task 2: Create FilterPipeline Component

The CSS-only vertical flowchart showing the 4-step post filtering decision tree with hover interactivity.

**Files:**
- Create: `src/lib/components/FilterPipeline.svelte`

**Step 1: Create the component**

```svelte
<!-- src/lib/components/FilterPipeline.svelte -->
<script lang="ts">
	/**
	 * FilterPipeline - Visual CSS flowchart of the post filtering decision tree.
	 * Part of "The Handbuilt Greenhouse" design system.
	 *
	 * Shows 4 decision steps with yes/no branches.
	 * Hover on a step highlights it and its connected paths.
	 */

	let hoveredStep: number | null = null;

	const steps = [
		{
			question: 'From our relay?',
			icon: '📡',
			yesLabel: 'Continue',
			noLabel: 'Ignored',
			noDetail: 'Wrong relay'
		},
		{
			question: 'Gardener pubkey?',
			icon: '🔑',
			yesLabel: 'Full post displayed',
			yesIsTerminal: true,
			noLabel: 'Continue',
			noIsTerminal: false
		},
		{
			question: 'Required tags?',
			icon: '🏷️',
			yesLabel: 'Continue',
			noLabel: 'Ignored',
			noDetail: 'Missing tags'
		},
		{
			question: 'Has images?',
			icon: '🖼️',
			yesLabel: 'Images displayed 🌱',
			yesIsTerminal: true,
			noLabel: 'Rejected',
			noDetail: 'No images found'
		}
	];
</script>

<div class="pipeline" role="img" aria-label="Post filtering decision flowchart">
	<!-- Entry point -->
	<div class="entry-node">
		<span class="entry-icon">📡</span>
		<span class="entry-text">Post arrives on relay</span>
	</div>
	<div class="connector-down"></div>

	{#each steps as step, i}
		<div
			class="step"
			class:hovered={hoveredStep === i}
			on:mouseenter={() => (hoveredStep = i)}
			on:mouseleave={() => (hoveredStep = null)}
			role="group"
			aria-label="Step {i + 1}: {step.question}"
		>
			<!-- Decision box -->
			<div class="decision-box">
				<span class="step-number">{i + 1}</span>
				<span class="step-question">{step.question}</span>
			</div>

			<!-- Branches -->
			<div class="branches">
				<!-- Yes branch (goes down or terminal) -->
				<div class="branch yes-branch" class:terminal={step.yesIsTerminal}>
					<span class="branch-label yes">Yes</span>
					<span class="branch-arrow">→</span>
					<span class="branch-result" class:success={step.yesIsTerminal}>{step.yesLabel}</span>
				</div>

				<!-- No branch -->
				<div class="branch no-branch" class:terminal={step.noLabel === 'Ignored' || step.noLabel === 'Rejected'}>
					<span class="branch-label no">No</span>
					<span class="branch-arrow">→</span>
					<span class="branch-result rejected">
						{step.noLabel}
						{#if step.noDetail}
							<span class="detail">({step.noDetail})</span>
						{/if}
					</span>
				</div>
			</div>
		</div>

		<!-- Connector between steps (except after last) -->
		{#if i < steps.length - 1}
			<!-- For step 2 (gardener pubkey), the "no" continues down -->
			<div class="connector-down" class:active={hoveredStep === i || hoveredStep === i + 1}></div>
		{/if}
	{/each}
</div>

<style>
	.pipeline {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		max-width: 500px;
		margin: 0 auto;
		padding: var(--space-md) 0;
	}

	/* Entry node */
	.entry-node {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-sm) var(--space-md);
		background: var(--terminal-gray-dark);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-primary);
	}

	.entry-icon {
		font-size: var(--font-size-2);
	}

	/* Vertical connectors */
	.connector-down {
		width: 2px;
		height: 24px;
		background: var(--border-subtle);
		transition: background var(--duration-fast) var(--ease-out);
	}

	.connector-down.active {
		background: var(--code-rain);
		box-shadow: 0 0 6px rgba(0, 255, 65, 0.3);
	}

	/* Step container */
	.step {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all var(--duration-fast) var(--ease-out);
	}

	/* Decision box */
	.decision-box {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-lg);
		background: var(--terminal-gray-dark);
		border: 1px dashed var(--border-subtle);
		border-radius: var(--radius-md);
		font-family: var(--font-mono);
		font-size: var(--font-size-1);
		color: var(--text-secondary);
		transition: all var(--duration-fast) var(--ease-out);
		cursor: default;
		min-width: 220px;
		justify-content: center;
	}

	.step.hovered .decision-box {
		border-color: var(--code-rain);
		color: var(--text-primary);
		box-shadow: 0 0 12px rgba(0, 255, 65, 0.3);
		background: var(--terminal-gray);
	}

	.step-number {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--terminal-gray);
		color: var(--text-tertiary);
		font-size: var(--font-size-00);
		font-weight: 600;
		flex-shrink: 0;
	}

	.step.hovered .step-number {
		background: var(--code-rain);
		color: var(--terminal-black);
	}

	/* Branches */
	.branches {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		margin-top: var(--space-xs);
		margin-bottom: var(--space-xs);
		width: 100%;
		padding-left: var(--space-lg);
	}

	.branch {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		opacity: 0.7;
		transition: opacity var(--duration-fast) var(--ease-out);
	}

	.step.hovered .branch {
		opacity: 1;
	}

	.branch-label {
		font-weight: 600;
		padding: 2px 6px;
		border-radius: 3px;
		font-size: var(--font-size-00);
	}

	.branch-label.yes {
		color: var(--code-rain);
		background: rgba(0, 255, 65, 0.1);
	}

	.branch-label.no {
		color: var(--clay-terracotta);
		background: rgba(160, 82, 45, 0.1);
	}

	.branch-arrow {
		color: var(--text-tertiary);
	}

	.branch-result {
		color: var(--text-secondary);
	}

	.branch-result.success {
		color: var(--code-rain);
		font-weight: 500;
	}

	.branch-result.rejected {
		color: var(--text-tertiary);
		font-style: italic;
	}

	.detail {
		font-size: var(--font-size-00);
		color: var(--dust);
	}

	/* Responsive */
	@media (max-width: 480px) {
		.decision-box {
			padding: var(--space-xs) var(--space-sm);
			font-size: var(--font-size-0);
			min-width: unset;
		}

		.branches {
			padding-left: var(--space-sm);
		}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.decision-box,
		.connector-down,
		.branch,
		.step-number {
			transition: none;
		}
	}
</style>
```

**Step 2: Verify it compiles**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npx svelte-check --threshold error 2>&1 | tail -5`
Expected: No errors related to `FilterPipeline.svelte`

**Step 3: Commit**

```bash
git add src/lib/components/FilterPipeline.svelte
git commit -m "feat: add FilterPipeline CSS flowchart component"
```

---

## Task 3: Rewrite the About Page

Replace the existing raw HTML About page with the full "Split Personality" design.

**Files:**
- Modify: `src/routes/about/+page.svelte` (complete rewrite)

**Reference design:** `docs/plans/2026-02-17-about-page-redesign.md`

**Step 1: Rewrite the page**

Replace the entire contents of `src/routes/about/+page.svelte` with:

```svelte
<script lang="ts">
	import * as config from '$lib/config';
	import FilterPipeline from '$lib/components/FilterPipeline.svelte';
	import StatusBadge from '$lib/components/terminal/StatusBadge.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	// Photo showcase — different from homepage (avoids 7270, 7278, 7292, 8531)
	const gardenPhotos = [
		'/pix/IMG_20230809_7271.jpeg',
		'/pix/IMG_20230807_8530.jpeg',
		'/pix/IMG_20230809_7285.jpeg',
		'/pix/IMG_20230810_7301.jpeg'
	];
</script>

<svelte:head>
	<title>About - {config.site.title}</title>
	<meta name="description" content="About nostrgardn — a curated garden of nature photography on the Nostr protocol." />
</svelte:head>

<!-- ============================== -->
<!-- SECTION 1: THE GARDEN HALF     -->
<!-- ============================== -->
<section class="garden-half">
	<!-- Hero -->
	<header class="garden-hero">
		<h1 class="garden-title">nostrgardn</h1>
		<p class="garden-subtitle">about the garden</p>
		<p class="garden-location">Tended from California, USA</p>
	</header>

	<!-- Photo Strip -->
	<div class="photo-strip" use:scrollReveal>
		{#each gardenPhotos as src, i}
			<div class="photo-item" style="--wobble: {(i % 2 === 0 ? 1 : -1) * 0.6}deg;">
				<img {src} alt="Garden scene" loading="lazy" />
			</div>
		{/each}
	</div>

	<!-- Mission -->
	<div class="mission" use:scrollReveal={{ delay: 100 }}>
		<p>
			We tend this virtual space to celebrate nature's thriving abundance
			through decentralized photo sharing. A curated garden on Nostr &mdash;
			where every image arrives through the protocol, not a platform.
		</p>
		<p class="mission-coda">
			No algorithms. No corporations. Just relays, keys, and sunlight.
		</p>
	</div>

	<!-- Gardener Roles (Abstract) -->
	<div class="roles-garden" use:scrollReveal={{ delay: 150 }}>
		<h2 class="roles-heading">Who tends the garden</h2>
		<div class="role-cards">
			<div class="role-card">
				<h3>Master Gardener</h3>
				<p>Full access. Every post blooms.</p>
			</div>
			<div class="role-card">
				<h3>Gardener</h3>
				<p>Trusted contributors. Tag with <code>#gardn</code> to plant.</p>
			</div>
			<div class="role-card">
				<h3>Pleb</h3>
				<p>Community contributors. Tag + image = gallery display.</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- TRANSITION                     -->
<!-- ============================== -->
<div class="transition-zone">
	<div class="transition-line"></div>
</div>

<!-- ============================== -->
<!-- SECTION 2: THE TERMINAL HALF   -->
<!-- ============================== -->
<section class="terminal-half">
	<!-- Terminal Header -->
	<header class="terminal-header" use:scrollReveal>
		<div class="terminal-prompt-line">
			<span class="prompt-char">$</span>
			<span class="prompt-text">./how_it_works.sh</span>
			<span class="cursor">█</span>
		</div>
		<p class="terminal-subtitle">Every post passes through the filter pipeline</p>
	</header>

	<!-- Filter Pipeline Diagram -->
	<div class="pipeline-section" use:scrollReveal={{ delay: 100 }}>
		<FilterPipeline />
	</div>

	<!-- Roles (Terminal Voice) -->
	<div class="roles-terminal" use:scrollReveal={{ delay: 150 }}>
		<h3 class="terminal-section-title">access levels</h3>
		<div class="ls-output">
			<div class="ls-row">
				<span class="perms">drwxrwxrwx</span>
				<span class="role-name master">master-gardener</span>
				<span class="role-desc">All posts bloom. No restrictions.</span>
			</div>
			<div class="ls-row">
				<span class="perms">drwxr-xr--</span>
				<span class="role-name gardener">gardener</span>
				<span class="role-desc">Trusted. Tag with #gardn to plant.</span>
			</div>
			<div class="ls-row">
				<span class="perms">dr--r-----</span>
				<span class="role-name pleb">pleb</span>
				<span class="role-desc">Tag + image = gallery display only.</span>
			</div>
		</div>
	</div>

	<!-- Built With -->
	<div class="built-with" use:scrollReveal={{ delay: 200 }}>
		<h3 class="terminal-section-title">built with</h3>
		<div class="badge-row">
			<a href="https://nostr.com" target="_blank" rel="noopener">
				<StatusBadge status="connected" icon="⚡">nostr</StatusBadge>
			</a>
			<a href="https://github.com/nostr-dev-kit/ndk" target="_blank" rel="noopener">
				<StatusBadge status="connected" icon="🔧">ndk 2.x</StatusBadge>
			</a>
			<a href="https://kit.svelte.dev" target="_blank" rel="noopener">
				<StatusBadge status="connected" icon="🧱">sveltekit</StatusBadge>
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noopener">
				<StatusBadge status="connected" icon="🔥">svelte 4</StatusBadge>
			</a>
		</div>
	</div>
</section>

<style>
	/* ================================================
	   SECTION 1: THE GARDEN HALF
	   Organic, warm, serif-driven
	   ================================================ */
	.garden-half {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-xl) var(--space-md);
		text-align: center;
	}

	/* Garden Hero */
	.garden-hero {
		margin-bottom: var(--space-xl);
	}

	.garden-title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 12vw, 7rem);
		font-weight: 300;
		color: var(--brand);
		margin: 0;
		line-height: 0.95;
		/* Wabi-sabi wobble matching homepage */
		transform: rotate(-0.3deg) translate(1px, 0px);
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
		text-decoration-color: var(--text-tertiary);
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
	}

	.garden-location {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin: 0;
	}

	/* Photo Strip */
	.photo-strip {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-sm);
		max-width: 700px;
		width: 100%;
		margin-bottom: var(--space-xl);
	}

	@media (min-width: 640px) {
		.photo-strip {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.photo-item {
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: var(--radius-md);
		transform: rotate(var(--wobble));
		border: 1px solid rgba(0, 255, 65, 0.08);
		transition: border-color var(--duration-fast) var(--ease-out),
		            box-shadow var(--duration-fast) var(--ease-out);
	}

	.photo-item:hover {
		border-color: var(--brand);
		box-shadow: 0 0 12px rgba(0, 255, 65, 0.15);
	}

	.photo-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-normal) var(--ease-out);
		/* Reset any global img rotation */
		transform: rotate(0deg);
	}

	.photo-item:hover img {
		transform: scale(1.06) rotate(0deg);
	}

	/* Mission */
	.mission {
		max-width: 560px;
		margin-bottom: var(--space-xl);
	}

	.mission p {
		font-family: var(--font-display);
		font-size: var(--font-size-2);
		color: var(--text-primary);
		line-height: 1.7;
		margin-bottom: var(--space-md);
	}

	.mission-coda {
		font-style: italic;
		color: var(--text-secondary) !important;
		font-size: var(--font-size-1) !important;
	}

	/* Garden Roles */
	.roles-garden {
		max-width: 700px;
		width: 100%;
		margin-bottom: var(--space-lg);
	}

	.roles-heading {
		font-family: var(--font-display);
		font-size: var(--font-size-4);
		font-weight: 400;
		color: var(--text-primary);
		margin-bottom: var(--space-lg);
	}

	.role-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-md);
	}

	@media (min-width: 640px) {
		.role-cards {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.role-card {
		padding: var(--space-md);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		text-align: left;
		transition: border-color var(--duration-fast) var(--ease-out);
	}

	.role-card:hover {
		border-color: var(--text-tertiary);
	}

	.role-card h3 {
		font-family: var(--font-display);
		font-size: var(--font-size-2);
		font-weight: 500;
		color: var(--text-primary);
		margin: 0 0 var(--space-2xs) 0;
	}

	.role-card p {
		font-family: var(--font-display);
		font-size: var(--font-size-0);
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	.role-card code {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--code-rain);
		background: rgba(0, 255, 65, 0.08);
		padding: 1px 4px;
		border-radius: 3px;
	}

	/* ================================================
	   TRANSITION ZONE
	   ================================================ */
	.transition-zone {
		position: relative;
		height: 80px;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			var(--terminal-black) 100%
		);
	}

	.transition-line {
		position: absolute;
		bottom: 0;
		left: 10%;
		right: 10%;
		height: 1px;
		border-bottom: 1px dashed var(--border-accent);
		opacity: 0.4;
	}

	/* ================================================
	   SECTION 2: THE TERMINAL HALF
	   Dark, monospace, phosphor-green
	   ================================================ */
	.terminal-half {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-xl) var(--space-md);
		background: var(--terminal-black);
		text-align: center;
	}

	/* Terminal Header */
	.terminal-header {
		margin-bottom: var(--space-xl);
	}

	.terminal-prompt-line {
		font-family: var(--font-mono);
		font-size: var(--font-size-2);
		color: var(--text-secondary);
		margin-bottom: var(--space-sm);
	}

	.prompt-char {
		color: var(--code-rain);
		font-weight: bold;
		margin-right: 0.25rem;
	}

	.prompt-text {
		color: var(--text-primary);
	}

	.cursor {
		color: var(--code-rain);
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.terminal-subtitle {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		color: var(--text-tertiary);
		font-style: italic;
		margin: 0;
	}

	/* Pipeline Section */
	.pipeline-section {
		width: 100%;
		max-width: 600px;
		margin-bottom: var(--space-xl);
	}

	/* Terminal Section Titles */
	.terminal-section-title {
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		font-weight: 600;
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-md);
	}

	/* Roles Terminal (ls -la) */
	.roles-terminal {
		width: 100%;
		max-width: 650px;
		margin-bottom: var(--space-xl);
	}

	.ls-output {
		background: var(--terminal-gray-dark);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		text-align: left;
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		overflow-x: auto;
	}

	.ls-row {
		display: flex;
		gap: var(--space-sm);
		padding: var(--space-2xs) 0;
		color: var(--text-secondary);
		white-space: nowrap;
	}

	.ls-row + .ls-row {
		border-top: 1px solid var(--terminal-gray);
	}

	.perms {
		color: var(--text-tertiary);
		flex-shrink: 0;
	}

	.role-name {
		font-weight: 600;
		flex-shrink: 0;
		min-width: 120px;
	}

	.role-name.master {
		color: var(--code-rain);
	}

	.role-name.gardener {
		color: var(--moss-green);
	}

	.role-name.pleb {
		color: var(--steel-gray);
	}

	.role-desc {
		color: var(--text-tertiary);
	}

	/* Built With */
	.built-with {
		margin-bottom: var(--space-lg);
	}

	.badge-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		justify-content: center;
	}

	.badge-row a {
		text-decoration: none;
		min-height: auto;
		min-width: auto;
	}

	.badge-row a:hover {
		text-decoration: none;
	}

	/* ================================================
	   RESPONSIVE ADJUSTMENTS
	   ================================================ */
	@media (max-width: 480px) {
		.ls-row {
			flex-direction: column;
			gap: var(--space-3xs);
		}

		.role-name {
			min-width: unset;
		}

		.perms {
			font-size: var(--font-size-00);
		}
	}

	/* ================================================
	   REDUCED MOTION
	   ================================================ */
	@media (prefers-reduced-motion: reduce) {
		.cursor {
			animation: none;
			opacity: 1;
		}

		.photo-item img,
		.decision-box,
		.role-card {
			transition: none;
		}
	}
</style>
```

**Step 2: Verify it compiles**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npx svelte-check --threshold error 2>&1 | tail -10`
Expected: No errors. May see warnings about unused CSS selectors — acceptable.

**Step 3: Visual check**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npm run dev -- --host 2>&1 &`
Then open `http://192.168.64.201:5173/about` on a browser to verify:
- [ ] Garden hero renders with Cormorant title + wavy subtitle
- [ ] Photo strip shows 4 images in a grid
- [ ] Mission text is readable and well-spaced
- [ ] Role cards display in a 3-column grid (desktop) or stacked (mobile)
- [ ] Transition gradient fades to dark
- [ ] Terminal half has dark background
- [ ] `$ ./how_it_works.sh` prompt renders with blinking cursor
- [ ] Filter pipeline diagram shows 4 steps with hover highlighting
- [ ] `ls -la` roles display correctly
- [ ] Built-with badges row renders
- [ ] Scroll animations fade in as you scroll

**Step 4: Commit**

```bash
git add src/routes/about/+page.svelte
git commit -m "feat: redesign About page with Split Personality layout

Garden storytelling top half with photos and mission text,
terminal-styled technical explainer bottom half with filter
pipeline diagram and ls -la role display."
```

---

## Task 4: Build and Verify

Full build to ensure production readiness.

**Step 1: Run svelte-check**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npx svelte-check --threshold error`
Expected: 0 errors

**Step 2: Run production build**

Run: `cd /home/bonaccike/web-studio/projects/nostrgardn && npm run build`
Expected: Build succeeds (note: ~5 min on Raspberry Pi)

**Step 3: Verify build output includes about page**

Run: `ls -la /home/bonaccike/web-studio/projects/nostrgardn/build/about/`
Expected: `index.html` present

**Step 4: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: address build issues from about page redesign"
```

---

## Notes for Implementer

### Key Files Reference

| File | Purpose |
|------|---------|
| `src/routes/about/+page.svelte` | The page being rewritten |
| `src/lib/actions/scrollReveal.ts` | New — scroll animation action |
| `src/lib/components/FilterPipeline.svelte` | New — CSS flowchart |
| `src/lib/components/terminal/StatusBadge.svelte` | Existing — reused for badges |
| `src/app.css` | Design tokens reference |
| `src/routes/+page.svelte` | Homepage — reference for aesthetic patterns |

### Design Tokens Cheatsheet

| Token | Value | Use |
|-------|-------|-----|
| `--font-display` | Cormorant Variable | Garden half headings/text |
| `--font-mono` | JetBrains Mono | Terminal half everything |
| `--code-rain` | `#00ff41` | Primary green accent |
| `--terminal-black` | `#0a0a0a` | Terminal background |
| `--terminal-gray-dark` | `#1a1a1a` | Elevated terminal surface |
| `--text-primary` | `#b8b8b8` (concrete) | Main text |
| `--text-secondary` | `#8a8a8a` (steel) | Secondary text |
| `--text-tertiary` | `#666666` (dust) | Muted text |
| `--border-accent` | code-rain green | Accent borders |
| `--border-subtle` | dust gray | Subtle borders |

### Photos to Avoid (used on homepage)

- `IMG_20230809_7270.jpeg`
- `IMG_20230809_7278.jpeg`
- `IMG_20230809_7292.jpeg`
- `IMG_20230807_8531.jpeg`

### No-Go Checklist

- [ ] No duobudo mentions anywhere
- [ ] No specific gardener names or pubkeys displayed
- [ ] No CodeRain component on this page
- [ ] No external charting/diagram libraries
- [ ] No scroll-jacking or parallax
- [ ] No new npm dependencies

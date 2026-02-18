# About Page Redesign — "Split Personality"

**Date:** 2026-02-17
**Status:** Approved
**Author:** Claude (Opus 4.6)

## Overview

Redesign the NostrGardn About page from its current raw HTML placeholder into a fully designed experience using the Handbuilt Greenhouse design system. The page uses a "Split Personality" approach: warm, organic garden storytelling on top transitions into a terminal-styled technical explainer on the bottom.

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Primary goal | Both storytelling + technical, balanced | Page serves two audiences: curious visitors and technical Nostr users |
| Duobudo | Dropped entirely | Focus purely on nostrgardn identity |
| Gardener showcase | Abstract (no names/avatars) | Explain the role system conceptually, don't list specific people |
| Decision tree | Visual CSS diagram | Clean flowchart with hover interactivity |
| Interactivity level | Light | Scroll-triggered fade-ins + hover highlights on diagram |
| Photos | Yes — different set from homepage | Adds warmth to the garden half |

## Section 1: The Garden Half (Top)

**Background:** Dark surface (inherits page default). No terminal chrome.

### 1a. Hero

- `nostrgardn` in large Cormorant Variable serif (matches homepage treatment)
- Subtitle: *"about the garden"* — italic, wavy underline
- Location line: *"Tended from California, USA"*
- Wabi-sabi wobble on title (matching homepage: ~0.3deg rotation)

### 1b. Photo Strip

- 3-4 nature photos from `/static/pix/` (different from the 4 used on homepage)
- Horizontal strip, wabi-sabi wobble on each (alternating direction)
- Fade-in on scroll animation
- Same styling as homepage showcase but slightly different layout (maybe wider aspect ratio)

### 1c. Mission

- 2-3 short paragraphs in Cormorant, generous line-height
- Tone: poetic but grounded
- Sample copy:
  > We tend this virtual space to celebrate nature's thriving abundance through decentralized photo sharing. A curated garden on Nostr — where every image arrives through the protocol, not a platform.
  >
  > No algorithms. No corporations. Just relays, keys, and sunlight.
- Fade-in on scroll

### 1d. Gardener Roles (Abstract)

- Three-tier visual — subtle cards or vertical stack, not a list
- **Master Gardener** — Full access. Every post blooms.
- **Gardener** — Trusted contributors. Tag to plant.
- **Pleb** — Community contributors. Tag + image = gallery display.
- Styled with Cormorant headings + subtle borders
- No terminal chrome in this section

## Transition Element

Full-width visual break between the two halves:

- CSS gradient from garden background → `var(--terminal-black)` (~80px tall)
- Thin `1px dashed var(--border-accent)` line at the terminal boundary
- Optional enhancement: SVG line that starts wavy and becomes straight dashed (organic → digital)

## Section 2: The Terminal Half (Bottom)

**Background:** `var(--terminal-black)` with terminal aesthetic.

### 2a. Section Header

- `$ ./how_it_works.sh` in JetBrains Mono with blinking cursor
- Brief subtitle: *"Every post passes through the filter pipeline"*

### 2b. Filter Pipeline Diagram

Vertical CSS flowchart (pure CSS boxes + connectors, no SVG dependency):

```
[Post arrives on relay]
        |
  [From our relay?] ── No → ✗ Ignored
        | Yes
  [Gardener pubkey?] ── Yes → ✓ Full post displayed
        | No
  [Required tags?] ── No → ✗ Ignored
        | Yes
  [Has images?] ── No → ✗ Almost! No images.
        | Yes
  [Images displayed] 🌱
```

**Styling:**
- Decision boxes: `var(--surface-2)` bg, `var(--border-accent)` 1px dashed borders, rounded corners
- Yes paths: green (`var(--brand)`)
- No/rejection paths: muted (`var(--text-tertiary)`)
- Success endpoints: bright green glow
- Rejection endpoints: dimmed/muted

**Interaction:**
- Hover on any decision box highlights it with green glow (`box-shadow: 0 0 12px rgba(0, 255, 65, 0.3)`)
- Connected yes/no paths illuminate on hover
- No animation on load — just hover-responsive

### 2c. Roles (Terminal Voice)

Compact `ls -la`-style permission display:

```
drwxrwxrwx  master-gardener  All posts bloom. No restrictions.
drwxr-xr--  gardener         Trusted. Tag with #gardn to plant.
dr--r-----  pleb             Tag + image = gallery display only.
```

Reinforces the abstract concept from the garden half through the terminal lens.

### 2d. Built With

Row of terminal-styled badges linking to projects:

```
[nostr] [ndk 2.x] [sveltekit] [svelte 4]
```

Styled like existing `StatusBadge` components. Each links to the relevant project site/docs.

## Technical Notes

### Components to Create

1. **FilterPipeline.svelte** — The CSS flowchart diagram with hover interactivity
2. Reuse existing components: CodeRain (not needed here), StatusBadge, wabi-sabi CSS classes

### Existing Assets

- Photos: `/static/pix/` (hundreds available, pick 3-4 not used on homepage)
- Homepage images to avoid: `IMG_20230809_7270`, `IMG_20230809_7278`, `IMG_20230809_7292`, `IMG_20230807_8531`
- Design tokens: All Handbuilt Greenhouse tokens available in `app.css`
- Fonts: Cormorant Variable (serif), JetBrains Mono (mono) — both already loaded

### Animations

- Scroll-triggered fade-in using Intersection Observer (lightweight, no library)
- CSS transitions only — no JS animation libraries
- Hover states on diagram boxes — CSS transitions (0.2s ease)

### Responsive

- Flowchart: vertical on all breakpoints (already natural for mobile)
- Photo strip: 2-col on mobile, 4-col on desktop (same as homepage showcase)
- Transition gradient works at any width
- `ls -la` display: may need horizontal scroll or stacked layout on narrow screens

## No-Go List

- No duobudo mentions
- No specific gardener names or avatars
- No CodeRain on this page (keep it special to the homepage)
- No external dependencies (pure CSS diagram, no charting libraries)
- No complex scroll-jacking or parallax

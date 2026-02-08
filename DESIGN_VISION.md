# NostrGardn Design Vision

**Document Owner:** Frontend Design Strategy
**Created:** February 8, 2026
**Status:** Vision & Planning Phase
**Related:** NOSTRGARDN_PRD.md, ARCHITECTURE_REVIEW.md

---

## Executive Summary

This document captures the strategic design vision for NostrGardn's UI evolution. It serves as a north star for visual identity, interaction design, and user experience as we scale from Phase 1 (Foundation) into Phase 2 (Growth) and beyond.

**Core Design Principle:** Create a distinctive, production-grade interface that embodies our brand essence — *"Cypherpunk with dad-joke energy meets botanical sanctuary"* — while avoiding generic "AI slop" aesthetics.

---

## ✅ CHOSEN DIRECTION: "The Handbuilt Greenhouse" (Feb 8, 2026)

**Status:** APPROVED — Hybrid approach combining Option B (Cypherpunk Greenhouse) with Wabi-Sabi philosophy

**Core Concept:** *The Garden is peaceful. The Greenhouse is honest.*

This design celebrates the "build it yourself" ethos — showing both the finished product (beautiful nature photos) AND the technical scaffolding (Nostr protocol, relay connections, the code that makes it work). It embodies:
- **Wabi-sabi tech** — Visible seams, handmade quality, honest imperfection
- **Proof of work** — The design itself demonstrates effort and craftsmanship
- **Italian immigrant DIY energy** — "I can build that" + "good enough is good enough"
- **Maximum dad jokes** — Terminal prompts, git commit messages, ASCII art
- **Mobile-first execution** — Pocket greenhouse (clean) on mobile, full workshop (spectacle) on desktop

**The Hybrid Balance:**
- Photos and core UX: Polished, professional, meditative
- UI chrome (header, footer, terminal elements): Character, imperfection, playfulness
- Result: Trust where it matters, chaos where it's fun

---

## Current Visual Assessment

### What's Working ✅

**Typography Foundation:**
- **Cormorant Variable** brings elegant, botanical sophistication
- Serif choice signals craftsmanship and care (contrast to typical tech sans-serif)
- Variable font provides flexibility for future weight/width explorations

**Color Palette:**
- Teal/indigo/earthy palette naturally aligns with garden metaphor
- Dark mode as default fits cypherpunk ethos
- Open Props integration provides solid foundation

**Layout & Composition:**
- Minimalist grid layouts let photography breathe
- Generous white space (appropriate for nature photography showcase)
- Responsive design handles mobile → desktop gracefully

**Subtle Motion:**
- Fade-in animations on landing showcase feel polished
- Staggered delays (via `--delay` CSS variable) add sophistication
- Hover transforms on images provide tactile feedback

---

### What Needs Evolution 🌱

**1. Generic Layout Patterns**
- **Issue:** Standard centered grids, predictable spacing, conventional card layouts
- **Missed Opportunity:** Asymmetry, unexpected compositions, garden-inspired organic flow
- **Examples:** Landing page is "hero + grid + CTA" pattern seen everywhere

**2. Underutilized Brand Voice**
- **Issue:** PRD describes "cypherpunk with dad-joke energy" but visual design is conservative
- **Missed Opportunity:** Playful loading states, whimsical error messages, Easter eggs
- **Examples:** "Growing the garden..." is safe; "Photosynthesizing..." would be more on-brand

**3. Weak Gardening Metaphors**
- **Issue:** Colors and tokens reference gardens (teal, earth tones) but experience doesn't feel like tending
- **Missed Opportunity:** Interactions that feel like watering, planting, pruning
- **Examples:** Zap button is generic ⚡; could be watering can with pour animation

**4. Limited Micro-Interactions**
- **Issue:** Feed feels static; minimal feedback for user actions
- **Missed Opportunity:** Tactile responses, scroll-triggered reveals, state transitions
- **Examples:** Posts appear instantly; could "sprout" from soil with growth animation

**5. Typography Hierarchy Weakness**
- **Issue:** Cormorant used for everything (display AND body) dilutes impact
- **Missed Opportunity:** High-contrast pairing, display font at massive scale, editorial layouts
- **Examples:** Title is 6rem max; could push to 12-20rem for unforgettable impact

**6. No Seasonal/Temporal Variability**
- **Issue:** Static color scheme year-round, same experience morning/evening
- **Missed Opportunity:** Living, adaptive design that reflects natural cycles
- **Examples:** Could shift palette by season (spring pastels → fall rusts) or time of day

---

## Design Enhancement Priorities

### Priority 1: Landing Page Redesign 🎯

**Current State:** Standard hero + 4-image grid + CTA
**Strategic Goal:** Create an UNFORGETTABLE first impression that embodies "curated garden on Nostr"

#### Conceptual Direction Options

**Option A: "Living Garden Entrance"** ⭐ *Recommended*
- **Visual:** Animated SVG garden gate that parts on scroll reveal
- **Layout:** Showcase images arranged as botanical specimens with handwritten labels
- **Motion:** Parallax depth effect (foreground plants, midground photos, background sky gradient)
- **Typography:** Massive Cormorant display titles (12rem+) + hand-drawn botanical annotations
- **Color:** Deep forest greens, warm earth tones, bioluminescent teal accents on interactions
- **Why:** Warm, inviting, nature-forward but technically sophisticated. Aligns with "garden sanctuary" core metaphor.

**Option B: "Cypherpunk Greenhouse"**
- **Visual:** Matrix-style code rain morphing into plant imagery
- **Layout:** Hexagonal grid showcase (honeycomb) with glitch/VHS effects on hover
- **Motion:** Terminal-style typewriter reveals, scan line overlays
- **Typography:** Monospace mixed with Cormorant for high/low aesthetic tension
- **Color:** Dark terminal blacks, phosphor greens, warm amber highlights
- **Why:** Emphasizes protocol/freedom angle. Appeals to technical Nostr community.

**Option C: "Zen Garden Asymmetry"**
- **Visual:** Asymmetric stone-garden layout (Japanese rock garden inspiration)
- **Layout:** Showcase images as "stones" with different sizes, positions, subtle rotation
- **Motion:** Slow, contemplative animations. Gentle drift on scroll.
- **Typography:** Oversized Cormorant titles, micro-sized body text (radical scale contrast)
- **Color:** Muted naturals (sand, stone, moss) with single copper/rust accent
- **Why:** Emphasizes curation and mindfulness. "Touch Grass Mode" ethos.

#### Decision Framework

| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| Brand alignment (cypherpunk + nature) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Warmth & approachability | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| Technical distinctiveness | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Implementation complexity | ⭐⭐⭐ (Medium) | ⭐⭐ (High) | ⭐⭐⭐⭐ (Low) |
| Mobile responsiveness | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**UPDATE (Feb 8, 2026):** Direction chosen — **"The Handbuilt Greenhouse"** (Hybrid of Option B + Wabi-Sabi). See full specification below.

---

### Priority 2: Feed Interaction Design 🌊

**Current State:** Vertical scroll, static cards, minimal feedback
**Strategic Goal:** Make "tending the garden" feel tactile and rewarding

#### Proposed Enhancements

**"Watering Can" Hover States:**
- Post cards tilt slightly toward cursor on hover (3D CSS transform: `perspective` + `rotateX/Y`)
- Images get subtle "dew" shimmer overlay (animated gradient with `background-blend-mode`)
- Zap button morphs into watering can icon (`<svg>` swap), tilts 45° as if pouring
- **After zap:** Water droplet particles fall from top of card using CSS animations or Canvas
- **Sound:** Gentle water droplet sound effect (optional, user-toggleable)

**"Growth" Scroll Animations:**
- Posts "sprout" into view with `transform: translateY(20px) scale(0.95)` → `translateY(0) scale(1)`
- Stagger delays based on scroll position (Intersection Observer API)
- Parallax: Images scroll at 0.8x speed relative to card backgrounds (depth illusion)
- Infinite scroll: New posts emerge with "soil-crack" animation (split line with particles)

**"Gardener Badge" Visual Hierarchy:**
- **Master Gardener:** Gold botanical border (vine illustration SVG)
- **Trusted Gardeners:** Green vine accent on left edge (`:before` pseudo-element)
- **Plebs (image-only):** Subtle seed pod icon in corner
- **Blocklist (future):** Composting animation (fade + sepia/brown filter transition)

**Loading States:**
- Replace "Growing the garden..." with rotating messages:
  - "Photosynthesizing..."
  - "Checking soil moisture..."
  - "Pruning spam..."
  - "Consulting the almanac..."
- Animated seed → sprout → plant growth SVG illustration

---

### Priority 3: Typography & Brand Voice System 📖

**Current Challenge:** Cormorant is underutilized. It's a display serif designed for massive headlines, but we're using it for body text too.

#### Proposed Typography System

| Element | Current | Proposed | Rationale |
|---------|---------|----------|-----------|
| **Display Titles** | Cormorant 6rem | **Cormorant 12-20rem** | Unforgettable impact, editorial magazine style |
| **Section Heads** | Cormorant 2.5rem | **Cormorant Italic 4rem** | Botanical specimen label aesthetic |
| **Body Text** | Cormorant | **Literata or EB Garamond** | High-contrast serif, superior readability at paragraph length |
| **Mono/Code** | Inconsolata | **JetBrains Mono or Fira Code** | Ligature support for cypherpunk vibe, better readability |
| **Accent/Annotations** | None | **Caveat or Reenie Beanie** | Handwritten labels for botanical specimen style |

#### Typography Scale (Modular Scale: 1.25 Major Third)

```css
--font-size-00: 0.64rem;   /* Micro labels */
--font-size-0: 0.8rem;     /* Small text */
--font-size-1: 1rem;       /* Body */
--font-size-2: 1.25rem;    /* Large body */
--font-size-3: 1.563rem;   /* H4 */
--font-size-4: 1.953rem;   /* H3 */
--font-size-5: 2.441rem;   /* H2 */
--font-size-6: 3.052rem;   /* H1 */
--font-size-7: 3.815rem;   /* Display Small */
--font-size-8: 4.768rem;   /* Display Medium */
--font-size-9: 5.96rem;    /* Display Large */
--font-size-10: 7.451rem;  /* Display XL */
--font-size-11: 9.313rem;  /* Display 2XL */
--font-size-12: 11.642rem; /* Display 3XL (landing hero) */
```

#### Dad-Joke Energy Integration

**Loading States:**
- "Photosynthesizing your feed..."
- "Consulting the seed catalog..."
- "Watering the relays..."

**Error Messages:**
- "Looks like this seed didn't take. 🌱 Compost and try again?"
- "Relay connection wilted. 🥀 Check your network?"
- "404: This page went to seed."

**Empty States:**
- "Nothing growing yet. Did someone forget to water? 💧"
- "The garden is resting. Even soil needs a break."
- "Compost heap is empty. (That's a good thing!)"

**Success Messages:**
- "Post planted! 🌱"
- "Watered with [X] sats! ⚡💧"
- "Bloomed from compost heap! 🌸"

---

### Priority 4: Color System Evolution 🎨

**Current State:** Static teal brand, indigo/choco text, gray surfaces
**Opportunity:** Create adaptive, living color system that responds to context

#### "Living Color" Adaptive System

**Time-Based Hues (Optional Feature):**
| Time | Primary | Accent | Background | Atmosphere |
|------|---------|--------|------------|------------|
| **Morning** (6am-10am) | Cool teal-blue | Soft yellow | Light gray-blue | Fresh, awakening |
| **Afternoon** (10am-4pm) | Warm teal-green | Amber | Neutral gray | Energetic, bright |
| **Evening** (4pm-8pm) | Deep teal-purple | Rose gold | Warm gray-brown | Contemplative, golden hour |
| **Night** (8pm-6am) | Current dark mode | Bioluminescent teal | Deep charcoal | Current default |

**Seasonal Palettes (Future Phase 3):**
- **Spring:** Pastels (mint, lilac, butter yellow)
- **Summer:** Saturated greens, azure blues
- **Fall:** Rust, amber, burnt orange
- **Winter:** Icy blues, silver, deep evergreen

**Gardener-Specific Colors (Phase 3 - Profile Pages):**
- Each Trusted Gardener gets unique accent color derived from first 6 characters of pubkey
- Algorithm: Convert hex pubkey → HSL color space, adjust saturation/lightness for accessibility
- Applied to profile borders, badges, hover states

#### Implementation Strategy

```javascript
// Pseudocode
const hour = new Date().getHours();
const theme =
  hour >= 6 && hour < 10 ? 'morning' :
  hour >= 10 && hour < 16 ? 'afternoon' :
  hour >= 16 && hour < 20 ? 'evening' : 'night';

document.documentElement.setAttribute('data-time-theme', theme);
```

```css
/* CSS custom properties per time theme */
[data-time-theme="morning"] {
  --brand: var(--teal-5);
  --accent: var(--yellow-4);
  --background: var(--gradient-5);
}
/* etc. */
```

**User Control:** LocalStorage preference to lock theme or enable auto-adaptive mode.

---

### Priority 5: PoW Gallery Redesign (Future - Post Phase 3) 🌳

**Current State:** GitHub-style heatmap (functional, recognizable, but generic)
**Future Opportunity:** Transform into uniquely "garden" visualization

#### Concept: "Growth Rings"

**Visual Metaphor:** Tree rings showing years of growth

**Layout:**
- Concentric circles instead of rectangular grid
- Innermost circle = oldest photos (seed)
- Outermost circle = most recent photos (canopy)
- Each ring represents a month or season
- Density/color intensity shows daily activity (like current heatmap)

**Interaction:**
- Click ring segment → see photos from that time period
- Hover ring → tooltip with date range and photo count
- Center: Animated "seed" icon with total photo count pulsing
- Zoom levels: Year view (12 rings) ↔ Decade view (120 rings)

**Technical:**
- SVG `<circle>` elements with `stroke-dasharray` for segmentation
- Canvas fallback for performance on mobile
- Intersection of tree ring biology + cypherpunk data viz

**Why Later:** Requires significant rework. Current heatmap is functional and recognizable. This is polish, not foundation.

---

## APPROVED DIRECTION: "The Handbuilt Greenhouse" (Hybrid)

**Date Approved:** February 8, 2026
**Status:** Implementation Ready

### Design Philosophy

This direction synthesizes **Option B (Cypherpunk Greenhouse)** with **Wabi-Sabi philosophy** and **Italian immigrant DIY ethos** to create something unique: a design that shows both the finished garden AND the workshop that built it.

#### Core Tension (The Magic)

**The Garden = Peaceful. The Greenhouse = Honest.**

- **Photos and content:** Static, calm, meditative, given space to breathe
- **Infrastructure (UI chrome):** Shows its workings — code snippets, terminal prompts, relay status, the occasional glitch that says *"this runs on cryptography and duct tape"*

Think: A backyard workshop where you see both the finished planter box (beautiful) AND the tools on the workbench (raw, honest, handmade).

### Design Principles

#### 1. Wabi-Sabi Tech (Imperfect, Evolving, Honest)
- **Embrace visible seams** — Show relay connection status, display event IDs on hover, let users see the Nostr machinery
- **Handmade quality** — Typography isn't pixel-perfect. Spacing has character. The hexagon grid might be *slightly* irregular
- **Proof of Work** — The design itself demonstrates effort. You can tell a human built this, not a template

#### 2. Maximum Dad Jokes, Minimal Bullshit
- Loading states: `~/nostrgardn$ npx photosynthesis --watch`
- Error messages: `Error 404: This page touched grass and never came back`
- Success: `git commit -m "feat(garden): added one (1) tomato 🍅"`
- Terminal prompts everywhere

#### 3. The "Good Enough" Aesthetic
- Some elements **intentionally rough** — hand-drawn arrows, ASCII art borders
- Strategic use of **Comic Sans** (yes, seriously) for maximum dad-joke chaos
- If code rain is slightly janky, that's **on-brand** — you built this greenhouse yourself

#### 4. Mobile-First, Desktop Workshop
- **Mobile:** Clean, fast, focused. Vertical feed. Minimal code rain. Photos are hero.
- **Desktop:** Full experience. Code rain, glitch effects, terminal UI, hexagon grid. The whole workshop.

### Visual Elements

#### Typography Mix

Three font families working together:

```css
--font-display: 'Cormorant Variable', serif;     /* Organic elegance */
--font-mono: 'JetBrains Mono', monospace;        /* Technical scaffolding */
--font-chaos: 'Comic Sans MS', cursive;          /* Maximum dad jokes */
```

**Hierarchy example:**
- Display: Cormorant 12rem (desktop) / 6rem (mobile) — organic
- Terminal UI: JetBrains Mono 0.9-1rem — technical
- Dad jokes: Comic Sans 0.8rem — chaotic good

#### Color Palette: Terminal Greenhouse

```css
:root {
  /* Base: Terminal blacks */
  --bg-primary: #0a0a0a;        /* Deep black */
  --bg-secondary: #1a1a1a;      /* Slightly lighter */

  /* Tech: Phosphor green + amber */
  --code-rain: #00ff41;         /* Matrix green */
  --code-accent: #39ff14;       /* Brighter green */
  --interaction: #ff9500;       /* Warm amber (hover/focus) */
  --warning: #cc7700;           /* Darker amber */

  /* Organic: Earth tones */
  --earth-brown: #6b4423;       /* Italian nonno's workbench */
  --moss-green: #4a5f3f;        /* Understated nature */
  --clay-terracotta: #a0522d;   /* Mediterranean warmth */

  /* Wabi-sabi: Imperfect grays */
  --steel-gray: #8a8a8a;        /* Weathered metal */
  --concrete: #b8b8b8;          /* Unfinished surface */
}
```

#### Landing Page Layout

**Mobile (Pocket Greenhouse):**
- Minimal code rain banner at top
- Large Cormorant title (6rem)
- Small terminal prompt
- 2x2 photo grid (simple, clean)
- Terminal-style CTA button
- Fast, focused, no heavy animations

**Desktop (Full Workshop):**
- Matrix-style code rain across top 20% (slow, meditative)
- Massive Cormorant title (12-16rem)
- Hexagonal photo grid (honeycomb pattern)
- Relay connection status widget
- VHS glitch effects on hover
- Terminal prompt navigation
- Full technical spectacle

#### The Hexagon Grid + Glitch Effect

**Interaction sequence:**
1. Hover → VHS scan line sweeps across (100ms)
2. RGB channel split (red/blue offset 2px, 50ms)
3. Settles with warm amber border (#ff9500)
4. Optional: Terminal filename overlay appears

**Wabi-sabi twist:** Hexagons don't align perfectly — 1-2px intentional irregularity

#### Code Rain → ASCII Art Morphing

**Desktop hero animation:**
- Code falls slowly (3-4 seconds per line)
- Characters are actual Nostr data: `"kind":1`, `npub1...`, Lightning invoices
- Every 8-10 seconds, code coalesces into ASCII art:
  - Fern, flower, tree made from characters
  - Then dissolves back to code
- **Meditative, not jarring** — like watching rain

**Mobile:** Minimal or disabled for performance

#### Dad Joke Loading States (Maximum Chaos)

```javascript
const loadingMessages = [
  '~/garden$ npm install grass --save-dev',
  '[████████░░] 80% - Photosynthesizing your feed...',
  'git commit -m "feat: added one (1) tomato plant 🍅"',
  'Watering the relays... (this could take a while)',
  'Consulting the almanac... (Fortran intensifies)',
  '// TODO: Figure out why this works',
  'Pruning spam from the compost heap...',
  'Checking if robots.txt allows gardening...',
  'NIP-420: Proof of Photosynthesis (Draft)',
  'Error: Success. Wait, what?',
];
```

#### Wabi-Sabi UI Details

- Hamburger menu icon slightly off-center (1-2px) — intentional
- Hand-drawn SVG borders instead of CSS borders — wobbly, human
- Buttons with subtle texture (paper grain, concrete, weathered wood)
- Hexagon grid micro-variations in spacing — not perfect, alive
- Footer: `Built with duct tape and cryptography 🔧⚡`

### Implementation Strategy

#### Performance Budget (Mobile)
- First paint: < 1.5s on 3G
- No layout shift
- Images lazy-load
- Code rain uses CSS animation (not Canvas) on mobile

#### Accessibility
- Respect `prefers-reduced-motion` — disable code rain, glitches
- Keyboard navigation for all interactive elements
- High contrast maintained (terminal blacks + phosphor greens)
- Screen reader labels for all terminal UI

#### Progressive Enhancement
- **Baseline:** Clean photo feed, terminal-style navigation (works everywhere)
- **Enhanced:** Code rain, glitch effects, hexagon grid (modern browsers)
- **Premium:** WebGL shaders, advanced animations (desktop, high-end devices)

### The "Build It Yourself" Integration

#### Workshop Mode Toggle (Future)
Hidden setting (Konami code or `/workshop` URL) that shows scaffolding:
- Relay WebSocket messages in real-time
- NDK cache stats visible
- Event IDs on every post
- "View Source" links on components
- Pedagogical cypherpunk: *"Here's how I built this. You can too."*

#### Easter Eggs
- Footer: `Built with duct tape and cryptography 🔧⚡`
- Relay status: `wss://nos.lol [Status: vibing]`
- Profile badge: `🛠️ Built This Thing` or `👴🏻 Italian Nonno Energy`
- 404 page: Full terminal-style error with dad jokes

---

## Design Token System (Post-SvelteKit 2.x)

### Recommended CSS Variable Structure

```css
:root {
  /* Brand Core */
  --brand-primary: var(--teal-6);
  --brand-secondary: var(--green-7);
  --brand-accent: var(--amber-5);

  /* Semantic Colors */
  --color-success: var(--green-5);
  --color-warning: var(--amber-6);
  --color-error: var(--red-5);
  --color-info: var(--teal-4);

  /* Surface Hierarchy */
  --surface-ground: var(--gray-12);    /* Page background */
  --surface-1: var(--gray-11);         /* Card backgrounds */
  --surface-2: var(--gray-10);         /* Nested cards */
  --surface-3: var(--gray-9);          /* Hover states */
  --surface-4: var(--gray-8);          /* Active states */

  /* Typography */
  --font-display: 'Cormorant Variable', serif;
  --font-body: 'Literata', serif;       /* Or EB Garamond */
  --font-mono: 'JetBrains Mono', monospace;
  --font-accent: 'Caveat', cursive;

  /* Spacing (Modular Scale 1.5) */
  --space-3xs: 0.25rem;   /* 4px */
  --space-2xs: 0.5rem;    /* 8px */
  --space-xs: 0.75rem;    /* 12px */
  --space-sm: 1rem;       /* 16px */
  --space-md: 1.5rem;     /* 24px */
  --space-lg: 2.25rem;    /* 36px */
  --space-xl: 3.375rem;   /* 54px */
  --space-2xl: 5.063rem;  /* 81px */
  --space-3xl: 7.594rem;  /* 121px */

  /* Animation */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;

  --ease-in: cubic-bezier(0.32, 0, 0.67, 0);
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-round: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.15);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.2);
}
```

---

## Implementation Roadmap

### ✅ Phase 0: Design Discovery (COMPLETE - Feb 8, 2026)
- [x] Finalized conceptual direction: "The Handbuilt Greenhouse" (Hybrid)
- [x] Core principles defined: Wabi-sabi tech + maximum dad jokes + mobile-first
- [x] Typography system chosen: Cormorant + JetBrains Mono + Comic Sans
- [x] Color palette locked: Terminal blacks + phosphor greens + earth tones
- [x] Key animations defined: Code rain, glitch effects, hexagon grid

### Phase 1: Foundation (1 week) - READY TO START
- [ ] Implement design token system in `app.css`
  - [ ] Terminal Greenhouse color palette
  - [ ] Typography scale with three font families
  - [ ] Spacing system (modular scale 1.5)
  - [ ] Animation tokens (durations + easings)
- [ ] Terminal UI component primitives
  - [ ] Terminal-style buttons (`> ./action.sh`)
  - [ ] Loading bars with progress indicators
  - [ ] Status badges (relay connection, gardener role)
- [ ] Hexagon grid layout system
  - [ ] CSS Grid + clip-path hexagons
  - [ ] Mobile fallback (vertical feed)
  - [ ] Wabi-sabi micro-variations
- [ ] Mobile-first base styles
  - [ ] Responsive breakpoints
  - [ ] Touch-friendly hit targets
  - [ ] Performance budgets

### Phase 2: The Spectacle (1 week)
- [ ] Code rain animation
  - [ ] Canvas implementation (desktop)
  - [ ] CSS fallback (mobile)
  - [ ] ASCII art morphing sprites
- [ ] VHS glitch effect
  - [ ] Scan line shader
  - [ ] RGB channel split
  - [ ] Amber border settle
- [ ] Landing page hero
  - [ ] Massive Cormorant typography
  - [ ] Hexagon showcase grid
  - [ ] Terminal prompt navigation
- [ ] Relay connection status widget
  - [ ] Real-time WebSocket monitoring
  - [ ] Terminal-style status display

### Phase 3: Polish & Dad Jokes (3-5 days)
- [ ] Dad joke loading state system
  - [ ] Rotating terminal messages
  - [ ] Git commit style success states
  - [ ] Error messages with personality
- [ ] Wabi-sabi details
  - [ ] Hand-drawn SVG borders
  - [ ] Texture overlays (paper, concrete)
  - [ ] Comic Sans strategic deployment
  - [ ] Intentional imperfections (spacing, alignment)
- [ ] Easter eggs
  - [ ] Workshop mode toggle
  - [ ] Footer badges
  - [ ]404 terminal page
  - [ ] Konami code surprises
- [ ] Performance optimization
  - [ ] Lazy-load heavy animations
  - [ ] Code-split Canvas/WebGL
  - [ ] Respect `prefers-reduced-motion`

### Phase 4: Feed & Component Expansion (Ongoing)
- [ ] Feed interaction layer
  - [ ] Hexagon → post card transitions
  - [ ] Glitch hover states
  - [ ] Terminal filename overlays
- [ ] Gardener badge hierarchy
  - [ ] Master Gardener: `🛠️ Built This Thing`
  - [ ] Trusted Gardeners: Terminal prompt styling
  - [ ] Plebs: Minimal but clear
- [ ] Feature-specific designs
  - [ ] Touch Grass Mode lockout screen
  - [ ] Compost Heap earthy terminal UI
  - [ ] Lightning Watering Can animations
  - [ ] Gardener Profile Pages with workshop aesthetic

---

## Design Principles (Working Guidelines)

### 1. **Bold Over Timid**
- Massive typography scales (12rem+) over safe sizes (2-4rem)
- Unexpected asymmetry over predictable grids
- Saturated accent colors over muted neutrals
- Dramatic animations over subtle fades

### 2. **Metaphor Over Generic**
- Watering can icon over generic ⚡ zap icon
- Sprouting animations over slide-up reveals
- Botanical labels over standard tags
- Compost heap over "spam folder"

### 3. **Personality Over Polish**
- Dad jokes in loading states over generic "Loading..."
- Whimsical error messages over technical jargon
- Playful micro-interactions over static states
- "Photosynthesizing..." over "Fetching posts..."

### 4. **Curation Over Chaos**
- Intentional negative space over packed layouts
- Selective animation over everything moving
- Thoughtful typography hierarchy over uniform sizing
- Quality interactions over quantity of effects

### 5. **Nature Over Tech (But Both)**
- Organic shapes and flows over rigid geometry (where appropriate)
- Earthy color palette over neon tech colors
- Botanical metaphors over mechanical ones
- But: Terminal/code aesthetics as accent (cypherpunk balance)

---

## Success Metrics (Post-Implementation)

### Qualitative Indicators
- [ ] First-time visitors describe landing page as "unforgettable" or "unlike anything else"
- [ ] Nostr community feedback mentions visual distinctiveness
- [ ] Brand voice (cypherpunk + dad-joke) evident without explanation
- [ ] Feed interactions feel tactile and rewarding

### Quantitative Metrics
- [ ] Landing page bounce rate < 40% (currently unknown baseline)
- [ ] Time on site increases 20%+ for new visitors
- [ ] Feed scroll depth increases (users view more posts per session)
- [ ] Social shares include screenshots of UI (visual virality)

### Technical Benchmarks
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Time to Interactive (TTI) < 3.5s
- [ ] Animation frame rate maintains 60fps on mid-tier mobile devices

---

## Decisions Made (Feb 8, 2026)

### ✅ Resolved
- [x] **Conceptual direction:** "The Handbuilt Greenhouse" (Hybrid: Cypherpunk + Wabi-Sabi)
- [x] **Typography:** Cormorant (display) + JetBrains Mono (terminal) + Comic Sans (chaos)
- [x] **Audience balance:** 50/50 nature lovers + cypherpunks, "if you get it, you get it"
- [x] **Virality vs. timelessness:** Viral now, iterate later
- [x] **Animation intensity:** Minimal/meditative for photos, technical for infrastructure
- [x] **Dad joke dial:** Maximum chaos
- [x] **Mobile-first:** Critical — flawless on phones, spectacular on desktop
- [x] **Wabi-sabi level:** Hybrid — polished where it matters, chaotic where it's fun

### Open Questions (Future Phases)
- [ ] **Adaptive theming:** Time-based color shifts (morning/evening) — defer to Phase 3+?
- [ ] **Sound effects:** Audio (code rain clicks, glitch sounds) with user toggle?
- [ ] **Workshop mode:** Full dev tools view accessible via Konami code or URL?
- [ ] **Gardener colors:** Auto-generate accent colors from pubkey hashes?
- [ ] **PoW redesign:** Keep heatmap or evolve to Growth Rings (Phase 3+)?

---

## References & Inspiration

### Design Inspiration Sources
- **Botanical Illustration:** John James Audubon, Maria Sibylla Merian, Ernst Haeckel
- **Cypherpunk Aesthetics:** Hacker zines, ASCII art, terminal UIs, early web brutalism
- **Editorial Design:** Bloomberg Businessweek, Monocle, Kinfolk magazine layouts
- **Garden UX:** Litterati (gamified cleanup), Forest (focus app with tree growth), iNaturalist
- **Nostr Clients:** Damus (iOS polish), Primal (clean design), Snort (web UI patterns)

### Typography Resources
- **Cormorant:** Display serif by Christian Thalmann (Google Fonts)
- **Literata:** Body serif designed for Google Play Books (excellent screen readability)
- **EB Garamond:** Classic Garamond revival (more traditional feel)
- **JetBrains Mono:** Code font with ligatures (better than Inconsolata)
- **Caveat:** Handwritten font by Pablo Impallari (casual annotations)

### Technical References
- **Svelte 5 Runes:** [svelte.dev/docs/svelte/runes](https://svelte.dev/docs/svelte/runes)
- **Open Props:** [open-props.style](https://open-props.style) (current design token system)
- **Motion Design:** Stripe animations, Linear app micro-interactions, Apple HIG motion guidelines

---

## Document Maintenance

**Last Updated:** February 8, 2026
**Next Review:** After Phase 1 implementation (estimated Feb 15-20, 2026)
**Owner:** Frontend Design Strategy (Claude Sonnet 4.5)

**Change Log:**
| Date | Author | Changes |
|------|--------|---------|
| 2026-02-08 | Claude Sonnet 4.5 | Initial design vision document created |
| 2026-02-08 | Claude Sonnet 4.5 | Design direction approved: "The Handbuilt Greenhouse" (Hybrid), roadmap updated for Phase 1-3 implementation |

---

*"In the garden of decentralization, every pixel contains a philosophy."*

— The Greenhouse Design Studio, est. 2026

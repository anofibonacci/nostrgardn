# NostrGardn Architecture Review

**Reviewer:** Claude Opus 4.6 (Technical Architect)
**Date:** February 8, 2026
**Scope:** Full codebase + PRD analysis, pre-scaling recommendations
**Status:** Active — Quick wins in progress

---

## Current Stack Summary

| Layer | Current | Notes |
|-------|---------|-------|
| Framework | SvelteKit **2.50.2** ✅ | Upgraded Feb 8, 2026 |
| UI | Svelte **5.50.0** ✅ | Upgraded Feb 8, 2026 (runes available) |
| Bundler | Vite **5.0** ✅ | Upgraded Feb 8, 2026 (Vite 6 available) |
| Nostr | NDK **2.15.2** ✅ | Upgraded Feb 8, 2026 |
| Linting | ESLint **9.0** ✅ | Upgraded Feb 8, 2026 |
| Adapter | adapter-static **3.0** ✅ | Upgraded Feb 8, 2026 |
| Syntax Highlight | Shiki **0.14** | Upgrade to 1.x planned |
| Hosting | GoDaddy static | (see recommendations) |

---

## CRITICAL FINDINGS (Fix Before Scaling)

### 1. Pleb Posts Are Never Fetched

**File:** `src/lib/stores/posts.ts:122-127`

The relay query filters by `authors: whitelist`, which means **only whitelisted pubkeys are queried**. Any pleb posting with `#nostrgardnpost` is invisible because their events are never fetched. The entire pleb tier described in the PRD and implemented in `filters.ts` is effectively dead code.

**Fix:** Add a second query for tagged pleb posts:
- Query 1: `{ kinds: [1, 20], authors: whitelist }` (Gardener posts)
- Query 2: `{ kinds: [1, 20], "#t": ["nostrgardnpost"], limit: 30 }` (Pleb posts by tag)
- Merge and filter client-side

**Status:** FIXED (Feb 8, 2026)

### 2. XSS Vulnerability in FullPostCard

**File:** `src/lib/components/FullPostCard.svelte:76`

The `processContent` chain (`linkify` -> `addLineBreaks` -> `convertLinkToImage`) operates on raw Nostr event `content` and renders it as HTML via `{@html}`. There is **no HTML sanitization**. A malicious Nostr event with content like `<img src=x onerror=alert(1)>` would execute arbitrary JavaScript.

**Fix:** Sanitize with DOMPurify before `{@html}` rendering.

**Status:** FIXED (Feb 8, 2026)

### 3. Only Fetching Kind 1 Events (Missing Kind 20)

**File:** `src/lib/stores/posts.ts:123`

The PRD emphasizes NIP-68 (Kind 20, picture-first feeds) as CRITICAL, yet the code only queries `kinds: [1]`. Kind 20 events are the native photo format for Nostr — and increasingly what photo-focused clients publish.

**Fix:** Add `kinds: [1, 20]` to the filter. Also parse `imeta` tags (NIP-92) in addition to regex URL extraction.

**Status:** FIXED (Feb 8, 2026)

### 4. No `imeta` Tag Parsing

**File:** `src/lib/filters.ts:147-177`

Image extraction relies entirely on regex pattern matching against the `content` string. NIP-92 `imeta` tags are the standard way to attach image metadata (URL, MIME type, dimensions, blurhash) to events. Modern Nostr clients use these tags, and some don't put image URLs in the content text at all.

**Fix:** Add `imeta` tag extraction to `extractImages()`.

**Status:** FIXED (Feb 8, 2026)

---

## HIGH PRIORITY (Needed for Phase 2)

### 5. NDK 0.8.19 -> 2.15.2 Migration

Upgraded from NDK 0.8.19 to 2.15.2 with Dexie cache adapter:
- **Dexie cache adapter** added (IndexedDB persistence via `ndk-cache-dexie`)
- **connectedRelays API** updated (method returning array, not property)
- **profile.picture** preferred over deprecated `profile.image`
- **Kind 20** native enum support (no type cast needed)
- **3 pre-existing type errors** resolved
- Removed unused `ndk-svelte-components` package

**Note:** Pinned to 2.15.2 to match `ndk-cache-dexie@2.6.44` dependency. When dexie adapter updates, can bump to latest.

**Still available for future:**
- Outbox model (`enableOutboxModel: true`)
- NIP-07 signer (user login/zapping)

**Status:** DONE (Feb 8, 2026)

### 6. SvelteKit 1.x -> 2.x + Svelte 5

SvelteKit 1.x is end-of-life. SvelteKit 2.x brings Svelte 5 runes (`$state`, `$derived`, `$effect`), smaller bundle sizes, and better SSR/streaming. The codebase is small (~35 source files) so migration is very tractable.

**Migration completed Feb 8, 2026:**
- SvelteKit 1.20.4 → 2.50.2 ✓
- Svelte 4.0 → 5.50.0 ✓
- Vite 4.3 → 5.0 ✓
- adapter-static 2.0 → 3.0 ✓
- All supporting tools updated (ESLint, Prettier, TypeScript)
- Fixed `vitePreprocess` import path (now from `@sveltejs/vite-plugin-svelte`)
- Updated lucide-svelte to Svelte 5 compatible version
- Added type assertion for NDK cache adapter (minor type mismatch)
- Build succeeds, 0 type errors

**Status:** DONE (Feb 8, 2026)

### 7. Client-Side Caching via Dexie

Added `ndk-cache-dexie` adapter with IndexedDB persistence (database name: `nostrgardn`). Events and profiles are now cached locally, reducing relay fetches across page loads. The 5-minute in-memory store cache remains as a hot cache layer.

**Status:** DONE (Feb 8, 2026) — Added with NDK 2.x migration

### 8. Static Images in Git Repo

`static/pix/` contains hundreds of JPEG files checked into git. This bloats clone/checkout size, slows CI/CD, and limits scalability.

**Recommendation:** Move images to dedicated object storage/CDN:
- **Option A (Nostr-native):** Upload to Blossom/NIP-96 servers
- **Option B (Traditional):** Cloudflare R2, Backblaze B2 + Cloudflare CDN
- **Option C (Quick win):** Git LFS + CDN origin

**Status:** PLANNED

### 9. No Responsive Images

All images are served at full resolution. Would benefit from multiple resolutions, modern formats (WebP/AVIF), `srcset`/`sizes` attributes, and blurhash placeholders.

**Status:** PLANNED

---

## MEDIUM PRIORITY (Quality & Performance)

### 10. CSS Duplication in app.css

Theme variables are defined 4 times. The PoW palette is identical across all blocks.

**Fix:** Consolidate to 2 blocks (base dark + light override).

**Status:** PLANNED

### 11. Hosting on GoDaddy

For a static SPA, modern JAMstack hosts provide edge CDN, automatic HTTPS, preview deployments, and free tiers.

**Recommendations ranked by fit:**
1. **Cloudflare Pages** — Free, fast edge CDN, git deploy, custom domains
2. **Vercel** — Free tier, excellent SvelteKit support, analytics
3. **Netlify** — Free tier, form handling, split testing

**Status:** PLANNED

### 12. Dead Code / Template Artifacts

- `src/lib/skip_these.ts` — Legacy blocklist, duplicated in `config.ts`
- `mdsvex` + `shiki` + rehype/remark plugins — Full blog pipeline from template, largely unused
- `package.json` name is `"bagel"` — From original template
- `src/lib/components/custom/img.svelte` + `index.ts` — Unused mdsvex component

**Status:** FIXED (Feb 8, 2026) — Dead code removed

### 13. No SEO / Social Meta Tags

No Open Graph tags, Twitter Card tags, structured data, `robots.txt`, or `sitemap.xml`.

**Status:** PLANNED

### 14. Profile Fetching Strategy

Profiles fetched one-per-post with 5-second race timeout. Since the Gardener roster is small (9 pubkeys), profiles could be cached in IndexedDB, pre-fetched at init, or hardcoded as fallbacks.

**Status:** PLANNED (improves with NDK 2.x Dexie cache)

### 15. No Loading States / Skeletons

Users see "Growing the garden..." text. Skeleton cards would feel more polished.

**Status:** PLANNED

### 16. Lightbox Needs Work

Current PhotoGrid lightbox lacks keyboard navigation (arrows), touch/swipe, image preloading, and body scroll lock.

**Status:** PLANNED

### 17. No Tests

Zero test files exist. Need at minimum:
- Unit tests for `filters.ts` (decision tree core logic)
- Unit tests for `extractImages()` (regex edge cases)
- Component tests for post rendering

Vitest integrates natively with SvelteKit.

**Status:** PLANNED

---

## LOW PRIORITY (Polish)

### 18. Minor Bugs / Typos
- `+page.svelte:27` — "befitting ofNostr" (missing space)
- `about/+page.svelte:30` — Still references "duobudo"
- About page describes single-relay model that doesn't match reality

**Status:** FIXED (Feb 8, 2026) — Typo corrected

### 19. PWA Support
For a photo-browsing app, a PWA manifest + service worker would enable homescreen install, offline viewing, and background sync.

**Status:** PLANNED

### 20. Accessibility
- Lightbox overlay lacks `role="dialog"` and `aria-modal="true"`
- Photo cards use `on:click` on `div` without proper keyboard handling
- No skip-to-content link in layout
- Feed images rely on generic alt text

**Status:** PLANNED

---

## Recommended Upgrade Sequence

| # | Upgrade | Effort | Unblocks | Status |
|---|---------|--------|----------|--------|
| 1 | **Fix XSS** (DOMPurify) | 1 hour | Security | DONE |
| 2 | **Fix pleb query** (dual subscription) | 2-3 hours | Pleb tier | DONE |
| 3 | **Add Kind 20 + imeta parsing** | 1 day | NIP-68 photo events | DONE |
| 4 | **Remove dead code** | 1 hour | Cleaner build | DONE |
| 5 | **NDK 0.8 -> 2.15 migration** | ~90 min | Caching, outbox, signer | DONE |
| 6 | **SvelteKit 1.x -> 2.x + Svelte 5** | 2-3 days | Modern framework | DONE |
| 7 | **Dexie caching** (with NDK 2.x) | — | Offline, performance | DONE |
| 8 | **Move images off git** | 1-2 days | Repo health, CDN perf | PLANNED |
| 9 | **Migrate hosting** | 1 day | Edge CDN, deploys | PLANNED |
| 10 | **Add SEO meta + OG tags** | Half day | Discovery, sharing | PLANNED |
| 11 | **Add Vitest + core tests** | 1-2 days | Confidence for features | PLANNED |

---

## Architecture Readiness for Phase 2 Features

| Feature | Readiness | What's Missing |
|---------|-----------|----------------|
| Feed-to-Gallery Deep Linking | 70% | PoW metadata matching feasible now |
| Compost Heap | 20% | NDK 2.x signer, vote storage |
| Lightning Watering Can | 10% | NDK 2.x signer + NIP-57 zap receipts |
| Touch Grass Mode | 90% | Pure client-side, could build today |
| Gardener Profile Pages | 40% | Better profile fetch + new route |
| Featured Gardeners Carousel | 50% | Better profile fetch + component |

---

## Design System Implementation (Feb 8, 2026)

**Approved Direction:** "The Handbuilt Greenhouse" (Hybrid)
**Full Specification:** See `DESIGN_VISION.md`

### Design Philosophy
- **Core Concept:** The garden (photos) is peaceful. The greenhouse (UI infrastructure) is honest.
- **Wabi-Sabi Tech:** Visible seams, handmade quality, intentional imperfection
- **Cypherpunk + Dad Jokes:** Terminal UI, code rain, glitch effects, maximum chaos
- **Mobile-First:** Pocket greenhouse (clean) on mobile, full workshop (spectacle) on desktop

### Implementation Roadmap

#### Phase 1: Foundation (1 week) - READY TO START
- Design token system in `app.css`
  - Terminal Greenhouse color palette (blacks + phosphor greens + earth tones)
  - Typography: Cormorant + JetBrains Mono + Comic Sans
  - Spacing, animation tokens
- Terminal UI primitives (buttons, loading bars, badges)
- Hexagon grid layout (CSS Grid + clip-path)
- Mobile-first base styles

#### Phase 2: The Spectacle (1 week)
- Code rain animation (Canvas desktop, CSS mobile)
- VHS glitch effect (scan lines, RGB split)
- Landing page hero (massive typography, hexagon showcase)
- Relay connection status widget

#### Phase 3: Polish & Dad Jokes (3-5 days)
- Dad joke loading state system
- Wabi-sabi details (hand-drawn borders, textures, Comic Sans deployment)
- Easter eggs (workshop mode, footer badges, 404 terminal)
- Performance optimization

### Technical Requirements
- **Performance Budget (Mobile):** First paint < 1.5s on 3G
- **Accessibility:** Respect `prefers-reduced-motion`, keyboard navigation
- **Progressive Enhancement:** Baseline (works everywhere) → Enhanced → Premium

---

## Change Log

| Date | Author | Changes |
|------|--------|---------|
| Feb 8, 2026 | Claude Opus 4.6 | Initial architecture review |
| Feb 8, 2026 | Claude Opus 4.6 | Quick wins 1-4 implemented |
| Feb 8, 2026 | Claude Opus 4.6 | NDK 2.15.2 migration + Dexie cache |
| Feb 8, 2026 | Claude Sonnet 4.5 | SvelteKit 2.x + Svelte 5 migration complete |
| Feb 8, 2026 | Claude Sonnet 4.5 | Design system roadmap added: "The Handbuilt Greenhouse" |

---

*"In the garden of decentralization, every refactor contains a revolution."*

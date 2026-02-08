# NostrGardn Architecture Review

**Reviewer:** Claude Opus 4.6 (Technical Architect)
**Date:** February 8, 2026
**Scope:** Full codebase + PRD analysis, pre-scaling recommendations
**Status:** Active — Quick wins in progress

---

## Current Stack Summary

| Layer | Current | Latest |
|-------|---------|--------|
| Framework | SvelteKit **1.20** | SvelteKit **2.x** (Svelte 5) |
| UI | Svelte **4.0** | Svelte **5.x** (runes) |
| Bundler | Vite **4.3** | Vite **6.x** |
| Nostr | NDK **0.8.19** | NDK **2.x** |
| Linting | ESLint 8 + TS-ESLint 5 | ESLint 9 flat config |
| Syntax Highlight | Shiki **0.14** | Shiki **1.x** |
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

### 5. NDK 0.8.19 is Severely Outdated

NDK 2.x is a complete rewrite with:
- **Outbox model** (discovers which relays each user publishes to)
- **Dexie caching adapter** (IndexedDB persistence, offline support)
- **NIP-07 signer** (for future user login/zapping from the site)
- **Better subscription management** (auto-dedup, auto-close)
- **Kind 20 and imeta support** built-in

This is the single largest upgrade that unblocks almost every Phase 2 feature.

**Recommendation:** Dedicated migration sprint. NDK 2.x has breaking API changes.

**Status:** PLANNED

### 6. SvelteKit 1.x -> 2.x + Svelte 5

SvelteKit 1.x is end-of-life. SvelteKit 2.x brings Svelte 5 runes (`$state`, `$derived`, `$effect`), smaller bundle sizes, and better SSR/streaming. The codebase is small (~35 source files) so migration is very tractable. The SvelteKit team provides an automated migration tool (`npx sv migrate`).

**Recommendation:** Upgrade after NDK migration.

**Status:** PLANNED

### 7. No Client-Side Caching

Currently: 5-minute in-memory cache that disappears on page refresh. For a photo-heavy app, every page load triggers full relay fetches.

**Fix:** Add NDK's Dexie cache adapter (comes with NDK 2.x).

**Status:** PLANNED (blocked by NDK upgrade)

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
| 5 | **NDK 0.8 -> 2.x migration** | 3-5 days | Caching, outbox, signer | PLANNED |
| 6 | **SvelteKit 1.x -> 2.x + Svelte 5** | 2-3 days | Modern framework | PLANNED |
| 7 | **Add Dexie caching** | 1 day | Offline, performance | PLANNED |
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

## Change Log

| Date | Author | Changes |
|------|--------|---------|
| Feb 8, 2026 | Claude Opus 4.6 | Initial architecture review |
| Feb 8, 2026 | Claude Opus 4.6 | Quick wins 1-4 implemented |

---

*"In the garden of decentralization, every refactor contains a revolution."*

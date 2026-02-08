# NostrGardn Product Requirements Document (PRD)

**Product:** NostrGardn — A Curated Garden on the Nostr Network
**Domain:** [nostrgardn.com](https://nostrgardn.com)
**Version:** 1.1
**Last Updated:** February 8, 2026
**Document Owner:** Master Gardener (NstrGrdn)
**Status:** Draft — Revised (Corrections & Context Applied)

---

## DOCUMENT PURPOSE

This PRD serves as the definitive product specification for NostrGardn, a curated decentralized photo garden built on the Nostr protocol. It defines our product vision, market positioning, feature requirements, technical architecture, and success metrics.

**Primary Audiences:**
- Development team (current and future)
- Potential collaborators and contributors
- Nostr ecosystem partners
- Investors or sponsors (if applicable)

---

## EXECUTIVE SUMMARY

### The Elevator Pitch

> **For nature lovers and freedom technologists**, NostrGardn is a curated photo feed that celebrates the beauty of the natural world through decentralized photo sharing. Unlike centralized platforms that mine your data and manipulate your feed, NostrGardn runs on Nostr — the protocol for freedom — where you own your identity, your content, and your relationships.

### What We're Building

NostrGardn is Instagram meets botanical sanctuary — if Instagram were built by cypherpunks who actually read the Federalist Papers, believed in self-sovereign identity, and thought "walled garden" was a design flaw rather than a feature.

**Core Offering:**
- Curated nature photography feed powered by Nostr protocol
- Tiered trust model: Master Gardener → Gardeners → Plebs → Compost Heap
- Lightning-powered engagement (zaps as "watering")
- Decentralized identity and content ownership
- Community-driven moderation through gardening metaphors

### Current Status (February 2026)

**Current Operating Mode:**
NostrGardn currently operates as a curated photo blog from a single user — the Master Gardener (NstrGrdn npub) — documenting outdoor building, landscaping, and home gardening projects at his personal residence (front and back yards). The `/pow` page serves as the Master Gardener's personal photo roll. The mid- and long-term vision evolves this into a multi-user platform where each Trusted Gardener has their own photo-roll page (addressed by their npub in the URL).

**Shipped:**
- Core filtering and display logic ✓
- Tiered access hierarchy implementation ✓
- Basic feed and landing page ✓
- Gardener whitelist (8 active Gardeners) ✓
- Proof of Work (PoW) visual history heatmap ✓

**Ecosystem Trends Informing Development:**
- Lightning zap integration (82.5% user adoption)
- Community-based infrastructure (NIP-72, NIP-43)
- Media handling standardization (NIP-68, NIP-96, Blossom)
- Creator monetization as primary use case

**Planned (High Priority):**
- Compost Heap (community moderation quarantine)
- Lightning Watering Can (enhanced zap experience)
- Touch Grass Mode (attention management)
- Feed-to-Gallery deep linking

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Market Context & Opportunity](#market-context--opportunity)
3. [Product Vision & Philosophy](#product-vision--philosophy)
4. [User Personas & Journey](#user-personas--journey)
5. [Product Features & Requirements](#product-features--requirements)
6. [Technical Architecture](#technical-architecture)
7. [Success Metrics & KPIs](#success-metrics--kpis)
8. [Roadmap & Phasing](#roadmap--phasing)
9. [Risks & Mitigations](#risks--mitigations)
10. [Appendix](#appendix)

---

## 1. MARKET CONTEXT & OPPORTUNITY

### 1.1 The Problem Space

**Centralized Social Media Pain Points:**
- **Censorship:** Arbitrary bans, shadowbans, algorithmic suppression
- **Data Exploitation:** Your content trains their AI, sells their ads
- **Platform Risk:** API changes, shutdowns, acquisitions (remember Flickr?)
- **Identity Lock-in:** Your followers, your history — all trapped in corporate silos
- **Algorithmic Manipulation:** Feeds optimized for engagement addiction, not joy
- **Ad-Driven Degradation:** Quality content buried under sponsored posts

**Specific to Photo/Nature Communities:**
- Instagram's pivot to video deprioritizes photography
- Flickr's decline left nature photographers without a quality home
- Reddit r/earthporn and similar communities are moderation-heavy and centralized
- iNaturalist is scientific, not aesthetic/celebratory
- No existing platform combines: decentralization + curation + nature focus + crypto-native incentives

### 1.2 The Nostr Opportunity

**What is Nostr?**

Nostr (Notes and Other Stuff Transmitted by Relays) represents a fundamental shift in decentralized communication infrastructure. Unlike blockchain-based alternatives or federated systems, Nostr achieves censorship resistance through radical simplicity: cryptographic key pairs for identity, signed events for content, and relay servers for distribution.

**How Nostr Works:**

1. **Identity Through Public Keys:** Every user is identified by a public key ("npub"). No registration, no username approval, no central authority can revoke accounts. Identity is portable across all Nostr clients.

2. **Events as Universal Data:** All content flows through JSON "events" - posts, profiles, reactions, messages. Each event is cryptographically signed, preventing tampering.

3. **Relays for Distribution:** Simple WebSocket servers that receive, store, and distribute events. Unlike blockchains, relays don't need consensus. Users can publish to multiple relays simultaneously and switch without losing identity.

4. **Network Effect Without Platform:** The network effect belongs to the protocol, not any single app. Users switch between clients (Damus, Primal, Amethyst) while maintaining identity, follows, and content.

**Current Ecosystem Metrics (2026):**
- ~40,000 weekly active users (growing steadily)
- 33.5+ million registered public keys
- $10M+ funding from Jack Dorsey (2023-2025)
- Mature client ecosystem across web, iOS, Android

**Key Nostr Concepts:**

- **NIPs (Nostr Implementation Possibilities):** Extensible standards framework (similar to Bitcoin BIPs). Currently 100+ NIPs covering everything from basic messaging to Lightning payments to communities.

- **Relays:** Decentralized distribution infrastructure. Users typically connect to 5-15 relays simultaneously for redundancy and censorship resistance.

- **Lightning Integration:** Native Bitcoin micropayments ("zaps") enable instant creator monetization without platform cuts or minimum withdrawals.

- **Cryptographic Sovereignty:** Users own their keys = users own their identity. No password resets, no account recovery, no corporate control.

**Why This Matters for NostrGardn:**

1. **Structural Censorship Resistance:** No central server to shut down, no governance body to pressure. Content exists on multiple relays simultaneously.

2. **Native Monetization:** 82.5% of Nostr users have Lightning addresses. Photographers can receive tips instantly without platform intermediaries taking cuts.

3. **Data Portability:** Content and identity travel with users. If NostrGardn disappeared tomorrow, photographers retain their audience and content.

4. **Cross-Client Compatibility:** Photos posted via NostrGardn appear in Damus, Primal, Amethyst, and all Nostr clients - instant distribution network.

5. **Developer-Friendly:** Simple protocol enables rapid innovation. New features can be tested and deployed without breaking existing clients.

### 1.3 Competitive Landscape

**Direct Competitors (Photo-Focused):**
- Instagram (centralized, algorithm-driven, corporate)
- Flickr (declining, Web 2.0 relic, limited engagement)
- Glass (photographer-focused, subscription model, centralized)
- Pixelfed (ActivityPub/Fediverse, decentralized but different protocol)

**Nostr-Native Competitors:**
- Primal (general-purpose Nostr client with image support)
- Nostrgram (Instagram clone on Nostr, not curated)
- Snort (Nostr client with media support)

**Unique Positioning:**
NostrGardn is the **only** curated, nature-focused, cypherpunk-spirited photo community on Nostr (or anywhere). We combine:
1. **Curation** (quality over chaos)
2. **Decentralization** (protocol over platform)
3. **Nature** (grounding beauty as counterweight to digital anxiety)
4. **Whimsy** (dad-joke energy meets cypherpunk ethos)

### 1.4 Market Opportunity

**Target Market Size:**
- Nostr active users: [RESEARCH DATA NEEDED]
- Nature photography enthusiasts: ~50M globally (estimated)
- Overlap: Early adopters, tech-savvy nature lovers, Bitcoin/crypto community

**Market Timing:**
- Nostr ecosystem maturing (2024-2026 growth phase)
- Instagram fatigue among photographers
- Rising interest in decentralized social alternatives
- Lightning Network adoption increasing (enables zaps)

**Strategic Advantages:**
- First-mover in curated Nostr photo communities
- Strong founding team with clear vision and technical capability
- Clear vision and unique voice
- Technical foundation already built

**Community Trends & Market Dynamics:**

The Nostr ecosystem is experiencing a creator renaissance driven by three converging trends:

**1. Lightning Network Adoption Surge (82.5% increase):**
User profiles with Lightning addresses increased 82.5% in the past year. This eliminates monetization friction - photographers can receive Bitcoin tips with zero platform fees, no minimum withdrawals, and instant settlement.

**2. Creator Content Explosion (800% growth):**
Public writing events surged 800% as creators migrate from centralized platforms. The "creator narrative" is the strongest adoption driver. Text creators now have mature platforms (Habla.news, YakiHonne) - visual creators are the next frontier.

**3. Community Infrastructure Maturation:**
Recent protocol upgrades (NIP-43 membership lists, NIP-72 Reddit-style communities) enable sophisticated community governance. The ecosystem is moving beyond pure open feeds toward community-curated spaces.

**Critical Market Gap Identified:**

Research across Reddit r/nostr, Medium articles, and community discussions reveals: **Nostr has failed to produce a coherent solution for handling media and large files.** This "relegates Nostr to a text-only medium for most users and severely limits its potential use cases."

Current fragmented solutions:
- **Nostr.build:** Free image uploader (centralized hosting risk)
- **Manual HTTP links:** Users upload elsewhere, paste URLs
- **No dominant photo-focused platform**

**This is NostrGardn's primary opportunity:** Photography and visual content have no dedicated, user-friendly infrastructure on Nostr. The gap is significant and widely acknowledged.

**User Pain Points Alignment:**

1. **Content Discovery Crisis:** New users face "empty feed" problem. Without algorithmic curation, quality content drowns in noise. The community recognizes this is fundamental to growth.

2. **Relay Fragmentation:** Users miss content if not connected to "right" relays. Community seeking solutions while preserving decentralization.

3. **UX Complexity Barrier:** Key management and technical setup prevent mainstream adoption, especially for visual creators less likely to be crypto-native.

**Community Sentiment on Curation:**

Critical finding: The community has evolved beyond "pure open feed vs. algorithmic curation" false binary. Winning consensus supports:
- **Client-level choice:** Users select which algorithms/curators to follow
- **Relay-based curation:** Relays curate for target audiences without central authority
- **Community ownership:** Communities set moderation policies (NIP-72)
- **Transparency:** Curation should be photographer-controlled, not black-box algorithmic

**NostrGardn positions perfectly here:** Curator-led, community-voted, transparent curation aligns with ecosystem values while solving the discovery problem.

---

## 2. PRODUCT VISION & PHILOSOPHY

### 2.1 Mission Statement

**We tend this virtual space to celebrate nature's thriving abundance through decentralized photo sharing.**

We believe beautiful things can grow in decentralized soil. NostrGardn proves that curation and freedom aren't opposites — you can have quality *and* sovereignty.

### 2.2 The Three Roots (Core Principles)

*Source: GARDEN_MANIFESTO.md*

#### 1. Curation Over Chaos
The open internet is beautiful but noisy. NostrGardn applies thoughtful curation — not algorithmic manipulation — to surface nature photography that inspires. Trusted Gardeners tend the feed. The community weeds out spam. Quality emerges organically.

**Product Implication:** Implement tiered trust model, not free-for-all posting.

#### 2. Decentralization as Default
No single server controls NostrGardn. Content flows through multiple relays. Identities are cryptographic keys, not email addresses owned by corporations. The garden cannot be shut down, censored, or sold to the highest bidder.

**Product Implication:** Build on Nostr protocol, use multiple relays, embrace data portability.

#### 3. Nature as North Star
In a world of doomscrolling and digital anxiety, NostrGardn offers a counterweight: the simple, grounding beauty of plants, landscapes, and living things. We believe that even on the internet, touching grass matters.

**Product Implication:** All features should celebrate nature, encourage presence, and reduce anxiety.

### 2.3 Brand Essence

**Tone of Voice:**
- Warm but not saccharine
- Technical but accessible
- Whimsical but grounded
- Cypherpunk with dad-joke energy

**Tagline Options:**
- *"Where notes and other stuff grow"* (Current)
- *"A curated garden on Nostr"*
- *"Decentralized beauty, naturally"*
- *"The protocol for photosynthesis"*
- *"Touch grass, on-chain"*

**Key Vocabulary:**
- Tend the garden
- Plant a post
- Water with zaps
- Compost the spam
- Fork the garden
- Touch grass

### 2.4 What NostrGardn Is NOT

To maintain focus, we explicitly state what we're NOT building:
- ❌ General-purpose social network (we're nature-focused)
- ❌ Unmoderated free-for-all (we curate)
- ❌ Advertising platform (we're user-funded via zaps)
- ❌ Data mining operation (we don't track, store, or sell user data)
- ❌ Walled garden (content is portable, exportable, forkable)

---

## 3. USER PERSONAS & JOURNEY

### 3.1 Primary Personas

#### Persona 1: The Master Gardener (Founder/Curator)
**Name:** Victor (vbonacci)
**Role:** Founder, primary curator, vision keeper
**Goals:**
- Build a beautiful, sustainable garden of nature content
- Prove decentralized curation can work
- Create a template for other Nostr communities

**Pain Points:**
- Spam management without centralized moderation tools
- Balancing growth with quality
- Finding and onboarding trusted Gardeners

**User Journey:**
1. Posts nature photos with full editorial control
2. Discovers and invites new Gardeners
3. Monitors feed quality and blocklist
4. Ships new features via SvelteKit updates

---

#### Persona 2: The Trusted Gardener (Whitelisted Contributor)
**Name:** stntstn (Station Master)
**Role:** Whitelisted community member, regular contributor
**Goals:**
- Share beautiful nature photography with appreciative audience
- Engage with like-minded community
- Earn zaps for quality contributions

**Pain Points:**
- Remembering to use `#gardn` tag for posts
- Understanding what content fits the garden
- Limited moderation power (can't directly block spam)

**User Journey:**
1. Discovers NostrGardn through Nostr ecosystem
2. Receives Gardener invitation from Master Gardener
3. Posts nature photos with `#gardn` tag
4. Receives zaps and community engagement
5. Eventually participates in Compost Heap voting (future)

---

#### Persona 3: The Enthusiastic Pleb (General Public)
**Name:** NatureNerd42 (random npub)
**Role:** Occasional contributor, Nostr user
**Goals:**
- Share cool nature photos with wider audience
- Get visibility without being whitelisted
- Potentially earn Gardener status

**Pain Points:**
- Text hidden (only images show)
- Unclear path to Gardener promotion
- Must use specific hashtag (`#nostrgardnpost`)

**User Journey:**
1. Discovers NostrGardn feed
2. Wants to contribute
3. Learns about `#nostrgardnpost` requirement
4. Posts images (text hidden, images shown)
5. Consistent quality → invitation to Gardener status

---

#### Persona 4: The Casual Visitor (Lurker)
**Name:** CuriousCarol
**Role:** Non-posting visitor, discovery mode
**Goals:**
- Enjoy beautiful nature content
- Learn about Nostr
- Escape algorithmic feeds

**Pain Points:**
- Doesn't understand Nostr initially
- No account needed, but limited engagement
- May not have Lightning wallet for zaps

**User Journey:**
1. Finds NostrGardn via web search or link
2. Browses feed without account
3. Inspired to learn more about Nostr
4. Sets up Nostr identity and wallet
5. Begins engaging (zaps, follows, eventually posts)

---

### 3.2 User Journey Maps

#### Journey A: Discovering the Garden (First Visit)
1. **Entry Point:** Web search, Nostr client, social link
2. **Landing Page:** Beautiful 4-image showcase, clear value prop
3. **Feed Exploration:** Scroll nature photos, see Gardener attributions
4. **Learning:** Click "What is Nostr?" / "How to contribute"
5. **Conversion:**
   - Low friction: Follow on Nostr client
   - Medium friction: Create Nostr identity
   - High friction: Set up Lightning wallet, send first zap

#### Journey B: Becoming a Gardener (Progression Path)
1. **Pleb Stage:** Post with `#nostrgardnpost`, images appear
2. **Consistency:** Post regularly, high-quality nature content
3. **Recognition:** Master Gardener notices, extends invitation
4. **Onboarding:** Receives Gardener privileges, learns `#gardn` tag
5. **Contribution:** Full posts appear, earns community trust
6. **Evolution:** Participates in governance (future: Compost Heap voting)

---

## 4. PRODUCT FEATURES & REQUIREMENTS

### 4.1 Current Features (Shipped)

#### 4.1.1 Tiered Access Hierarchy
**Status:** ✓ Shipped
**Source:** GARDEN_MANIFESTO.md

**Tiers:**
1. **👑 Master Gardener** (1 pubkey)
   - All posts displayed, no tag requirement
   - Full editorial control
   - All-access privileges

2. **🌿 Gardeners** (8 pubkeys, growing)
   - Posts displayed when tagged `#gardn`
   - Full text + images shown
   - Whitelisted, trusted contributors

3. **🌱 Plebs** (unlimited)
   - Posts displayed when tagged `#nostrgardnpost` + images
   - Images only (text hidden)
   - Open to all Nostr users

4. **🚫 Blocklist** (3 pubkeys, as needed)
   - Explicitly blocked spammers/bots
   - Content never displayed

**Technical Implementation:**
- Decision tree filter in `filters.ts`
- Pubkey whitelists in configuration
- Hashtag detection via NDK subscription

---

#### 4.1.2 Proof of Work (PoW) Visual History Heatmap
**Status:** ✓ Shipped (Jan 31, 2026)
**Source:** SEED_VAULT.md Feature 0
**Complexity:** Medium
**Cypherpunk Factor:** ⚡⚡⚡⚡

**Description:**
GitHub-style contributions graph showing daily photo activity. Each square represents a day; color intensity shows photo count. Click to see all photos from that day.

**Routes:**
- `/pow` — Main heatmap view with year selector
- `/pow/[year]/[month]/[day]` — Day-specific photo archive with lightbox

**Features:**
- 52-week × 7-day grid visualization
- Color intensity buckets (0, 1-2, 3-5, 6-8, 9+ photos)
- Hover tooltips with counts
- Lightbox gallery for full images
- GPS metadata stripped for privacy
- Optional diary entries per day

**Technical Stack:**
- Metadata: `pow-metadata.json` (pre-generated)
- Diary: `pow-diaries.json`
- GPS stripping: Python script with exiftool
- Date extraction: Filename parsing + EXIF validation

**Value Proposition:**
Visual proof of labor — celebrates consistency and care. Documentation without surveillance. Exportable, forkable concept.

---

#### 4.1.3 Core Feed & Display
**Status:** ✓ Shipped
**Features:**
- Reverse chronological feed
- Image lightbox expansion
- Author attribution with npub
- Relay connectivity (Damus, nos.lol, Primal)
- Responsive design (mobile/desktop)

---

### 4.2 Priority Features (Backlog)

*Source: SEED_VAULT.md — Prioritized by strategic value and feasibility*

---

#### 4.2.1 **HIGH PRIORITY:** Feed-to-Gallery Deep Linking
**Status:** 🌱 Seedling
**Source:** SEED_VAULT Feature 0.1
**Complexity:** Medium
**Strategic Value:** HIGH (connects Feed ↔ PoW gallery, cohesive UX)

**Description:**
Transform Feed from standalone experience to discovery mechanism linking to permanent PoW gallery. When users click Feed image, match it to hosted gallery and navigate to day's lightbox.

**How It Works:**
1. Parse image URL from Nostr event
2. Extract date and sequence number from filename (`IMG_YYYYMMDD_####.jpg`)
3. Check PoW metadata for match
4. Navigate to `/pow/YYYY/MM/DD` with optional image highlight
5. Fallback: open in current lightbox if no match

**UX Enhancements:**
- Visual badge on Feed images that have PoW matches
- Smooth transition animation
- Breadcrumb trail (Feed → PoW → Day)

**Technical Notes:**
- Regex: `/IMG_(\d{8})_(\d{4})\.\w+$/`
- Client-side matching against `pow-metadata.json`
- Handle external hosts (nostr.build, etc.)
- Edge cases: date mismatches, non-hosted images

**Success Metrics:**
- % of Feed images with PoW matches
- Click-through rate from Feed → PoW
- User session depth (browsing multiple days)

**Dependencies:**
- PoW gallery (✓ shipped)
- Metadata structure (✓ exists)

**Effort Estimate:** 2-3 days development

---

#### 4.2.2 **HIGH PRIORITY:** The Compost Heap (Community Moderation)
**Status:** 🌱 Seedling
**Source:** SEED_VAULT Feature 3, GARDEN_MANIFESTO hierarchy
**Complexity:** High
**Strategic Value:** HIGH (solves spam problem, engages community)

**Description:**
Quarantine zone for posts that don't meet criteria. Community votes to "water" (approve) or "weed" (reject). Transforms moderation into collaborative gardening.

**The Lifecycle:**
1. **Entry:** Pleb posts without proper tag → Compost Heap
2. **Review Window:** 24 hours for Gardener voting
3. **Threshold:** 5 net upvotes → blooms into main feed
4. **Decomposition:** Ignored/weeded posts deleted after 7 days

**Governance Model:**
- Only Gardeners can vote
- Master Gardener vote weight: 3x (TBD)
- Rate limit: 1 seed bomb per pleb per day (anti-spam)

**UI/UX:**
- `/compost` route with earthy brown aesthetic
- Pile-like layout (newest on top)
- "Water 💧" and "Weed 🥀" buttons with animations
- Countdown timer to decomposition
- Notification when your post blooms/decomposes

**Technical Implementation:**
- Vote tracking: Local storage + relay-based (NIP-25 reactions?)
- Bloom migration: Re-tag event or update filter
- Rate limiting by pubkey
- Scheduled cleanup job (decompose expired posts)

**Success Metrics:**
- Gardener participation rate in voting
- % of Compost posts that bloom vs. decompose
- Reduction in spam reaching main feed
- Time to moderation decision (avg hours in Compost)

**Dependencies:**
- Gardener whitelist (✓ exists)
- Voting mechanism (needs implementation)
- Scheduled jobs infrastructure

**Effort Estimate:** 1-2 weeks development

**Open Questions:**
- Store votes on-chain (Nostr events) or off-chain (database)?
- Should bloomed posts retain "bloomed from Compost" badge?
- Can plebs see voting results, or hidden until decision?

---

#### 4.2.3 **MEDIUM PRIORITY:** Lightning Watering Can (Enhanced Zaps)
**Status:** 🌱 Seedling
**Source:** SEED_VAULT Feature 6
**Complexity:** Medium
**Strategic Value:** MEDIUM-HIGH (increases engagement, showcases Lightning)

**Description:**
Reimagine zap button as watering can. Rain animation intensity scales with sats sent. Thunderstorm at 21K sats.

**Zap Tiers:**
| Sats | Animation | Sound |
|------|-----------|-------|
| 1-99 | 💧 Light drizzle | Soft patter |
| 100-999 | 🌧️ Steady rain | Rain sounds |
| 1K-9,999 | ⛈️ Heavy rain + puddles | Thunder rumble |
| 10K-20,999 | 🌊 Downpour + flooding | Thunder |
| 21K+ | ⚡ THUNDERSTORM | ASCII lightning, screen flash |

**Interactions:**
- Watering can icon tilts on click
- Water arcs from can to post
- Rain accumulates on image (CSS filter)
- Thunderstorm triggers confetti-style lightning
- Post "glistens" after watering

**Technical Implementation:**
- NIP-57 zap integration (already supported)
- CSS animations for rain effects
- Canvas/SVG for lightning bolts
- Zap amount detection from event
- Cache recent zap totals per post

**Success Metrics:**
- Total zaps sent (volume)
- Average zap amount
- % of users who send first zap after feature launch
- Viral sharing of thunderstorm videos

**Dependencies:**
- Lightning wallet integration in Nostr clients (user-side)
- NIP-57 support (✓ already implemented)

**Effort Estimate:** 1 week development

---

#### 4.2.4 **MEDIUM PRIORITY:** Touch Grass Mode
**Status:** 🌱 Seedling
**Source:** SEED_VAULT Feature 5
**Complexity:** Low
**Strategic Value:** MEDIUM (brand alignment, wellness feature)

**Description:**
Client-side setting that pauses feed after configurable duration (default: 15 min) with gentle lockout message:

> *"The garden will still be here. Go outside."*

**Lockout Screen Features:**
- Sundial countdown timer
- Random nature fact or quote
- Photo from garden (user's own posts if available)
- "I touched grass" override button with nature captcha

**Settings:**
- Enable/disable Touch Grass Mode
- Duration before lockout (5/15/30/60 min)
- Lockout duration (5/15/30 min)
- Hardcore mode: no override button

**Technical Implementation:**
- Pure client-side (localStorage)
- Session tracking timer
- Service worker for lockout enforcement (optional)
- No server component

**Success Metrics:**
- % of users who enable feature
- Average session length before/after adoption
- Social media mentions (meme potential)

**Dependencies:** None

**Effort Estimate:** 2-3 days development

---

#### 4.2.5 **LOW PRIORITY:** Main Page Image Curation System
**Status:** 🌰 Seed
**Source:** SEED_VAULT Feature 0.2
**Complexity:** Medium
**Strategic Value:** LOW-MEDIUM (improves landing page, on-chain curation)

**Description:**
Replace static 4-image showcase with dynamic, Nostr-powered curation. Use Nostr event tags to mark images as "featured."

**Implementation Options:**
1. **Tag-based:** Custom tag `["featured", "home"]`
2. **Rating system:** `["rating", "5"]` for favorites
3. **Seasonal:** `["season", "spring"]` for themes

**Display Options:**
- Random 4 from featured pool
- Rotation on timer
- Seasonal filtering
- Most zapped featured images
- Recent additions

**Curation Interface:**
- Admin route `/curate` for Master Gardener
- Or manage from any Nostr client (fully decentralized)
- Future: Gardener voting on featured images

**Technical Implementation:**
- Fetch events with custom tag filter
- Parse image URLs
- Client-side cache
- Optional: Pre-generate metadata JSON

**Success Metrics:**
- Freshness of landing page (days since last update)
- Conversion rate (visitor → Nostr identity created)

**Dependencies:**
- Custom tag convention (needs definition)

**Effort Estimate:** 3-5 days development

---

#### 4.2.6 **LOW PRIORITY:** Proof of Photosynthesis Verification Badge
**Status:** 🌰 Seed
**Source:** SEED_VAULT Feature 1
**Complexity:** Medium
**Strategic Value:** LOW (nice-to-have gamification)

**Description:**
Living verification badge that grows based on zaps received.

**Badge Tiers:**
- 0-20 zaps: 🌱 Seedling
- 21-68 zaps: 🌳 Sapling
- 69+ zaps: 🌺 Full Bloom (with particle effects)

**Technical Implementation:**
- Track zap events (NIP-57) per post
- Client-side badge state computation
- CSS animations for particles

**Success Metrics:**
- Engagement with badge feature
- Zap volume increase

**Dependencies:**
- Zap tracking infrastructure

**Effort Estimate:** 3-4 days development

---

#### 4.2.7 **MEDIUM PRIORITY:** Gardener Profile Pages
**Status:** 🌰 Seed
**Source:** PRD v1.1 Addition
**Complexity:** Medium
**Strategic Value:** MEDIUM-HIGH (deepens Gardener investment, supports multi-user evolution)

**Description:**
Lightweight profile page for each Trusted Gardener, accessible at `/gardener/[npub]`. Extends the per-Gardener photo roll concept (see Phase 3) with identity and reputation context, giving each Gardener a sense of place in the garden.

**Profile Elements:**
- **Identity:** Display name, NIP-05 verification badge, avatar (from Nostr profile metadata, Kind 0)
- **Stats Dashboard:** Total posts, total zaps received, longest posting streak, member-since date
- **Photo Roll:** Personal PoW-style heatmap of their contributions (reuses `/pow` component architecture)
- **Recent Posts:** Latest 6-12 photos in grid layout
- **Zap Button:** Water this Gardener directly (profile-level zap via NIP-57)

**UX Flow:**
1. Click Gardener name/avatar anywhere in the feed
2. Navigate to `/gardener/[npub]`
3. Profile loads from Nostr relay data (Kind 0 profile + filtered Kind 1/20 events)
4. Visitor can browse their history, zap, or follow via Nostr client

**Technical Implementation:**
- Dynamic route: `/gardener/[npub]` in SvelteKit
- Fetch Kind 0 (profile) + Kind 1/20 (posts) events filtered by pubkey
- Reuse PoW heatmap component with per-pubkey data source
- NIP-05 verification check via `/.well-known/nostr.json` lookup
- Client-side caching of profile data (localStorage with TTL)

**Success Metrics:**
- Profile page visits per Gardener per week
- Gardener retention lift (do Gardeners with active profiles post more?)
- Profile-level zap volume
- New follows generated from profile pages

**Dependencies:**
- Per-Gardener photo rolls (Phase 3)
- NIP-05 verification support

**Effort Estimate:** 3-5 days development (after photo roll infrastructure exists)

---

#### 4.2.8 **MEDIUM PRIORITY:** Featured Gardeners Discovery Carousel
**Status:** 🌰 Seed
**Source:** PRD v1.1 Addition
**Complexity:** Low-Medium
**Strategic Value:** MEDIUM-HIGH (solves empty-feed problem, showcases multi-user model, improves conversion)

**Description:**
A "Featured Gardeners" carousel on the landing page that introduces visitors to the community's active contributors. Serves double duty: solving the Nostr "empty feed" discovery problem for new visitors and demonstrating that NostrGardn is a living, multi-voice garden — not a single-person blog.

**Carousel Elements (per Gardener card):**
- Avatar + display name
- NIP-05 domain (if verified)
- 1-3 recent photos (thumbnail grid or hero image)
- Brief bio snippet (first ~80 chars of profile bio)
- Zap count or posting streak badge
- "Visit Garden →" link to `/gardener/[npub]`

**Display Options:**
- Horizontal scroll carousel (mobile-friendly)
- Auto-rotation with pause on hover/touch
- Randomized order on each page load (fair exposure)
- Manual curation option: Master Gardener can pin/feature specific Gardeners

**Onboarding Integration:**
- Below the carousel: "Want to grow here?" CTA with brief explanation of how to become a Gardener
- Links to Nostr onboarding resources (key generation, client setup)
- Quick-start guide for posting with `#nostrgardnpost`

**Technical Implementation:**
- Fetch Kind 0 profiles for all Gardener pubkeys (from existing whitelist)
- Fetch most recent Kind 1/20 events per Gardener for thumbnail images
- Client-side carousel component (CSS scroll-snap or lightweight library)
- Pre-fetch on landing page load (parallel with feed data)
- Graceful degradation: static grid fallback if JS disabled

**Success Metrics:**
- Landing page bounce rate reduction
- Click-through rate from carousel → Gardener profiles
- New Nostr identity creation referrals (tracked if possible)
- Time on site for first-time visitors

**Dependencies:**
- Gardener Profile Pages (4.2.7) for link targets
- Gardener whitelist (✓ exists)

**Effort Estimate:** 2-3 days development

---

### 4.3 Future/Experimental Features

*Ideas from SEED_VAULT.md that need further refinement before prioritization*

- **Relay Greenhouse Dashboard** (Feature 2) — Visualize relay health as plants
- **Encrypted Garden Gnome DMs** (Feature 4) — NIP-04 DMs with whimsical UI
- **NIP-05 Botanical Classification** (Feature 7) — Latinized identity verification
- **Fork the Garden Export** (Feature 8) — JSON/Markdown/IPFS export
- **Sprouts** (from gemini-20260126.txt) — Time-lapse video feature
- **AI Image Filtering** — Automatic nature classification
- **Private Gardener Relay** (relay.1in7.com)
- **Seasonal UI Themes**
- **Gardener Leaderboard**

---

## 5. TECHNICAL ARCHITECTURE

### 5.1 Current Stack

**Frontend:**
- **Framework:** SvelteKit 1.x with TypeScript
- **Build:** Vite 4.x, adapter-static (SPA mode)
- **Styling:** Custom CSS (app.css)
- **Deployment:** GoDaddy static hosting

**Nostr Integration:**
- **Library:** NDK (Nostr Development Kit) 0.8.19
- **NIPs Implemented:** 01, 05, 25, 57

**Relay Configuration:**
- Content: `wss://relay.damus.io`, `wss://nos.lol`, `wss://relay.primal.net`
- Discovery: `wss://purplepag.es`, `wss://relay.nos.social`

**Data Pipeline:**
```
Nostr Relays → NDK Subscription → Decision Tree Filter (filters.ts) → Sorted Feed → Display
```

### 5.2 NIPs Reference

**Core NIPs for NostrGardn Implementation**

#### **NIP-01: Basic Protocol Flow** (CRITICAL)
Foundation for all Nostr interactions. Defines event structure, WebSocket communication, and relay queries.

**Event Structure:**
- `id` - SHA256 hash (32-byte hex)
- `pubkey` - Author's public key (32-byte hex)
- `created_at` - Unix timestamp
- `kind` - Event type integer (0-65535)
- `tags` - Metadata arrays
- `content` - String content
- `sig` - Schnorr signature

**Relevant Event Kinds:**
- Kind 0: User profiles (name, bio, avatar)
- Kind 1: Text notes (captions, comments)
- Kind 3: Contact lists (following)
- Kind 7: Reactions (NIP-25)
- Kind 20: Picture-first posts (NIP-68)
- Kind 1063: File metadata (NIP-94)

---

#### **NIP-68: Picture-First Feeds** (CRITICAL)
Specifically designed for Instagram-like platforms where images are primary content.

**Implementation:**
- Uses **event kind 20** for photo posts
- Images hosted externally, referenced via `imeta` tags
- Supports multiple images per post (carousel)
- NostrGardn should use kind 20 as primary post type

**Why This Matters:**
Ensures NostrGardn photos appear natively in other photo-focused Nostr clients, establishing ecosystem compatibility.

---

#### **NIP-92: Media Attachments** (CRITICAL)
Provides rich metadata for images and videos via `imeta` tags.

**Metadata Fields:**
- `url` - Image URL (required)
- `m` - MIME type (e.g., "image/jpeg")
- `dim` - Dimensions ("3024x4032")
- `blurhash` - Progressive loading hash
- `x` - SHA-256 integrity hash
- `alt` - Accessibility text
- `fallback` - Backup URL

**NostrGardn Strategy:**
Generate `imeta` tags for every upload including dimensions, MIME type, blurhash, and SHA-256 hash for integrity verification.

---

#### **NIP-94: File Metadata** (HIGH PRIORITY)
Defines **event kind 1063** for file organization and discovery.

**Use Cases:**
- Create kind 1063 events for uploaded photos
- Enable filtering by characteristics (dimensions, file size)
- Support album/gallery organization
- Relay-level content indexing

---

#### **NIP-96: HTTP File Storage Integration** (HIGH PRIORITY)
REST API standard for Nostr-compatible file servers.

**Endpoints:**
- `POST /upload` - Upload files with metadata
- `GET /<sha256>` - Retrieve by hash
- `DELETE /<sha256>` - Remove (authenticated)

**Authentication:** NIP-98 HTTP Auth (signed events)

**NostrGardn Integration:**
- Use existing NIP-96 servers (nostr.build, nostrmedia.com)
- Support multi-server uploads for redundancy
- Automatic failover between servers

**Alternative: Blossom Protocol** (Emerging)
Next-gen blob storage with:
- Content-addressable (SHA-256 hash)
- Automatic mirroring
- Built-in metadata stripping (privacy)
- Growing adoption (Primal, others)

**Recommendation:** Support both NIP-96 and Blossom for maximum compatibility.

---

#### **NIP-25: Reactions** (CRITICAL)
Enables likes, emoji reactions, and engagement.

**Technical:**
- **Event kind 7** for reactions
- Content: "+" (like), "-" (dislike), or emoji
- Required tags: `e` (event ID), `p` (author pubkey)

**NostrGardn Implementation:**
- Default "like" button ("+")
- Emoji picker for diverse reactions
- Aggregate reaction counts from multiple relays

---

#### **NIP-57: Lightning Zaps** (CRITICAL)
Revolutionary monetization - instant Bitcoin tips tied to content.

**How Zaps Work:**
1. User clicks ⚡ on photo
2. Client creates **kind 9734** zap request
3. LNURL server generates Lightning invoice
4. User pays via wallet (instant, minimal fees)
5. Wallet publishes **kind 9735** zap receipt to relays
6. Publicly visible proof of value exchange

**NostrGardn Integration:**
- Prominent zap buttons on all photos
- Display total sats zapped
- Creator earnings dashboard
- Top-zapped photos discovery feed
- Optional zap-to-view (Zapwall) for premium content

**Wallet Support:**
- Alby, Wallet of Satoshi, Zeus
- NWC (Nostr Wallet Connect) for seamless UX

---

#### **NIP-05: DNS-Based Identity** (HIGH PRIORITY)
Maps Nostr keys to human-readable identifiers.

**Implementation:**
- User claims `username@domain.com`
- Domain hosts `/.well-known/nostr.json` with pubkey mapping
- Clients verify and display checkmark

**NostrGardn Strategy:**
- Offer free `@nostrgardn.com` verification
- Support custom domain verification (premium)
- Display verification badges
- Prioritize verified accounts in discovery

---

#### **NIP-17: Private Direct Messages** (MEDIUM PRIORITY)
Modern encrypted DM standard (replaces deprecated NIP-04).

**Features:**
- Uses NIP-44 encryption (ChaCha20, not AES)
- NIP-59 gift wrap (hides sender/receiver metadata)
- Three-layer protection: rumor → seal → gift wrap

**NostrGardn Use Cases:**
- Private photo sharing between users
- Encrypted portfolio critique
- Private shared albums

**Implementation:** Use NIP-17 (includes NIP-44 + NIP-59) for all private messaging. **Never use NIP-04** (deprecated, insecure).

---

#### **NIP-72: Moderated Communities** (HIGH PRIORITY)
Reddit-style topic communities with curation.

**Structure:**
1. **Kind 34550:** Community definition (moderators, rules)
2. **Regular events** with `a` tag referencing community
3. **Kind 4550:** Moderator approval events

**NostrGardn Use Cases:**
- Genre communities ("Landscape Photography," "Portraits")
- Location communities ("Tokyo Street Scenes")
- Challenge communities ("Weekly Photo Challenge")
- Critique communities (portfolio reviews)

**Challenge:** Inactive moderators can stagnate communities.

**Solution:**
- Multi-moderator voting system
- Auto-approval threshold
- Community takeover for abandoned spaces

---

#### **NIP-51: Lists (Bookmarks, Collections)** (MEDIUM PRIORITY)
Create arbitrary lists of events, people, or content.

**List Types:**
- **Kind 10000:** Mute list
- **Kind 10001:** Pinned posts
- **Kind 10003:** Bookmarks
- **Kind 30001:** Categorized bookmarks

**NostrGardn Applications:**
- Photo collections ("Inspiration Board")
- Organized bookmarks by theme
- Public shareable galleries
- Private research collections (encrypted via NIP-44)

---

#### **NIP-23: Long-Form Content** (LOW PRIORITY)
**Kind 30023** for articles/blog posts in Markdown.

**Use Cases:**
- Photo essays with narrative
- Behind-the-scenes stories
- Portfolio presentations
- Technical tutorials

---

#### **NIP-32: Labeling & Categorization** (MEDIUM PRIORITY)
Flexible labeling for organizing content.

**Implementation:**
- **Kind 1985:** Label events
- `L` tags: Define namespace
- `l` tags: Individual labels

**Photography Namespaces:**
- `photography.genre` (portrait, landscape, street)
- `photography.technique` (long-exposure, HDR)
- `photography.equipment` (camera, lens)
- `content.rating` (NSFW warnings)

---

#### **NIP-58: Badges** (LOW PRIORITY)
Achievement and recognition system.

**Structure:**
- **Kind 30009:** Badge definition
- **Kind 8:** Badge award

**NostrGardn Badges:**
- "First Photo Posted"
- "Photo of the Month"
- "100 Followers"
- "Editor's Pick"

---

#### **NIP-42: Relay Authentication** (MEDIUM PRIORITY)
Enables access control and premium features.

**Use Cases:**
- Private relay for premium users
- Zap-gated content access
- Rate limiting (higher limits for authenticated)
- Analytics tracking

---

**Technical Constraints & Considerations:**

1. **Event Size Limits:** Most relays limit events to 64KB-1MB. Solution: External image hosting (NIP-96/Blossom) + URL references.

2. **Relay Fragmentation:** Users miss content if not on "right" relays. Solution: Connect to 5-15 relays, run official NostrGardn relay.

3. **Image Optimization:** No protocol-level standards. NostrGardn must implement multi-resolution strategy (thumbnail 400px, preview 1200px, full 2400px).

4. **Bandwidth Management:** Photo-heavy feeds consume significant data. Solutions: Adaptive quality, data saver mode, WiFi-only uploads.

5. **Content Moderation:** Censorship resistance creates challenges. Approach: Client-side filtering, community labels (NIP-32), relay-level baseline moderation.

### 5.3 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    NostrGardn Client (SvelteKit)            │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Landing     │  │   Feed       │  │   PoW        │    │
│  │  Page        │  │   Route      │  │   Heatmap    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                           │                                │
│                    ┌──────▼──────┐                        │
│                    │     NDK      │                        │
│                    │   (v0.8.19)  │                        │
│                    └──────┬──────┘                        │
└───────────────────────────┼─────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
        ┌─────▼────┐  ┌────▼─────┐ ┌────▼─────┐
        │ relay.   │  │ nos.lol  │ │ relay.   │
        │ damus.io │  │          │ │ primal   │
        └──────────┘  └──────────┘ └──────────┘
              │             │             │
              └─────────────┼─────────────┘
                            │
                    ┌───────▼────────┐
                    │  Nostr Network │
                    │  (Events/Keys) │
                    └────────────────┘
```

### 5.4 Data Models

#### Nostr Event Structure (Kind 1 - Text Note)
```json
{
  "id": "<event id>",
  "pubkey": "<author pubkey>",
  "created_at": <unix timestamp>,
  "kind": 1,
  "tags": [
    ["e", "<event id>", "<relay url>"],
    ["p", "<pubkey>"],
    ["t", "gardn"],  // or "nostrgardnpost"
    ["imeta", "url <image url>", "dim 1200x800"]
  ],
  "content": "Beautiful sunset at the beach 🌅 #gardn",
  "sig": "<signature>"
}
```

#### Decision Tree Filter Logic
```typescript
function shouldDisplayPost(event: NostrEvent): DisplayMode {
  const pubkey = event.pubkey;
  const tags = event.tags.map(t => t[1]);

  // Check blocklist first
  if (BLOCKLIST.includes(pubkey)) return DisplayMode.REJECT;

  // Master Gardener: all posts, full display
  if (pubkey === MASTER_GARDENER_PUBKEY) return DisplayMode.FULL;

  // Gardeners: full display if tagged #gardn
  if (GARDENER_PUBKEYS.includes(pubkey)) {
    return tags.includes('gardn') ? DisplayMode.FULL : DisplayMode.REJECT;
  }

  // Plebs: image-only if tagged #nostrgardnpost + has images
  if (tags.includes('nostrgardnpost') && hasImages(event)) {
    return DisplayMode.IMAGE_ONLY;
  }

  // Default: reject (future: Compost Heap)
  return DisplayMode.REJECT;
}
```

### 5.5 Performance Considerations

- **Lazy Loading:** Images load on scroll (intersection observer)
- **Metadata Caching:** PoW metadata pre-generated, served statically
- **Relay Redundancy:** Multiple relays prevent single point of failure
- **Client-Side Filtering:** Reduces server load (pure static site)
- **GPS Stripping:** Privacy-preserving EXIF metadata removal

### 5.6 Security & Privacy

- **Self-Sovereign Identity:** Users own their keys (Nostr protocol)
- **No User Data Collection:** No analytics, tracking, or server-side storage
- **GPS Metadata Removal:** All served images stripped of location data
- **Content Addressing:** Images referenced by URL, not stored on NostrGardn servers
- **Encrypted DMs:** NIP-04/44 for private messaging (future)

### 5.7 Infrastructure Requirements

**Current (Static Hosting):**
- GoDaddy static file hosting
- No backend servers
- No databases
- CDN via GoDaddy

**Future Needs:**
- **Private Relay:** `wss://relay.1in7.com` (Gardener-only sync)
- **Metadata Generation:** Automated PoW metadata pipeline
- **Compost Heap:** Vote tracking (relay-based or minimal DB)

---

## 6. SUCCESS METRICS & KPIs

### 6.1 North Star Metric

**Active Gardeners Contributing Weekly**

This measures community health, quality content flow, and platform stickiness. If Gardeners aren't posting, the garden wilts.

### 6.2 Key Performance Indicators (KPIs)

#### Engagement Metrics
- **Weekly Active Gardeners:** # of Gardeners posting with `#gardn` tag per week
- **Weekly Active Plebs:** # of unique plebs posting with `#nostrgardnpost` per week
- **Total Posts Per Week:** Volume of accepted posts (main feed)
- **Zap Volume:** Total sats zapped per week (engagement & monetization)
- **Average Zaps Per Post:** Quality indicator

#### Growth Metrics
- **New Nostr Identities Created:** Users inspired to join Nostr (tracked via referrals if possible)
- **Gardener Invitations:** Rate of whitelisting new Gardeners
- **Follower Growth:** Nostr follows of Master Gardener pubkey (proxy for brand reach)
- **Traffic:** Weekly unique visitors to nostrgardn.com

#### Quality Metrics
- **Spam Rate:** % of posts entering Compost Heap (once implemented)
- **Compost Bloom Rate:** % of Compost posts approved by community
- **Blocklist Size:** # of pubkeys blocked (lower is better if spam prevention works)

#### Retention Metrics
- **Gardener Retention:** % of Gardeners posting in month N who post in month N+1
- **Repeat Visitors:** % of visitors returning within 30 days

### 6.3 Success Criteria by Phase

#### Phase 2: Growth (6-12 months)
- ✅ 15+ active Gardeners posting weekly
- ✅ 50+ active Plebs posting monthly
- ✅ 10K+ sats zapped per week
- ✅ Compost Heap operational with 80%+ Gardener participation
- ✅ 5K+ monthly unique visitors

#### Phase 3: Bloom (12-24 months)
- ✅ 30+ active Gardeners
- ✅ 200+ active Plebs
- ✅ 50K+ sats zapped per week
- ✅ Private relay operational
- ✅ 20K+ monthly unique visitors
- ✅ Featured in Nostr ecosystem as case study

#### Phase 4: Perennial (24+ months)
- ✅ Self-sustaining community governance
- ✅ Gardener council elected
- ✅ Template forked by 3+ other curated communities
- ✅ Documented in NIPs or protocol extensions
- ✅ 50K+ monthly unique visitors

---

## 7. ROADMAP & PHASING

*Source: GARDEN_MANIFESTO.md vision + SEED_VAULT prioritization*

### Phase 1: Foundation ✓ COMPLETE (2025-Early 2026)
- ✅ Core filtering and display logic
- ✅ Tiered access hierarchy
- ✅ Basic feed and landing page
- ✅ Gardener whitelist
- ✅ PoW visual history heatmap
- ✅ GPS metadata privacy protection

**Status:** Shipped. NostrGardn is live at nostrgardn.com.

**Transition:** Additional bug fixes and minor enhancements are in progress before Phase 2 features begin. These are tracked separately outside this PRD.

---

### Phase 2: Growth (Q1-Q2 2026)

**Objective:** Increase engagement, solve spam, connect Feed ↔ PoW.

#### Q1 2026 (Jan-Mar)
**Priority 1: Feed-to-Gallery Deep Linking**
- Connect Feed images to PoW gallery
- Visual badges for linked content
- Smooth transition UX
- **Effort:** 2-3 days
- **Impact:** HIGH (cohesive user journey)

**Priority 2: Compost Heap (Community Moderation)**
- `/compost` route and UI
- Gardener voting mechanism
- Bloom/decompose lifecycle
- **Effort:** 1-2 weeks
- **Impact:** HIGH (solves spam, engages community)

#### Q2 2026 (Apr-Jun)
**Priority 3: Lightning Watering Can**
- Enhanced zap animations
- Tiered rain effects
- Thunderstorm at 21K sats
- **Effort:** 1 week
- **Impact:** MEDIUM-HIGH (viral potential, engagement)

**Priority 4: Touch Grass Mode**
- Session timer and lockout
- Sundial UI
- Nature captcha override
- **Effort:** 2-3 days
- **Impact:** MEDIUM (brand alignment, wellness)

**Supporting Work:**
- Onboard 7+ new Gardeners (target: 15 total)
- Launch social media presence (Nostr-native announcements)
- Document API/integration guide for developers
- Begin design work for per-Gardener photo rolls (npub-based URLs)
- Wireframe Gardener Profile Pages and Featured Gardeners carousel

---

### Phase 3: Bloom (Q3 2026-Q2 2027)

**Objective:** Scale, polish, establish as ecosystem leader. Evolve from single-user photo blog to multi-user garden.

#### Q3-Q4 2026
- **Per-Gardener Photo Rolls** — Each Trusted Gardener gets their own PoW-style page at `/pow/[npub]`, showcasing their personal photo history. The Master Gardener's existing `/pow` page serves as the template. This transforms NostrGardn from a single-curator blog into a multi-voice garden.
- **Gardener Profile Pages** — Lightweight profiles at `/gardener/[npub]` with identity, stats, photo roll, and direct zap support. Makes each Gardener a first-class citizen of the garden.
- **Featured Gardeners Carousel** — Landing page discovery component showcasing active Gardeners with thumbnails, bios, and links to profiles. Solves the "empty feed" onboarding problem and demonstrates the multi-user model to new visitors.
- **Private Gardener Relay** (`wss://relay.1in7.com`)
- **Main Page Curation System** (dynamic featured images)
- **Mobile Optimization** (PWA, responsive enhancements)
- **Relay Greenhouse Dashboard** (relay health visualization)
- **Garden Analytics Dashboard** (growth metrics, engagement patterns)

#### Q1-Q2 2027
- **Federated Moderation Tools** (cross-community blocklists)
- **Cross-Pollination Initiatives** (partnerships with other Nostr communities)
- **NIP Proposals** (if new protocol features needed)
- **Proof of Photosynthesis Badge** (zap-based verification)

**Supporting Work:**
- Case studies and ecosystem presentations
- Developer documentation for forking the garden
- Gardener council formation

---

### Phase 4: Perennial (2027+)

**Objective:** Self-sustaining, community-governed, protocol-native.

- **Community-Elected Gardener Council** (governance handoff)
- **Protocol Improvements** (contribute to NIPs as needed)
- **Template for Curated Communities** (publish playbook)
- **Sustainability Model** (zap-based funding, sponsorships)

---

## 8. RISKS & MITIGATIONS

### 8.1 Technical Risks

#### Risk: Relay Instability
**Probability:** Medium
**Impact:** High
**Description:** If primary relays go down, feed stops updating.

**Mitigation:**
- Use multiple relays (currently 3 content, 2 discovery)
- Monitor relay health in Greenhouse Dashboard (future)
- Plan private relay for critical Gardener content
- Document relay failover procedures

---

#### Risk: NDK Breaking Changes
**Probability:** Low-Medium
**Impact:** Medium
**Description:** NDK library updates could break compatibility.

**Mitigation:**
- Pin NDK version in package.json
- Test upgrades in staging before production
- Monitor NDK GitHub for breaking change announcements
- Maintain fallback to direct WebSocket if needed

---

#### Risk: Image Host Failures
**Probability:** Medium
**Impact:** Medium
**Description:** External image hosts (nostr.build, etc.) may go down or change URLs.

**Mitigation:**
- Encourage Gardeners to use reliable hosts
- Document recommended image hosting options
- Consider IPFS pinning for critical images (future)
- PoW gallery uses local hosting (not affected)

---

### 8.2 Product/Market Risks

#### Risk: Nostr Adoption Stagnation
**Probability:** Medium
**Impact:** High
**Description:** If Nostr ecosystem doesn't grow, user pool stays limited.

**Mitigation:**
- Focus on quality over quantity (small passionate community is viable)
- Cross-promote with successful Nostr apps
- Create educational content about Nostr benefits
- Build features that work standalone (PoW gallery, Touch Grass Mode)

---

#### Risk: Spam Overwhelm
**Probability:** Medium-High
**Impact:** High
**Description:** Without Compost Heap, spam could flood main feed.

**Mitigation:**
- Prioritize Compost Heap implementation (Phase 2 Q1)
- Maintain active blocklist management
- Gardener involvement in moderation (distribute workload)
- Rate limiting on pleb posts

---

#### Risk: Gardener Turnover/Inactivity
**Probability:** Medium
**Impact:** Medium
**Description:** Gardeners lose interest or leave ecosystem.

**Mitigation:**
- Regular engagement with Gardeners (community calls, updates)
- Recognize contributions (highlight top posters, zap appreciation)
- Make participation rewarding (zaps, governance voting)
- Maintain pipeline of potential new Gardeners

---

### 8.3 Community/Governance Risks

#### Risk: Centralization Concerns
**Probability:** Low-Medium
**Impact:** Medium
**Description:** Community perceives Master Gardener as too centralized.

**Mitigation:**
- Communicate governance roadmap transparently
- Phase in community governance (Gardener council by Phase 4)
- Emphasize data portability (Fork the Garden feature)
- Document decision-making processes publicly

---

#### Risk: Content Quality Drift
**Probability:** Medium
**Impact:** Medium
**Description:** Feed becomes too general, loses nature focus.

**Mitigation:**
- Clear guidelines for Gardeners (nature-themed only)
- Active curation by Master Gardener
- Compost Heap voting ensures community alignment
- Regular feed audits and quality checks

---

### 8.4 Operational Risks

#### Risk: Founder Burnout
**Probability:** Medium
**Impact:** High
**Description:** Master Gardener becomes overwhelmed, development stalls.

**Mitigation:**
- Prioritize ruthlessly (focus on Phase 2 features only)
- Delegate moderation to Gardeners (Compost Heap)
- Document everything for potential contributors
- Build in breaks (Touch Grass Mode for the founder too!)

---

## 9. APPENDIX

### 9.1 Glossary

| Term | Meaning |
|------|---------|
| **Pubkey** | Public key — your Nostr identity (hex format) |
| **npub** | Human-readable pubkey format (starts with "npub1") |
| **Kind 1** | Nostr event type for text notes (posts) |
| **NIP** | Nostr Implementation Possibility — protocol standards |
| **Relay** | Server that stores and forwards Nostr events |
| **Zap** | Lightning Network micropayment via Nostr (NIP-57) |
| **NDK** | Nostr Development Kit — JavaScript library |
| **Gardener** | Trusted whitelisted contributor |
| **Pleb** | General public contributor |
| **Compost Heap** | Quarantine zone for community moderation |
| **Master Gardener** | Founder/primary curator (single pubkey) |
| **PoW** | Proof of Work — visual history heatmap feature |

### 9.2 Current Gardener Roster

| Name | Domain | Role | Pubkey |
|------|--------|------|--------|
| fibonacci | — | OG | [pubkey] |
| vbonacci (Victor) | agilecoffee.com | ☕️ Caffeine Supply | [pubkey] |
| stntstn | stationtostation.io | 🚉 Station Master | [pubkey] |
| hpwp (Will Paint) | havepaintwillpaint.com | 🎨 Artist in Residence | [pubkey] |
| angeliens | angeliens.com | 👽 Otherworldly Vibes | [pubkey] |
| 1in7 | — | 🎲 Statistical Anomaly | [pubkey] |
| Sophwrk | — | 🧒 Youth Ambassador | [pubkey] |
| Hakusui | — | 🌊 Eastern Currents | [pubkey] |

### 9.3 Relay Configuration

**Content Relays:**
- `wss://relay.damus.io` — Popular, reliable, general-purpose
- `wss://nos.lol` — Community favorite, good uptime
- `wss://relay.primal.net` — Primal ecosystem, fast

**Discovery Relays:**
- `wss://purplepag.es` — Relay list aggregator, profile discovery
- `wss://relay.nos.social` — Social graph, follows

**Planned:**
- `wss://relay.1in7.com` — Private Gardener relay (Phase 3)

### 9.4 Brand Assets

**Color Palette:**
- Primary: Garden Green (`#3AA182`)
- Background: Dark earth tones
- Accent: Warm amber (zaps, notifications)

**Compost Heap:**
- Earthy brown (`#6B4423`)
- Decomposing green (`#8B956D`)

**Typography:**
- [To be documented]

**Logo/Mark:**
- [To be documented]

### 9.5 External Resources

**Nostr Protocol:**
- Official site: https://nostr.com
- Use Nostr: https://usenostr.org/
- GitHub: https://github.com/nostr-protocol/nostr
- NIPs: https://github.com/nostr-protocol/nips

**Community:**
- r/nostr: https://www.reddit.com/r/nostr/
- Nostr Directory: https://nostr.directory/

**NostrGardn:**
- Website: https://nostrgardn.com
- Greenhouse Docs: `/greenhouse/` folder in repo

### 9.6 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 Draft | Feb 7, 2026 | Claude (Sonnet 4.5) | Initial PRD creation, research synthesized |
| 1.1 Revised | Feb 8, 2026 | Claude (Opus 4.6) | Corrected relay URL (wss://relay.1in7.com), removed Bonaccike/duobudo references, added single-user→multi-user evolution context, Phase 1→2 transition note, per-Gardener photo rolls in Phase 3, Gardener Profile Pages (4.2.7), Featured Gardeners Carousel (4.2.8) |

---

## NEXT STEPS

**For Development Team:**
1. Review and validate technical architecture section
2. Estimate effort for Phase 2 Q1 features
3. Set up project tracking (GitHub issues, kanban board)

**For Master Gardener:**
1. Review and approve PRD scope
2. Prioritize Phase 2 feature order
3. Identify any missing requirements

**For Community:**
1. Share PRD with Gardeners for feedback
2. Gather input on Compost Heap governance model
3. Recruit new Gardeners (target: 15 by Q2)

---

*"In the garden of decentralization, every seed contains a revolution."*

— The Greenhouse, est. 2026

---

## RESEARCH METHODOLOGY

This PRD was developed through:

1. **Foundation Analysis:** Deep review of GARDEN_MANIFESTO.md and SEED_VAULT.md
2. **Ecosystem Research:** Nostr protocol overview, client landscape, competitive positioning
3. **Technical Research:** NIPs analysis for photo-sharing requirements (20+ NIPs evaluated)
4. **Community Research:** Trends analysis via Reddit r/nostr, Medium articles, weekly recaps
5. **Strategic Synthesis:** Integration of all findings into cohesive product strategy

**Research Agents Deployed:**
- Ecosystem Overview Analyst (Nostr fundamentals, landscape)
- Technical Deep Dive Analyst (NIPs, implementation specs)
- Community Trends Analyst (user needs, market gaps, sentiment)

**Total Research Scope:** 80,000+ words of source analysis synthesized into actionable PRD sections.

---

**END OF DOCUMENT**

**Document Approvals:**

- [ ] Master Gardener (Victor) - Product Vision & Strategy
- [ ] Development Team - Technical Feasibility
- [ ] Gardener Community - Feature Prioritization (optional)

**Next Actions:**

1. **Review & Approve:** Master Gardener reviews complete PRD
2. **Feature Prioritization:** Confirm Phase 2 Q1 2026 priorities
3. **Technical Planning:** Development team estimates implementation effort
4. **Community Feedback:** Share with Gardeners for input on Compost Heap design
5. **Execution Launch:** Begin Phase 2 development (Feed-to-Gallery Deep Linking)

---

*"In the garden of decentralization, every seed contains a revolution."*

**Generated by:** Claude Sonnet 4.5 (Product Definition & Marketing Professional Mode)
**Revised by:** Claude Opus 4.6
**Collaboration:** Research squadron (3 specialist agents)
**Date:** February 7, 2026 (v1.0) / February 8, 2026 (v1.1)

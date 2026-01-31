# SEED VAULT
## NostrGardn Feature Backlog

**Last Updated:** January 26, 2026
**Curated By:** Claude (Opus 4.5) + The Master Gardener

> *"Every mighty oak was once a nut that held its ground."*

This document contains feature ideas — seeds waiting to be planted, nurtured, and eventually bloom into the garden. Some are practical. Some are whimsical. All are infused with cypherpunk spirit and dad-joke energy.

---

## Priority Legend

| Status | Meaning |
|--------|---------|
| 🌰 **Seed** | Raw idea, needs refinement |
| 🌱 **Seedling** | Defined, ready for implementation |
| 🌿 **Growing** | In development |
| 🌻 **Bloomed** | Shipped to production |
| 🥀 **Wilted** | Abandoned or superseded |

---

## THE SEEDS

---

### 0. Proof of Work (PoW) - Visual History Heatmap
**Status:** 🌿 Growing
**Complexity:** Medium
**Cypherpunk Factor:** ⚡⚡⚡⚡

**The Vision:**
A GitHub-style contributions graph showing the visual history of NostrGardn — a heatmap of daily photo activity over time. Each square represents a day; color intensity shows how many photos were taken. Visitors can browse different years, hover for counts, and click to see all photos from that specific day. It's proof-of-work made visible: the sweat equity in growing the garden, quantified and celebrated.

**How It Works:**
1. **Main Page (`/pow`)** — GitHub-style heatmap
   - Year selector dropdown (2018–2026)
   - 52-week × 7-day grid (rows = weekdays, columns = weeks)
   - Color intensity buckets: 0 (transparent), 1–2, 3–5, 6–8, 9+ photos
   - Hover tooltip shows photo count for that day
   - Click to navigate to day view

2. **Day View (`/pow/[year]/[month]/[day]`)** — Photo archive
   - Card grid showing all photos from that day (600px)
   - Lightbox for viewing full gallery images (1200px)
   - Space for optional diary entry (text-based reflection on the day)
   - Technical metadata: camera, ISO, aperture, shutter speed (if available)

**Garden-Themed Color Palette:**
- 0 photos: Transparent (unclickable)
- 1–2: #D4E8D4 Light sage (seedling stage)
- 3–5: #7DB77D Medium forest green (growing)
- 6–8: #2D5F2D Deep garden green (established)
- 9+: #E89B9B Blooming pink/mauve (celebrated!)

**Technical Implementation:**
- **Frontend:** SvelteKit routes + interactive heatmap component
- **Data:** Pre-generated `pow-metadata.json` (dates, EXIF specs, photo counts)
- **Diary Storage:** JSON file `pow-diaries.json` (for manual diary entries)
- **Privacy:** GPS location data stripped from all served images
- **Date Source:** Extracted from filenames (IMG_YYYYMMDD_####.jpeg), validated against EXIF DateTimeOriginal
- **Performance:** Single year's data loaded at a time (lazy-load other years)

**Current Status (Jan 31, 2026):**
- ✅ Metadata generation script complete (`generate_pow_metadata.py`)
- ✅ GPS stripping implemented (3,066 files processed)
- ✅ Metadata JSON files generated (pow-metadata.json, pow-diaries.json)
- ✅ Production GPS stripping plan documented (exiftool deployment approach)
- ⏳ SvelteKit routes (`/pow`, `/pow/[year]/[month]/[day]`)
- ⏳ Heatmap visualization component
- ⏳ Lightbox gallery integration
- ⏳ Mobile responsiveness

**Files Created:**
- `/scripts/generate_pow_metadata.py` — Metadata generator + GPS stripper
- `/docs/POW_GPS_STRIPPING_DEPLOYMENT_PLAN.md` — Production privacy protocol
- `/build/public/data/pow-metadata.json` — Indexed image metadata
- `/build/public/data/pow-diaries.json` — Diary entry template

**Why It's Great:**
This is the **visual proof of labor** — a celebration of consistency and care. The heatmap shows the invisible work of gardening: days of many photos represent prolific planting/harvesting; gaps show seasons of rest. It's documentation without surveillance, a calendar of seasons without centralized control. Every gardener can fork this concept for their own projects.

**Future Extensions:**
- Lighting conditions heatmap (ISO/exposure analysis)
- Equipment evolution timeline (iPhone model distribution)
- Seasonal patterns visualization
- Export functionality (download heatmap data, archive photos)
- Integration with diary entries for AI-powered photo summaries

---

### 1. Proof of Photosynthesis Verification Badge
**Status:** 🌰 Seed
**Complexity:** Medium
**Cypherpunk Factor:** ⚡⚡⚡

**The Vision:**
Forget the blue checkmark industrial complex. In the garden, trust is earned through sunlight and community engagement. Posts from Gardeners receive a living verification badge — a tiny seedling (🌱) that *grows* based on how much the community waters it with zaps.

**How It Works:**
- **0–20 zaps:** 🌱 Seedling — humble beginnings
- **21–68 zaps:** 🌳 Sapling — taking root in the community
- **69+ zaps:** 🌺 Full Bloom — with celebratory particle effects (petals falling, maybe some sparkles, you know the drill)

**Technical Notes:**
- Requires tracking zap events (NIP-57) per post
- Badge state could be computed client-side or cached
- Particle effects via CSS animations or a lightweight library
- The number 21 references Bitcoin's 21M cap; 69 is... well, you know

**Why It's Great:**
This is your trust layer — but *botanical*. It gamifies engagement without the toxicity of follower counts. A post with a blooming flower is a post the community has blessed. It's proof-of-work, but the work is *touching grass*.

---

### 2. The Relay Greenhouse Dashboard
**Status:** 🌰 Seed
**Complexity:** Medium-High
**Cypherpunk Factor:** ⚡⚡⚡⚡

**The Vision:**
A `/greenhouse` route that visualizes connected Nostr relays as potted plants in a digital conservatory. Each relay is a living organism — healthy connections are lush and green; flaky relays wilt dramatically and shed pixelated leaves.

**Relay-to-Plant Mapping (Examples):**
| Relay | Plant | Rationale |
|-------|-------|-----------|
| relay.damus.io | 🌻 Sunflower | Bright, popular, faces the sun |
| nos.lol | 🌵 Cactus | Resilient, low-maintenance |
| relay.primal.net | 🌿 Fern | Steady, dependable, prehistoric vibes |
| purplepag.es | 🍇 Grapevine | Aggregates information, spreads widely |
| (flaky relay) | 🥀 Wilting rose | Connection issues = drought |

**Interactive Features:**
- Click a plant to see its stats: uptime, message throughput (visualized as "water droplets"), latency
- Hover to see the last successful ping
- Drag to rearrange your greenhouse layout
- Mute/unmute relays by putting them "in the shade"

**Technical Notes:**
- WebSocket connection health monitoring
- SVG or Canvas-based plant rendering
- Local storage for layout preferences
- Could integrate with existing NDK connection events

**Why It's Great:**
Relay infrastructure is invisible to most users, which is a shame because it's the actual decentralized backbone. This makes the protocol *tangible* — suddenly you care about relay health because your sunflower is drooping. Also, it's just delightful.

---

### 3. Seed Bomb Guest Posting (The Compost Heap)
**Status:** 🌱 Seedling
**Complexity:** High
**Cypherpunk Factor:** ⚡⚡⚡⚡⚡

**The Vision:**
Non-whitelisted users (plebs) who don't use the required `#nostrgardnpost` tag don't just get rejected — they get composted. Their post lands in **The Compost Heap**, a quarantine section where the community decides its fate.

**The Lifecycle of a Seed Bomb:**
1. **Pleb posts without proper tag** → Post enters Compost Heap
2. **24-hour window** → Gardeners can upvote ("water") or downvote ("weed")
3. **If watered enough** → Post "blooms" and migrates to the main feed
4. **If ignored/weeded** → Post decomposes (deleted after 7 days)

**Governance Model:**
- Only Gardeners can vote (Master Gardener vote counts 3x? TBD)
- Threshold for blooming: e.g., 5 net upvotes within 24 hours
- Anti-spam: each pleb gets max 1 seed bomb per day

**UI Concept:**
- `/compost` route with a earthy brown aesthetic
- Posts displayed in a pile-like layout, newest on top
- "Water" and "Weed" buttons with satisfying animations
- Countdown timer showing time until decomposition

**Technical Notes:**
- Requires local or relay-based storage for vote tracking
- Could use NIP-25 reactions for voting
- Bloom migration = re-tag event? Or just allow in filter?
- Rate limiting by pubkey

**Why It's Great:**
This is decentralized content moderation that actually feels *fun*. It's natural selection for posts. Good content rises; spam decomposes. The community tends the garden together. Plus, "Compost Heap" is just a great name.

---

### 4. Encrypted Garden Gnome DMs
**Status:** 🌰 Seed
**Complexity:** Medium
**Cypherpunk Factor:** ⚡⚡⚡⚡⚡

**The Vision:**
Every Gardener's profile gets a tiny garden gnome icon (🧙‍♂️). Click it to send them an NIP-04 encrypted direct message. The gnome *winks* when you receive one. Because nothing says "private, censorship-resistant communication" like a ceramic yard ornament guarding your secrets.

**Gnome States:**
| State | Appearance | Meaning |
|-------|------------|---------|
| Idle | 🧙‍♂️ Standing still | No new messages |
| Winking | 🧙‍♂️💬 Animated wink | Unread DM waiting |
| Sleeping | 🧙‍♂️💤 | DMs disabled (do not disturb) |
| Golden | 🧙‍♂️✨ | Master Gardener's gnome |

**Features:**
- Click gnome → Opens DM compose modal
- Gnome wink persists until messages are read
- Optional: gnome can hold a sign with your NIP-05 verification
- Sound effect on message receive (subtle wind chimes?)

**Technical Notes:**
- NIP-04 encryption (or NIP-44 for better security)
- Store unread state locally or derive from relay
- Gnome rendering via SVG with CSS animations
- Could extend to group DMs (a gnome *council*?)

**Why It's Great:**
DMs are a core protocol feature but most clients treat them as an afterthought. The gnome makes private messaging *whimsical*. It's memorable. "Send me a gnome" could become actual slang. Plus, gnomes are inherently cypherpunk — they guard things silently, ask no questions, and have been around since before the internet.

---

### 5. Touch Grass Mode
**Status:** 🌱 Seedling
**Complexity:** Low
**Cypherpunk Factor:** ⚡⚡ (self-sovereignty over your attention)

**The Vision:**
A client-side setting that, when enabled, pauses the feed after a configurable duration (default: 15 minutes) and displays a gentle but firm message:

> *"The garden will still be here. Go outside."*

A sundial-style countdown timer shows when the lockout expires (or allows immediate override with a "I touched grass" button that requires solving a simple nature-themed captcha).

**Lockout Screen Features:**
- Sundial animation showing time remaining
- Random nature fact or quote
- Photo from the garden (user's own #gardn posts if available)
- "I touched grass" override button
- Captcha examples: "Select all images with flowers" / "What color is grass?"

**Settings:**
- Enable/disable Touch Grass Mode
- Set duration before lockout (5/15/30/60 min)
- Set lockout duration (5/15/30 min)
- Hardcore mode: no override button

**Technical Notes:**
- Pure client-side implementation
- localStorage for preferences and session tracking
- Service worker for lockout enforcement (optional)
- No server component needed

**Why It's Great:**
Peak dad energy. Peak self-care. Peak cypherpunk (you control your own attention). The attention economy is a vampire; this is garlic. Also, "Touch Grass Mode" is infinitely meme-able.

---

### 6. Lightning-Powered Watering Can (Zaps-to-Tips)
**Status:** 🌱 Seedling
**Complexity:** Medium
**Cypherpunk Factor:** ⚡⚡⚡⚡⚡

**The Vision:**
The zap button, reimagined as a watering can. When you zap a post, rain animation falls gently on the image. The more sats you send, the heavier the rain. Hit 21,000 sats and you trigger a full thunderstorm with ASCII lightning bolts.

**Zap Tiers:**
| Sats | Animation | Sound (optional) |
|------|-----------|------------------|
| 1–99 | 💧 Light drizzle | Soft patter |
| 100–999 | 🌧️ Steady rain | Rain sounds |
| 1,000–9,999 | ⛈️ Heavy rain + puddles | Heavier rain |
| 10,000–20,999 | 🌊 Downpour + flooding effect | Thunder rumble |
| 21,000+ | ⚡ THUNDERSTORM | Full ASCII lightning, screen flash |

**Interactive Details:**
- Watering can icon tilts when clicked
- Water pours from can to post in arc animation
- Rain accumulates briefly on the image (CSS filter)
- Thunderstorm triggers confetti-style lightning bolts
- Post "glistens" after being watered

**Technical Notes:**
- NIP-57 zap integration
- CSS animations for rain effects
- Canvas or SVG for lightning
- Zap amount detection from event
- Could cache recent zap totals per post

**Why It's Great:**
Bitcoin's smallest unit meets the garden metaphor perfectly. You're not just tipping — you're *watering* the garden. The creator gets sats; the post gets nourished. The thunderstorm at 21K is a flex and a celebration. This makes zapping *theatrical*.

---

### 7. NIP-05 Botanical Classification
**Status:** 🌰 Seed
**Complexity:** Low-Medium
**Cypherpunk Factor:** ⚡⚡⚡

**The Vision:**
Instead of displaying boring email-style NIP-05 verification (`vic@nostrgardn.com`), we classify Gardeners like botanical specimens:

> **Genus:** *Victorius californicus*
> **Family:** Gardenaceae
> **Native to:** nostrgardn.com

This displays as a museum-style placard next to their posts — scientific, absurd, and deeply memorable.

**Classification Rules:**
- **Genus:** Derived from display name (Latinized)
- **Species:** Derived from location or domain (californicus, tokyoensis, etc.)
- **Family:** All garden members are Gardenaceae
- **Native to:** The NIP-05 domain

**Examples:**
| User | NIP-05 | Botanical Name |
|------|--------|----------------|
| Victor | _@agilecoffee.com | *Victorius coffeensis* |
| Hiromi | _@nostrgardn.com | *Hiromia gardensis* |
| stntstn | _@stationtostation.io | *Stationia transiticus* |

**Display:**
- Small card/tooltip on profile hover
- Optional: include a hand-drawn botanical illustration silhouette
- Master Gardener gets special designation: "Type Specimen"

**Technical Notes:**
- Parse NIP-05 and display name
- Simple Latinization rules (add -us/-ia suffix, etc.)
- Static or procedurally generated illustrations
- Could be a fun onboarding moment ("You've been classified!")

**Why It's Great:**
Identity on Nostr is already pseudonymous and playful. This leans into that fully. It makes verification feel like being catalogued in a 19th-century botanical expedition. It's memorable, shareable, and deeply weird in the best way.

---

### 8. Fork the Garden (Export Button)
**Status:** 🌱 Seedling
**Complexity:** Low
**Cypherpunk Factor:** ⚡⚡⚡⚡⚡⚡ (MAXIMUM)

**The Vision:**
True to cypherpunk ethos: if you can't export it, you don't own it. A prominent button labeled **"Fork the Garden 🍴"** lets any user export the entire current feed as:

- JSON blob (raw Nostr events)
- Markdown archive (human-readable)
- IPFS-pinned snapshot (optional, for permanence)

**Export Options:**
| Format | Contents | Use Case |
|--------|----------|----------|
| JSON | Raw NDK events, all metadata | Backup, migration, analysis |
| Markdown | Posts with images as links, author info | Reading, archiving |
| HTML | Standalone webpage snapshot | Offline viewing |
| IPFS | Pinned JSON + images | Permanent decentralized archive |

**Button Behavior:**
- Click → Modal with export options
- Progress bar during export
- Download or copy to clipboard
- IPFS option shows CID after pinning

**Philosophical Statement (shown in modal):**
> *"The garden belongs to everyone who tends it. Take these seeds wherever you go."*

**Technical Notes:**
- JSON export is trivial (serialize current posts array)
- Markdown generation with image URL preservation
- IPFS integration via web3.storage or Pinata API
- Could include export of user's own posts only

**Why It's Great:**
This is the ultimate flex against platform capture. "We're so confident in our value that we'll help you leave." It signals that nostrgardn is not a walled garden — it's a *commons*. Data portability isn't a feature; it's a *philosophy*.

---

## FUTURE SEEDS (Not Yet Defined)

These are raw ideas mentioned in passing that deserve future exploration:

- **AI Image Filtering:** Automatic nature-themed classification (already stubbed in config.ts)
- **Private Relay (gardn.nostr1.com):** Gardener-only relay for faster sync
- **Seasonal Themes:** UI changes based on real-world season (cherry blossoms in spring, etc.)
- **Gardener Leaderboard:** Most prolific planters, most zapped, etc.
- **Cross-Garden Pollination:** Federation with other nostr-based communities
- **Garden Plot NFTs:** Joke? Maybe? Probably not. Unless...?

---

## PROCESS

### How Seeds Become Features

1. **Ideation:** Add seed to this vault with 🌰 status
2. **Refinement:** Discuss with Cap'n, flesh out details → 🌱
3. **Development:** Implementation begins → 🌿
4. **Review:** Testing, iteration, polish
5. **Deploy:** Ship to production → 🌻
6. **Sunset:** If deprecated, mark as 🥀 with notes

### Contributing Seeds

Anyone in the Gardener whitelist can propose seeds. Format:
```
### [Feature Name]
**Status:** 🌰 Seed
**Complexity:** Low/Medium/High
**Cypherpunk Factor:** ⚡ to ⚡⚡⚡⚡⚡

[Description...]
```

---

*"In the garden of decentralization, every seed contains a revolution."*

— The Greenhouse, est. 2026

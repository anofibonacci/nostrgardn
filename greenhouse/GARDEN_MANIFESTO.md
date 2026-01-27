# THE GARDEN MANIFESTO
## NostrGardn — A Curated Garden on the Nostr Network

**Last Updated:** January 26, 2026
**Version:** 1.0
**Domain:** [nostrgardn.com](https://nostrgardn.com)

---

## WHAT IS NOSTRGARDN?

NostrGardn is a curated, decentralized photo garden built on the Nostr protocol. It's a place where nature photography thrives, tended by a community of trusted Gardeners, powered by freedom technology, and rooted in the belief that beautiful things can grow in decentralized soil.

Think of it as Instagram meets a botanical sanctuary — if Instagram were built by cypherpunks who actually read the Federalist Papers, believed in self-sovereign identity, and thought "walled garden" was a design flaw rather than a feature.

---

## THE ELEVATOR PITCH

> **For nature lovers and freedom technologists**, NostrGardn is a curated photo feed that celebrates the beauty of the natural world through decentralized photo sharing. Unlike centralized platforms that mine your data and manipulate your feed, NostrGardn runs on Nostr — the protocol for freedom — where you own your identity, your content, and your relationships.

**Tagline Options:**
- *"Where notes and other stuff grow"*
- *"A curated garden on Nostr"*
- *"Decentralized beauty, naturally"*
- *"The protocol for photosynthesis"*
- *"Touch grass, on-chain"*

---

## CORE PHILOSOPHY

### The Three Roots

**1. Curation Over Chaos**
The open internet is beautiful but noisy. NostrGardn applies thoughtful curation — not algorithmic manipulation — to surface nature photography that inspires. Trusted Gardeners tend the feed. The community weeds out spam. Quality emerges organically.

**2. Decentralization as Default**
No single server controls NostrGardn. Content flows through multiple relays. Identities are cryptographic keys, not email addresses owned by corporations. The garden cannot be shut down, censored, or sold to the highest bidder.

**3. Nature as North Star**
In a world of doomscrolling and digital anxiety, NostrGardn offers a counterweight: the simple, grounding beauty of plants, landscapes, and living things. We believe that even on the internet, touching grass matters.

---

## THE HIERARCHY

NostrGardn operates on a tiered trust model. Not all participants are equal — but anyone can earn trust through contribution.

```
                    ┌─────────────────────────────┐
                    │      👑 MASTER GARDENER      │
                    │   (1 pubkey, all-access)     │
                    └─────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │       🌿 GARDENERS           │
                    │  (trusted, require #gardn)   │
                    └─────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │        🌱 PLEBS              │
                    │ (require #nostrgardnpost    │
                    │      + images)               │
                    └─────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │      🥬 COMPOST HEAP         │
                    │  (future: community-curated  │
                    │        quarantine)           │
                    └─────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │       🚫 BLOCKLIST           │
                    │   (spammers, bots, weeds)    │
                    └─────────────────────────────┘
```

### Tier Definitions

#### 👑 Master Gardener
**Population:** 1
**Powers:** All posts displayed, no restrictions
**Tag Required:** None
**Display:** Full (text + images)

The Master Gardener is the founder and primary curator of NostrGardn. All content from this pubkey appears in the feed without restriction. This is not about ego — it's about having a single point of editorial vision while the community grows.

*There can be only one.*

---

#### 🌿 Gardeners
**Population:** 8 (and growing)
**Powers:** Full post display when tagged
**Tag Required:** `#gardn`
**Display:** Full (text + images)

Gardeners are trusted community members whose pubkeys are whitelisted. Their posts appear in full — text, images, personality — when they signal intent by using the `#gardn` hashtag.

**Why require a tag?**
Even trusted users post plenty of content that isn't garden-relevant (shitposts, replies, political takes, etc.). The `#gardn` tag is a deliberate act: "I'm planting this in the garden." It keeps the feed intentional.

**Current Gardeners:**
| Name | Domain | Role |
|------|--------|------|
| fibonacci | — | OG |
| vbonacci (Victor) | agilecoffee.com | ☕️ Caffeine Supply |
| stntstn | stationtostation.io | 🚉 Station Master |
| hpwp (Will Paint) | havepaintwillpaint.com | 🎨 Artist in Residence |
| angeliens | angeliens.com | 👽 Otherworldly Vibes |
| 1in7 | — | 🎲 Statistical Anomaly |
| Sophwrk | — | 🧒 Youth Ambassador |
| Hakusui | — | 🌊 Eastern Currents |

**How to become a Gardener:**
Currently by invitation from the Master Gardener. Future: community nomination + Gardener vote.

---

#### 🌱 Plebs
**Population:** Unlimited
**Powers:** Image-only display when properly tagged
**Tag Required:** `#nostrgardnpost`
**Display:** Images only (text hidden)

Plebs are the general public — anyone on Nostr who wants to contribute. Their barrier to entry is simple:
1. Use the hashtag `#nostrgardnpost`
2. Include at least one image

If both conditions are met, their images appear in the feed (text is hidden). This allows the garden to grow beyond the inner circle while maintaining quality control.

**Why hide text?**
Trust is earned. We don't know if a random pleb will post thoughtful captions or spam. Images speak for themselves; text requires trust. Consistent good contributions → invitation to Gardener status.

---

#### 🥬 Compost Heap (Future)
**Population:** Variable
**Powers:** Community voting determines fate
**Status:** Not yet implemented

The Compost Heap is where rejected posts go to be reconsidered. Instead of silent rejection, posts that don't meet criteria enter a liminal space where Gardeners can vote to "water" (approve) or "weed" (reject) them.

This transforms moderation from gatekeeping into gardening — a communal, transparent process.

---

#### 🚫 Blocklist
**Population:** 3 (and growing as needed)
**Powers:** None
**Display:** Never

Spammers, bots, and bad actors. Their pubkeys are explicitly blocked. Content from these keys is never displayed, never enters the Compost Heap, never acknowledged.

---

## TECHNICAL FOUNDATION

### The Stack
- **Frontend:** SvelteKit 1.x with TypeScript
- **Nostr Library:** NDK (Nostr Development Kit) 0.8.19
- **Build:** Vite 4.x, adapter-static (SPA mode)
- **Hosting:** GoDaddy (static files)
- **Protocol:** Nostr (NIPs: 01, 05, 25, 57)

### Relay Configuration
**Content Relays:**
- `wss://relay.damus.io` — Popular, reliable
- `wss://nos.lol` — Community favorite
- `wss://relay.primal.net` — Primal ecosystem

**Discovery Relays:**
- `wss://purplepag.es` — Relay list aggregator
- `wss://relay.nos.social` — Profile discovery

**Future:**
- `wss://gardn.nostr1.com` — Private Gardener relay (planned)

### Content Flow
```
Nostr Relays → NDK Subscription → Decision Tree Filter → Sorted Feed → Display
```

The decision tree (`filters.ts`) implements the hierarchy:
1. Blocked? → Reject
2. Master Gardener? → Full display
3. Gardener + #gardn? → Full display
4. Pleb + #nostrgardnpost + images? → Image-only display
5. Else → Reject (future: Compost Heap)

---

## THE VISION

### Phase 1: Foundation (Current)
- Core filtering and display logic ✓
- Tiered access hierarchy ✓
- Basic feed and landing page ✓
- Gardener whitelist ✓

### Phase 2: Growth
- Compost Heap implementation
- Zap integration (Lightning watering can)
- Touch Grass Mode
- Relay Greenhouse dashboard
- AI-assisted nature image validation

### Phase 3: Bloom
- Private relay for Gardeners
- Cross-pollination with other Nostr communities
- Mobile-optimized experience
- Garden analytics (growth metrics, engagement patterns)
- Federated moderation tools

### Phase 4: Perennial
- Self-sustaining governance
- Community-elected Gardener council
- Protocol improvements (new NIPs as needed)
- Template for other curated Nostr communities

---

## THE TEAM

### duobudo
> *"As a team, we strive to learn one thing at a time, together, and learn it well."*

NostrGardn is a project of duobudo — a philosophy of paired learning and building. We believe the future is decentralized, and that Nostr vibrates as did glasnost and Gutenberg in their time.

### Bonaccike
NostrGardn is tended by Bonaccike (lit. "Clan of Bonacci"), a small family operation based in Southern California:
- **Victor** — Master Gardener, code wrangler, coffee enthusiast
- **Hiromi** — Moral support, Japanese cultural consultant
- **Sophia** — Youth perspective, occasional assistant, chaos agent

---

## BRAND ELEMENTS

### Color Palette
- **Primary:** Garden Green (`--brand`: ~#3AA182)
- **Background:** Dark earth tones
- **Accent:** Warm amber (for zaps, notifications)

### Tone of Voice
- Warm but not saccharine
- Technical but accessible
- Whimsical but grounded
- Cypherpunk with dad-joke energy

### Key Phrases
- "Tend the garden"
- "Plant a post"
- "Water with zaps"
- "Compost the spam"
- "Fork the garden"
- "Touch grass"

---

## WHY NOSTR?

### The Problem with Centralized Platforms
- **Censorship:** Arbitrary bans, shadowbans, algorithmic suppression
- **Data Exploitation:** Your content trains their AI, sells their ads
- **Platform Risk:** API changes, shutdowns, acquisitions
- **Identity Lock-in:** Your followers, your history — trapped

### The Nostr Solution
- **Censorship Resistance:** Multiple relays, no single point of failure
- **Self-Sovereign Identity:** You own your keys, you own your identity
- **Data Portability:** Take your content anywhere
- **Protocol > Platform:** Clients change, protocol persists

### NostrGardn's Role
We prove that curation and decentralization aren't opposites. You can have quality *and* freedom. The garden shows what thoughtful design on Nostr looks like.

---

## APPENDIX: GLOSSARY

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

---

## DOCUMENT USAGE

This manifesto can be used for:
- **Marketing:** Extract taglines, elevator pitch, philosophy
- **Onboarding:** Explain the hierarchy to new Gardeners
- **Technical Reference:** Architecture overview for developers
- **Vision Alignment:** Ensure features match the mission
- **Partnership Discussions:** Explain what NostrGardn is and why

---

*"We tend this virtual space to celebrate nature's thriving abundance through decentralized photo sharing."*

**Powered by Nostr — the protocol for freedom.**

---

*Document maintained in the Greenhouse.*
*Last cultivated: January 26, 2026*

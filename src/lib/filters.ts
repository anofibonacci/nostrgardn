import type { NDKEvent, NDKUserProfile } from '@nostr-dev-kit/ndk';
import { gardeners, blocklist, requiredTags, gardenerRequiredTags, imagePatterns, display, masterGardener } from './config';

// ============================================================================
// TYPES
// ============================================================================

export type PostDisplayType = 'full' | 'image-only';

export interface AuthorInfo {
	pubkey: string;
	npub?: string;
	name?: string;
	displayName?: string;
	picture?: string;
	nip05?: string;
}

export interface FilteredPost {
	// The original NDK event
	event: NDKEvent;

	// How this post should be displayed
	displayType: PostDisplayType;

	// Extracted image URLs (deduplicated)
	images: string[];

	// Author information (populated after profile fetch)
	author: AuthorInfo;

	// Why this post was included (for debugging)
	reason: 'whitelist' | 'tagged-with-images';

	// Timestamp for sorting
	createdAt: number;
}

export interface FilterStats {
	total: number;
	blocked: number;
	masterGardener: number;        // MG posts (all allowed)
	gardenerWithTag: number;       // Gardener posts with #gardn
	gardenerNoTag: number;         // Gardener posts missing #gardn (rejected)
	taggedWithImages: number;      // Pleb posts with #nostrgardnpost + images
	rejectedNoTag: number;         // Pleb posts missing required tag
	rejectedNoImages: number;      // Pleb posts with tag but no images
	// Legacy alias for backwards compatibility
	whitelisted: number;           // = masterGardener + gardenerWithTag
}

// ============================================================================
// FILTER FUNCTIONS
// ============================================================================

/**
 * Check if a pubkey is blocked (spammers, bots, etc.)
 */
export function isBlocked(pubkey: string): boolean {
	const normalizedPubkey = pubkey.toLowerCase();
	return blocklist.some((bp) => bp.toLowerCase() === normalizedPubkey);
}

/**
 * Check if a pubkey is THE Master Gardener (all posts allowed)
 * There can be only one. 🌳👑
 */
export function isMasterGardener(pubkey: string): boolean {
	return pubkey.toLowerCase() === masterGardener.toLowerCase();
}

/**
 * Check if a pubkey is a Gardener (must use #gardn tag)
 */
export function isGardener(pubkey: string): boolean {
	const normalizedPubkey = pubkey.toLowerCase();
	return gardeners.some((g) => g.toLowerCase() === normalizedPubkey);
}

/**
 * Check if a pubkey is whitelisted (Master Gardener OR Gardener)
 * Used for relay queries to fetch posts from trusted accounts
 */
export function isWhitelisted(pubkey: string): boolean {
	return isMasterGardener(pubkey) || isGardener(pubkey);
}

/**
 * Check if an event has at least one of the required tags (for plebs)
 * Tags in Nostr are stored as ["t", "tagvalue"] arrays
 */
export function hasRequiredTag(event: NDKEvent): boolean {
	const eventTags = event.getMatchingTags('t');

	for (const [, tagValue] of eventTags) {
		if (tagValue) {
			const normalizedTag = tagValue.toLowerCase();
			if (requiredTags.some((rt) => rt.toLowerCase() === normalizedTag)) {
				return true;
			}
		}
	}

	return false;
}

/**
 * Check if an event has at least one of the gardener-required tags (#gardn)
 */
export function hasGardenerTag(event: NDKEvent): boolean {
	const eventTags = event.getMatchingTags('t');

	for (const [, tagValue] of eventTags) {
		if (tagValue) {
			const normalizedTag = tagValue.toLowerCase();
			if (gardenerRequiredTags.some((gt) => gt.toLowerCase() === normalizedTag)) {
				return true;
			}
		}
	}

	return false;
}

/**
 * Get all matching required tags from an event (for future categorization)
 */
export function getMatchingTags(event: NDKEvent): string[] {
	const eventTags = event.getMatchingTags('t');
	const matches: string[] = [];

	for (const [, tagValue] of eventTags) {
		if (tagValue) {
			const normalizedTag = tagValue.toLowerCase();
			if (requiredTags.some((rt) => rt.toLowerCase() === normalizedTag)) {
				matches.push(tagValue);
			}
		}
	}

	return matches;
}

/**
 * Extract image URLs from post content using configured patterns
 */
export function extractImages(content: string): string[] {
	const images: string[] = [];

	for (const pattern of imagePatterns) {
		// Reset regex state (important for global regexes)
		pattern.lastIndex = 0;

		const matches = content.match(pattern);
		if (matches) {
			images.push(...matches);
		}
	}

	// Deduplicate while preserving order
	const seen = new Set<string>();
	const deduplicated = images.filter((url) => {
		const normalized = url.toLowerCase();
		if (seen.has(normalized)) {
			return false;
		}
		seen.add(normalized);
		return true;
	});

	// Apply max limit if configured
	if (display.maxImagesPerPost > 0) {
		return deduplicated.slice(0, display.maxImagesPerPost);
	}

	return deduplicated;
}

/**
 * Apply the nostrgardn decision tree to a single event
 *
 * Decision tree:
 * 0. Is pubkey blocked? → REJECT immediately
 * 1. Is pubkey Master Gardener? → FULL display (no restrictions)
 * 2. Is pubkey a Gardener? → Check for #gardn tag
 *    - Has #gardn → FULL display
 *    - No #gardn → REJECT (future: different treatment)
 * 3. Is pleb with required tag (#nostrgardnpost)? → Continue, else REJECT
 * 4. Does pleb post have images? → IMAGE-ONLY display, else REJECT
 *
 * Future: rejected plebs → Compost Heap for community moderation
 */
export function filterEvent(event: NDKEvent): FilteredPost | null {
	const pubkey = event.pubkey;

	// -------------------------------------------------------------------------
	// Branch 0: Blocklist check (spammers, bots get rejected immediately)
	// -------------------------------------------------------------------------
	if (isBlocked(pubkey)) {
		return null;
	}

	// -------------------------------------------------------------------------
	// Branch 1: Master Gardener (all posts allowed, no restrictions)
	// -------------------------------------------------------------------------
	if (isMasterGardener(pubkey)) {
		return {
			event,
			displayType: 'full',
			images: extractImages(event.content),
			author: { pubkey },
			reason: 'whitelist',
			createdAt: event.created_at ?? 0
		};
	}

	// -------------------------------------------------------------------------
	// Branch 2: Gardener check (must use #gardn for priority inclusion)
	// -------------------------------------------------------------------------
	if (isGardener(pubkey)) {
		if (hasGardenerTag(event)) {
			return {
				event,
				displayType: 'full',
				images: extractImages(event.content),
				author: { pubkey },
				reason: 'whitelist',
				createdAt: event.created_at ?? 0
			};
		}
		// Gardener without #gardn tag - rejected (their other posts don't appear)
		return null;
	}

	// -------------------------------------------------------------------------
	// Branch 3: Pleb required tag check (must use #nostrgardnpost)
	// -------------------------------------------------------------------------
	if (!hasRequiredTag(event)) {
		// Rejected: no required tag (future: route to Compost Heap)
		return null;
	}

	// -------------------------------------------------------------------------
	// Branch 4: Pleb image check (must include images)
	// -------------------------------------------------------------------------
	const images = extractImages(event.content);

	if (images.length === 0) {
		// Rejected: has tag but no images
		return null;
	}

	// -------------------------------------------------------------------------
	// Success: Tagged pleb post with images → image-only display
	// -------------------------------------------------------------------------
	return {
		event,
		displayType: 'image-only',
		images,
		author: { pubkey },
		reason: 'tagged-with-images',
		createdAt: event.created_at ?? 0
	};
}

/**
 * Filter a collection of events and return sorted results
 */
export function filterEvents(events: NDKEvent[] | Set<NDKEvent>): FilteredPost[] {
	const posts: FilteredPost[] = [];

	for (const event of events) {
		const filtered = filterEvent(event);
		if (filtered) {
			posts.push(filtered);
		}
	}

	// Sort by created_at descending (newest first)
	posts.sort((a, b) => b.createdAt - a.createdAt);

	return posts;
}

/**
 * Filter events and return both results and stats
 */
export function filterEventsWithStats(
	events: NDKEvent[] | Set<NDKEvent>
): { posts: FilteredPost[]; stats: FilterStats } {
	const posts: FilteredPost[] = [];
	const stats: FilterStats = {
		total: 0,
		blocked: 0,
		masterGardener: 0,
		gardenerWithTag: 0,
		gardenerNoTag: 0,
		taggedWithImages: 0,
		rejectedNoTag: 0,
		rejectedNoImages: 0,
		whitelisted: 0
	};

	for (const event of events) {
		stats.total++;
		const pubkey = event.pubkey;

		// Check blocklist first
		if (isBlocked(pubkey)) {
			stats.blocked++;
			continue;
		}

		// Master Gardener: all posts allowed
		if (isMasterGardener(pubkey)) {
			const filtered = filterEvent(event);
			if (filtered) {
				posts.push(filtered);
				stats.masterGardener++;
			}
			continue;
		}

		// Gardener: must use #gardn tag
		if (isGardener(pubkey)) {
			if (hasGardenerTag(event)) {
				const filtered = filterEvent(event);
				if (filtered) {
					posts.push(filtered);
					stats.gardenerWithTag++;
				}
			} else {
				stats.gardenerNoTag++;
			}
			continue;
		}

		// Pleb: must use #nostrgardnpost + have images
		if (!hasRequiredTag(event)) {
			stats.rejectedNoTag++;
		} else {
			const images = extractImages(event.content);
			if (images.length === 0) {
				stats.rejectedNoImages++;
			} else {
				const filtered = filterEvent(event);
				if (filtered) {
					posts.push(filtered);
					stats.taggedWithImages++;
				}
			}
		}
	}

	// Compute legacy whitelisted count
	stats.whitelisted = stats.masterGardener + stats.gardenerWithTag;

	// Sort by created_at descending
	posts.sort((a, b) => b.createdAt - a.createdAt);

	return { posts, stats };
}

/**
 * Populate author info from NDK user profile
 */
export function populateAuthorInfo(post: FilteredPost, profile: NDKUserProfile | null): void {
	if (profile) {
		post.author.name = profile.name;
		post.author.displayName = profile.displayName;
		post.author.picture = profile.image;
		post.author.nip05 = profile.nip05;
	}
}

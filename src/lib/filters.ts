import type { NDKEvent, NDKUserProfile } from '@nostr-dev-kit/ndk';
import { whitelist, blocklist, requiredTags, imagePatterns, display } from './config';

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
	whitelisted: number;
	taggedWithImages: number;
	rejectedNoTag: number;
	rejectedNoImages: number;
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
 * Check if a pubkey is in the whitelist (gardeners)
 */
export function isWhitelisted(pubkey: string): boolean {
	// Normalize to lowercase hex for comparison
	const normalizedPubkey = pubkey.toLowerCase();
	return whitelist.some((wp) => wp.toLowerCase() === normalizedPubkey);
}

/**
 * Check if an event has at least one of the required tags
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
 * 1. Is pubkey whitelisted? → FULL display (text + images)
 * 2. Does it have required tag? → Continue, else REJECT
 * 3. Does it have images? → IMAGE-ONLY display, else REJECT
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
	// Branch 1: Whitelist check (gardeners get full access)
	// -------------------------------------------------------------------------
	if (isWhitelisted(pubkey)) {
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
	// Branch 2: Required tag check (plebs must use the right hashtag)
	// -------------------------------------------------------------------------
	if (!hasRequiredTag(event)) {
		// Rejected: no required tag
		return null;
	}

	// -------------------------------------------------------------------------
	// Branch 3: Image check (plebs must include images)
	// -------------------------------------------------------------------------
	const images = extractImages(event.content);

	if (images.length === 0) {
		// Rejected: has tag but no images
		return null;
	}

	// -------------------------------------------------------------------------
	// Success: Tagged post with images → image-only display
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
		whitelisted: 0,
		taggedWithImages: 0,
		rejectedNoTag: 0,
		rejectedNoImages: 0
	};

	for (const event of events) {
		stats.total++;
		const pubkey = event.pubkey;

		// Check blocklist first
		if (isBlocked(pubkey)) {
			stats.blocked++;
			continue;
		}

		if (isWhitelisted(pubkey)) {
			const filtered = filterEvent(event);
			if (filtered) {
				posts.push(filtered);
				stats.whitelisted++;
			}
		} else if (!hasRequiredTag(event)) {
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

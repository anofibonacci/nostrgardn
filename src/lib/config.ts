import { dev } from '$app/environment';

// ============================================================================
// NOSTRGARDN CONFIGURATION
// ============================================================================

export const site = {
	title: 'nostrgardn',
	description: "nostr's gardn",
	url: dev ? 'http://localhost:5173/' : 'https://nostrgardn.com/'
};

// ============================================================================
// RELAY CONFIGURATION
// ============================================================================

// Primary relays for fetching content
export const relays = {
	// Main content relays
	explicit: [
		'wss://relay.damus.io',
		'wss://nos.lol',
		'wss://relay.primal.net'
		// 'wss://relay.nostr.band'  // disabled: connection issues
		// 'wss://gardn.nostr1.com'  // future: private relay
	],

	// Outbox model: relays for discovering user relay preferences
	outbox: [
		'wss://purplepag.es', // relay list aggregator
		'wss://relay.nos.social'
	]
};

// ============================================================================
// ACCESS CONTROL
// ============================================================================

// Gardeners: whitelisted pubkeys that get FULL post display (text + images)
// Format: hex pubkeys (not npub)
export const whitelist: string[] = [
	'e2b1b6abab496158f64947c4dc63ad5cbdf2ae7a96a81e23b50c42f3a54f372f' // gardnNpub (you)
	// Add more trusted pubkeys here
];

// Blocklist: pubkeys to always ignore (spammers, bots, etc.)
// Migrated from skip_these.ts
export const blocklist: string[] = [
	'98207759a2a3254420ea84a2f8dd3d96cef4b1dbfc5ff0abca83fc04fa7551f2',
	'27a2b2dc7505602c8d8754b45be8334a4615c69fc61280cb4c3b0a9afad802b0',
	'cdc1eed96f1dd1d1be72bbf7daf6ae853e3237cb8a4aff5459039ac8b0e2b02f'
];

// Required tag(s) for non-whitelisted users
// Posts from plebs must include at least one of these tags to be considered
export const requiredTags: string[] = [
	'nostrgardnpost'
	// Future: add more tags for different filtering/categorization
];

// ============================================================================
// IMAGE DETECTION
// ============================================================================

// URL patterns for detecting images in post content
export const imagePatterns: RegExp[] = [
	// Common image extensions
	/https?:\/\/[^\s<>"]+\.(jpg|jpeg|png|gif|webp|avif)(\?[^\s<>"]*)?/gi,

	// Nostr-specific image hosts (often don't have extensions in URL)
	/https?:\/\/nostr\.build\/i\/[^\s<>"]+/gi,
	/https?:\/\/image\.nostr\.build\/[^\s<>"]+/gi,
	/https?:\/\/cdn\.nostr\.build\/[^\s<>"]+/gi,

	// Common image hosts
	/https?:\/\/i\.imgur\.com\/[^\s<>"]+/gi,
	/https?:\/\/pbs\.twimg\.com\/[^\s<>"]+/gi,

	// Void.cat (popular in nostr)
	/https?:\/\/void\.cat\/d\/[^\s<>"]+/gi,

	// Primal CDN
	/https?:\/\/primal\.b-cdn\.net\/[^\s<>"]+/gi
];

// ============================================================================
// DISPLAY SETTINGS
// ============================================================================

export const display = {
	// Number of posts to fetch initially
	initialFetchLimit: 50,

	// Maximum images to show per post (0 = unlimited)
	maxImagesPerPost: 0,

	// Show author metadata (name, avatar) on image-only posts
	showAuthorOnImagePosts: true,

	// Date format (using dayjs)
	dateFormat: 'MMM D, YYYY h:mm A'
};

// ============================================================================
// FUTURE: AI FILTERING (placeholder)
// ============================================================================

export const aiFiltering = {
	enabled: false,
	// Future: nature-themed image classification
	allowedCategories: ['nature', 'plants', 'garden', 'flowers', 'landscape']
};

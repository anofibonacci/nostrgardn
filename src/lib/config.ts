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

// MASTER GARDENER: All posts allowed, no restrictions (there can be only one)
export const masterGardener = 'e2b1b6abab496158f64947c4dc63ad5cbdf2ae7a96a81e23b50c42f3a54f372f'; // gardnNpub

// GARDENERS: Trusted pubkeys - must use #gardn tag for priority inclusion
// Format: hex pubkeys (not npub)
export const gardeners: string[] = [
	'a262e97d0d0a05e1a611b001be8f7116a32c000734c6c5e824a4882dddc3e696', // fibonacci
	'c024b608557e19b5777610cf66fefb84d223db3effad47c3c2575b875ba07ff7', // vbonacci (☕️ Victor ⚡️) - agilecoffee.com
	'4092082b6a86cd9bfc019d48e18f1afbc27f27341ee1b2ddcbd9ed60a09c0192', // stntstn - stationtostation.io
	'c5f4a1a417b0efbe294f953e44e68d26e51d425586dabda040462f1e702604b8', // hpwp (Will Paint) - havepaintwillpaint.com
	'69fe41cc64b57408152a6bc1322e4edcb25c7523e55f4905492728e3aee67a46', // angeliens (angel or alien) - angeliens.com
	'a22d1b221378618bc14a8b5a991d12df126de212bc489020aa115ec04c7c3dbc', // 1in7
	'ea67953ce97efeef97b65a6d083cd0d09be4774eae697345b78fd0aab13f3b5b', // Sophwrk
	'5b2f82aa53aa87baa818e4c5a1abdaff7a1b7da5a2e8ab0f5989de5bb15c8b6e', // Hakusui
];

// Combined whitelist for backwards compatibility (used in relay queries)
export const whitelist: string[] = [masterGardener, ...gardeners];

// Blocklist: pubkeys to always ignore (spammers, bots, etc.)
// Migrated from skip_these.ts
export const blocklist: string[] = [
	'98207759a2a3254420ea84a2f8dd3d96cef4b1dbfc5ff0abca83fc04fa7551f2',
	'27a2b2dc7505602c8d8754b45be8334a4615c69fc61280cb4c3b0a9afad802b0',
	'cdc1eed96f1dd1d1be72bbf7daf6ae853e3237cb8a4aff5459039ac8b0e2b02f'
];

// Required tag(s) for GARDENERS (trusted, but must signal intent)
export const gardenerRequiredTags: string[] = [
	'gardn'
];

// Required tag(s) for PLEBS (untrusted users)
// Must include at least one of these tags AND have images → image-only display
// Without proper tag → future: Compost Heap
export const requiredTags: string[] = [
	'nostrgardnpost'
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

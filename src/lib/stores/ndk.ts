import { browser } from '$app/environment';
import NDK from '@nostr-dev-kit/ndk';
import { writable } from 'svelte/store';
import { relays } from '../config';

// ============================================================================
// NDK INSTANCE CONFIGURATION
// ============================================================================

/**
 * Create the NDK instance with relay configuration from config.ts
 *
 * Current setup (NDK 0.8.x):
 * - Basic relay connections
 * - Browser-only connection
 *
 * Future upgrades (NDK 2.x):
 * - enableOutboxModel: true
 * - cacheAdapter: NDKCacheAdapterDexie
 * - NDKNip07Signer for user interactions
 */
const _ndk = new NDK({
	explicitRelayUrls: relays.explicit,
	// Note: outbox relays and model require NDK upgrade
	// outboxRelayUrls: relays.outbox,
	// enableOutboxModel: true,
	debug: false
});

// ============================================================================
// CONNECTION MANAGEMENT
// ============================================================================

let isConnected = false;
let connectionPromise: Promise<void> | null = null;

/**
 * Connect to relays (browser only, singleton pattern)
 * NDK connects to relays asynchronously - some may fail while others succeed
 */
export async function connect(): Promise<void> {
	if (!browser) {
		return;
	}

	if (isConnected) {
		return;
	}

	if (connectionPromise) {
		return connectionPromise;
	}

	connectionPromise = new Promise<void>((resolve, reject) => {
		// Set a timeout - if we haven't connected to ANY relay in 10s, fail
		const timeout = setTimeout(() => {
			console.warn('[NDK] Connection timeout - no relays connected');
			connectionPromise = null;
			reject(new Error('Connection timeout - no relays available'));
		}, 10000);

		_ndk
			.connect()
			.then(() => {
				clearTimeout(timeout);
				isConnected = true;
				console.log('[NDK] Connected to relays:', relays.explicit);
				resolve();
			})
			.catch((err) => {
				clearTimeout(timeout);
				console.error('[NDK] Connection error:', err);
				connectionPromise = null;
				reject(err || new Error('Failed to connect to relays'));
			});

		// NDK often resolves connect() before all relays are ready
		// Give it a moment then resolve anyway if we have any pool connections
		setTimeout(() => {
			if (_ndk.pool?.connectedRelays?.size > 0) {
				clearTimeout(timeout);
				isConnected = true;
				console.log('[NDK] Partial connection - some relays ready');
				resolve();
			}
		}, 3000);
	});

	return connectionPromise;
}

/**
 * Get connection status
 */
export function getConnectionStatus(): boolean {
	return isConnected;
}

// ============================================================================
// AUTO-CONNECT (Browser)
// ============================================================================

if (browser) {
	connect();
}

// ============================================================================
// FUTURE: SIGNER SUPPORT
// ============================================================================

/**
 * Connect with NIP-07 browser extension signer
 * Enables: posting, liking, zapping from the site
 *
 * Usage:
 *   import { connectWithSigner } from '$lib/stores/ndk';
 *   await connectWithSigner();
 *
 * Requires NDK upgrade and:
 *   import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
 */
export async function connectWithSigner(): Promise<boolean> {
	if (!browser) {
		return false;
	}

	// Check for NIP-07 extension (nos2x, Alby, etc.)
	if (typeof window !== 'undefined' && 'nostr' in window) {
		console.log('NIP-07 extension detected - signer support ready for future implementation');
		// Future: ndk.signer = new NDKNip07Signer();
		return true;
	}

	console.log('No NIP-07 extension detected');
	return false;
}

// ============================================================================
// EXPORTS
// ============================================================================

// Svelte writable store (for reactive updates)
const ndk = writable(_ndk);

// Direct NDK instance access (for non-reactive usage)
export const ndkInstance = _ndk;

// Default export: the writable store
export default ndk;

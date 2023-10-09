import { browser } from '$app/environment';
import NDK from '@nostr-dev-kit/ndk';
import { writable } from 'svelte/store';

const _ndk = new NDK({
	explicitRelayUrls: [
		'wss://gardn.nostr1.com',
		'wss://purplepag.es'
		//,'ws://localhost:8080'
		//,'wss://relay.damus.io'
		//,'wss://relay.nostr.band'
		//,'wss://nos.lol'
		//,'wss://relay.snort.social'
	],
	debug: false
});
if (browser) {
	_ndk.connect().then(() => console.log('NDK Connected'));
}

// Create a singleton instance that is the default export
const ndk = writable(_ndk);

export default ndk;

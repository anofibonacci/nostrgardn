import { browser } from '$app/environment';
import NDK from '@nostr-dev-kit/ndk';
import { writable } from 'svelte/store';

const ndk = new NDK({
	explicitRelayUrls: [
		'wss://gardn.nostr1.com'
		,'wss://purplepag.es'
		//,'ws://localhost:8080'
		//,'wss://relay.damus.io'
		//,'wss://relay.nostr.band'
		//,'wss://nos.lol'
		//,'wss://relay.snort.social'
	],
	debug: false
});
if (browser) {
	ndk.connect().then(() => console.log('NDK Connected'));
}

// Create a singleton instance that is the default export
const ndkStore = writable(ndk);

export default ndkStore;

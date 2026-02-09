/**
 * Dad Joke Loading Messages
 * Part of "The Handbuilt Greenhouse" design system
 *
 * Terminal-style loading messages with maximum dad energy
 */

export type MessageCategory =
	| 'loading'
	| 'success'
	| 'error'
	| 'empty'
	| 'git'
	| 'terminal'
	| 'nostr';

export const dadJokes = {
	loading: [
		'~/garden$ npm install grass --save-dev',
		'Photosynthesizing your feed...',
		'Watering the relays...',
		'Consulting the almanac...',
		'Pruning spam from the compost heap...',
		'Checking soil moisture...',
		'git pull origin/main --rebase',
		'npm run photosynthesis --watch',
		'Asking the bees for directions...',
		'Calibrating the greenhouse thermostat...',
		'Reading NIP-420: Proof of Photosynthesis...',
		'Checking if robots.txt allows gardening...',
		'// TODO: Figure out why this works',
		'Fortran intensifies...',
		'Converting sunlight to data...',
		'Defragmenting the compost heap...',
		'Compiling organic matter...',
		'Negotiating with WebSockets...'
	],

	success: [
		'Post planted! 🌱',
		'Successfully photosynthesized!',
		'git commit -m "feat: added one (1) tomato 🍅"',
		'Bloom achieved! 🌸',
		'Relay connection established. Vibes: immaculate.',
		'npm install complete. No peer conflicts. (Impossible.)',
		'Success! (Wait, what?)',
		'Harvest complete! 🌾',
		'Connection sprouted successfully.',
		'Data successfully composted.',
		'The garden approves this message. ✓'
	],

	error: [
		'Error 404: This page touched grass and never came back.',
		'Looks like this seed didn\'t take. 🌱 Compost and try again?',
		'Relay connection wilted. 🥀 Check your network?',
		'Git push rejected: Your branch is behind nature.',
		'TypeError: Cannot read property "photosynthesis" of undefined',
		'ECONNREFUSED: The garden is taking a nap.',
		'Fatal: Not a git repository (or the bees took it)',
		'Merge conflict detected. Grab a shovel.',
		'Segmentation fault (core composted)',
		'Warning: Insufficient sunlight for this operation.',
		'ERROR: Maximum dad jokes exceeded. (JK, impossible.)'
	],

	empty: [
		'Nothing growing yet. Did someone forget to water? 💧',
		'The garden is resting. Even soil needs a break.',
		'Compost heap is empty. (That\'s a good thing!)',
		'No posts found. The bees are on strike.',
		'Empty feed. Time to plant something!',
		'~/garden$ ls -la\ntotal 0\n(Nothing here yet)',
		'This space intentionally left fallow.',
		'Waiting for seeds... 🌰',
		'The void stares back. It looks peaceful.',
		'No results. Try watering the search bar?'
	],

	git: [
		'git commit -m "feat: initial commit 🌱"',
		'git commit -m "fix: watered the plants"',
		'git commit -m "chore: pruned dead branches"',
		'git commit -m "refactor: reorganized the toolshed"',
		'git push origin greenhouse --force-with-lease',
		'git log --all --decorate --oneline --graph --garden',
		'git stash save "hiding veggies from raccoons"',
		'git blame soil (spoiler: it was the rabbits)',
		'git rebase -i HEAD~3 # squash the tomatoes',
		'git cherry-pick abc123 # literally picking cherries'
	],

	terminal: [
		'$ ./water_plants.sh --verbose',
		'$ sudo make me a garden',
		'$ chmod +x photosynthesis.sh',
		'$ cat /dev/sunshine > plants.txt',
		'$ grep -r "tomato" /garden',
		'$ ps aux | grep bees',
		'$ kill -9 weeds',
		'$ top # (Shows: CPU: 100% photosynthesis)',
		'$ tail -f /var/log/growth.log',
		'$ dd if=/dev/rain of=/dev/plants bs=1M'
	],

	nostr: [
		'Broadcasting to relays: wss://garden.lol',
		'NIP-69: Proof of Grass (Draft)',
		'Fetching kind:1 events... (it\'s all tomatoes)',
		'Signing event with NIP-07... (where\'s my key?)',
		'Decrypting NIP-04 DM: "Your garden looks great!"',
		'Publishing to 3 relays... (2 responded, 1 ghosted us)',
		'Verifying schnorr signature... (trust, but verify)',
		'Parsing nostr:npub... (that\'s a lot of hex)',
		'Connecting to wss://nos.lol [Status: vibing]',
		'Cache hit! (The bees remembered!)'
	]
};

/**
 * Get a random dad joke from a category
 */
export function getDadJoke(category: MessageCategory = 'loading'): string {
	const jokes = dadJokes[category];
	return jokes[Math.floor(Math.random() * jokes.length)];
}

/**
 * Get a random loading message (shorthand)
 */
export function getLoadingMessage(): string {
	return getDadJoke('loading');
}

/**
 * Get a random success message (shorthand)
 */
export function getSuccessMessage(): string {
	return getDadJoke('success');
}

/**
 * Get a random error message (shorthand)
 */
export function getErrorMessage(): string {
	return getDadJoke('error');
}

/**
 * Cycle through messages with interval (for animated loading states)
 */
export function createMessageCycler(
	category: MessageCategory = 'loading',
	intervalMs: number = 3000
): () => void {
	const jokes = dadJokes[category];
	let index = Math.floor(Math.random() * jokes.length);
	let currentMessage = jokes[index];

	const interval = setInterval(() => {
		index = (index + 1) % jokes.length;
		currentMessage = jokes[index];
	}, intervalMs);

	return () => clearInterval(interval);
}

/**
 * Format a message as a terminal prompt
 */
export function formatAsPrompt(message: string, prompt: string = '$'): string {
	return `${prompt} ${message}`;
}

/**
 * Format a message as a git commit
 */
export function formatAsGitCommit(message: string): string {
	const types = ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'];
	const type = types[Math.floor(Math.random() * types.length)];
	return `git commit -m "${type}: ${message}"`;
}

/**
 * Konami Code Easter Egg
 * Part of "The Handbuilt Greenhouse" design system
 *
 * Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
 * Activates: Maximum Chaos Mode (Comic Sans + spinning animations)
 */

type KonamiCallback = () => void;

const KONAMI_SEQUENCE = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'b',
	'a'
];

let currentIndex = 0;
let listeners: KonamiCallback[] = [];
let isActive = false;

/**
 * Initialize Konami Code listener
 */
export function initKonamiCode(): () => void {
	const handleKeyDown = (event: KeyboardEvent) => {
		const key = event.key.toLowerCase();

		// Check if key matches current position in sequence
		if (key === KONAMI_SEQUENCE[currentIndex].toLowerCase()) {
			currentIndex++;

			// Success! Full sequence entered
			if (currentIndex === KONAMI_SEQUENCE.length) {
				isActive = true;
				currentIndex = 0;
				triggerCallbacks();
				console.log('🎮 KONAMI CODE ACTIVATED! Maximum Chaos Mode enabled.');
			}
		} else {
			// Wrong key, reset
			currentIndex = 0;
		}
	};

	document.addEventListener('keydown', handleKeyDown);

	// Return cleanup function
	return () => {
		document.removeEventListener('keydown', handleKeyDown);
	};
}

/**
 * Register a callback for when Konami Code is activated
 */
export function onKonamiActivate(callback: KonamiCallback): () => void {
	listeners.push(callback);

	// Return unsubscribe function
	return () => {
		listeners = listeners.filter((cb) => cb !== callback);
	};
}

/**
 * Trigger all registered callbacks
 */
function triggerCallbacks(): void {
	listeners.forEach((callback) => callback());
}

/**
 * Check if Konami Code is currently active
 */
export function isKonamiActive(): boolean {
	return isActive;
}

/**
 * Manually activate (for testing)
 */
export function activateKonami(): void {
	isActive = true;
	triggerCallbacks();
}

/**
 * Deactivate Konami mode
 */
export function deactivateKonami(): void {
	isActive = false;
	currentIndex = 0;
}

/**
 * Apply Maximum Chaos Mode styles to document
 */
export function applyMaximumChaosMode(): void {
	document.documentElement.classList.add('konami-chaos-mode');

	// Add notification
	showKonamiNotification();
}

/**
 * Remove Maximum Chaos Mode styles
 */
export function removeMaximumChaosMode(): void {
	document.documentElement.classList.remove('konami-chaos-mode');
}

/**
 * Show temporary notification when Konami is activated
 */
function showKonamiNotification(): void {
	const notification = document.createElement('div');
	notification.className = 'konami-notification';
	notification.innerHTML = `
		<div class="konami-content">
			<div class="konami-title">🎮 MAXIMUM CHAOS MODE ACTIVATED 🎮</div>
			<div class="konami-subtitle">Comic Sans engaged. Reality distorting. Vibes immaculate.</div>
			<div class="konami-hint">Press ESC to restore sanity</div>
		</div>
	`;

	document.body.appendChild(notification);

	// Fade in
	setTimeout(() => notification.classList.add('show'), 10);

	// Fade out after 5 seconds
	setTimeout(() => {
		notification.classList.remove('show');
		setTimeout(() => notification.remove(), 300);
	}, 5000);

	// ESC key to deactivate
	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			deactivateKonami();
			removeMaximumChaosMode();
			document.removeEventListener('keydown', handleEscape);
		}
	};
	document.addEventListener('keydown', handleEscape);
}

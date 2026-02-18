// src/lib/actions/scrollReveal.ts

/**
 * ScrollReveal - Svelte action for scroll-triggered fade-in animations.
 * Uses Intersection Observer for performance.
 *
 * Usage:
 *   <div use:scrollReveal>Content</div>
 *   <div use:scrollReveal={{ threshold: 0.3, delay: 200 }}>Delayed</div>
 */

interface ScrollRevealOptions {
	/** How much of the element must be visible (0-1). Default: 0.15 */
	threshold?: number;
	/** Delay before animation starts (ms). Default: 0 */
	delay?: number;
	/** Root margin for early triggering. Default: '0px 0px -50px 0px' */
	rootMargin?: string;
}

export function scrollReveal(node: HTMLElement, options: ScrollRevealOptions = {}) {
	const { threshold = 0.15, delay = 0, rootMargin = '0px 0px -50px 0px' } = options;

	// Set initial hidden state via inline styles
	node.style.opacity = '0';
	node.style.transform = 'translateY(20px)';
	node.style.transition = `opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)`;

	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

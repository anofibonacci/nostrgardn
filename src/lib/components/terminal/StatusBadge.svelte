<script lang="ts">
	/**
	 * StatusBadge - Terminal-style status indicator
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Usage:
	 *   <StatusBadge status="connected">3/5 relays</StatusBadge>
	 *   <StatusBadge status="disconnected" icon="✗">Offline</StatusBadge>
	 *   <StatusBadge role="master">Master Gardener</StatusBadge>
	 *   <StatusBadge role="gardener" pulse>Trusted</StatusBadge>
	 */

	type Status = 'connected' | 'disconnected' | 'connecting' | 'warning';
	type Role = 'master' | 'gardener' | 'pleb' | 'blocked';

	export let status: Status | undefined = undefined;
	export let role: Role | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let pulse: boolean = false;
	export let mono: boolean = true; // Use monospace font by default

	// Auto-select icon based on status or role if not provided
	$: defaultIcon = status
		? status === 'connected'
			? '✓'
			: status === 'disconnected'
				? '✗'
				: status === 'warning'
					? '⚠'
					: '...'
		: role === 'master'
			? '🛠️'
			: role === 'gardener'
				? '🌿'
				: role === 'pleb'
					? '🌱'
					: role === 'blocked'
						? '🚫'
						: '';

	$: displayIcon = icon !== undefined ? icon : defaultIcon;

	// Determine variant class
	$: variantClass = status || role || 'default';
</script>

<span
	class="status-badge"
	class:mono
	class:pulse
	class:connected={status === 'connected'}
	class:disconnected={status === 'disconnected'}
	class:connecting={status === 'connecting'}
	class:warning={status === 'warning'}
	class:master={role === 'master'}
	class:gardener={role === 'gardener'}
	class:pleb={role === 'pleb'}
	class:blocked={role === 'blocked'}
>
	{#if displayIcon}
		<span class="icon" aria-hidden="true">{displayIcon}</span>
	{/if}
	<span class="label">
		<slot />
	</span>
</span>

<style>
	.status-badge {
		/* Layout */
		display: inline-flex;
		align-items: center;
		gap: var(--space-2xs);
		padding: var(--space-2xs) var(--space-xs);

		/* Typography */
		font-size: var(--font-size-0);
		font-weight: 500;
		line-height: 1;

		/* Colors - default */
		background: var(--terminal-gray-dark);
		color: var(--text-secondary);
		border: 1px solid var(--border-subtle);

		/* Effects */
		border-radius: var(--radius-sm);
		transition: all var(--duration-fast) var(--ease-out);

		/* Wabi-sabi: Slight imperfection */
		transform: translateY(var(--wobble-sm));
	}

	.status-badge.mono {
		font-family: var(--font-mono);
	}

	/* Status variants */
	.status-badge.connected {
		background: rgba(74, 95, 63, 0.2);
		color: var(--moss-green);
		border-color: var(--moss-green);
	}

	.status-badge.disconnected {
		background: rgba(160, 82, 45, 0.2);
		color: var(--clay-terracotta);
		border-color: var(--clay-terracotta);
	}

	.status-badge.connecting {
		background: rgba(255, 149, 0, 0.2);
		color: var(--amber-warm);
		border-color: var(--amber-warm);
	}

	.status-badge.warning {
		background: rgba(255, 149, 0, 0.2);
		color: var(--amber-warm);
		border-color: var(--amber-dark);
	}

	/* Role variants */
	.status-badge.master {
		background: rgba(0, 255, 65, 0.1);
		color: var(--code-rain);
		border-color: var(--code-accent);
		font-weight: 600;
	}

	.status-badge.gardener {
		background: rgba(74, 95, 63, 0.2);
		color: var(--moss-green);
		border-color: var(--nature-primary);
	}

	.status-badge.pleb {
		background: var(--terminal-gray-dark);
		color: var(--text-secondary);
		border-color: var(--border-subtle);
	}

	.status-badge.blocked {
		background: rgba(107, 68, 35, 0.2);
		color: var(--earth-brown);
		border-color: var(--earth-brown);
		opacity: 0.7;
	}

	/* Pulse animation for active/connecting states */
	.status-badge.pulse {
		animation: pulse-badge 2s ease-in-out infinite;
	}

	@keyframes pulse-badge {
		0%,
		100% {
			box-shadow: 0 0 0 0 currentColor;
		}
		50% {
			box-shadow: 0 0 8px 2px currentColor;
		}
	}

	/* Connecting animation */
	.status-badge.connecting .icon {
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.icon {
		font-size: var(--font-size-1);
		line-height: 1;
	}

	.label {
		white-space: nowrap;
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.status-badge,
		.status-badge.pulse,
		.status-badge.connecting .icon {
			animation: none !important;
		}
	}
</style>

<script lang="ts">
	/**
	 * RelayStatus - Real-time Nostr relay connection monitor
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Terminal-style widget showing live relay WebSocket status
	 *
	 * Usage:
	 *   <RelayStatus />
	 */

	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import StatusBadge from './terminal/StatusBadge.svelte';
	import ndk from '$lib/stores/ndk';
	import type { NDKRelay } from '@nostr-dev-kit/ndk';

	type RelayInfo = {
		url: string;
		status: 'connected' | 'disconnected' | 'connecting';
		events: number;
		latency?: number;
	};

	let relays: RelayInfo[] = [];
	let totalEvents = 0;
	let isExpanded = false;
	let updateInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		if (!browser) return;

		// Initial load
		updateRelayStatus();

		// Update every 2 seconds
		updateInterval = setInterval(() => {
			updateRelayStatus();
		}, 2000);
	});

	onDestroy(() => {
		if (updateInterval) clearInterval(updateInterval);
	});

	function updateRelayStatus() {
		// Defensive checks for NDK initialization
		if (!$ndk) {
			console.warn('[RelayStatus] NDK not initialized yet');
			relays = [];
			return;
		}

		const pool = $ndk.pool;
		if (!pool || !pool.relays) {
			console.warn('[RelayStatus] NDK pool not ready yet');
			relays = [];
			return;
		}

		try {
			const connectedRelays: NDKRelay[] =
				pool.relays.size > 0 ? Array.from(pool.relays.values()) : [];

			relays = connectedRelays.map((relay) => {
				const isConnected = relay.status === 1; // NDKRelayStatus.CONNECTED = 1
				const isConnecting = relay.status === 0; // NDKRelayStatus.CONNECTING = 0

				return {
					url: relay.url,
					status: isConnected ? 'connected' : isConnecting ? 'connecting' : 'disconnected',
					events: relay.stats?.events?.sent || 0,
					latency: undefined // NDK doesn't expose latency directly
				};
			});

			totalEvents = relays.reduce((sum, relay) => sum + relay.events, 0);
		} catch (err) {
			console.error('[RelayStatus] Error updating relay status:', err);
			relays = [];
		}
	}

	function formatRelayUrl(url: string): string {
		return url.replace('wss://', '').replace('ws://', '');
	}

	$: connectedCount = relays.filter((r) => r.status === 'connected').length;
	$: statusSummary = `${connectedCount}/${relays.length}`;
	$: overallStatus =
		connectedCount === 0 ? 'disconnected' : connectedCount < relays.length ? 'warning' : 'connected';
</script>

<div class="relay-status-widget">
	<button
		class="status-header font-mono"
		on:click={() => (isExpanded = !isExpanded)}
		aria-expanded={isExpanded}
		aria-label="Toggle relay status details"
	>
		<span class="prompt">$</span>
		<span class="title">relay-status</span>
		<StatusBadge status={overallStatus} pulse={overallStatus === 'connected'}>
			{statusSummary}
		</StatusBadge>
		<span class="expand-icon">{isExpanded ? '▼' : '▶'}</span>
	</button>

	{#if isExpanded}
		<div class="status-details font-mono">
			<!-- Summary Stats -->
			<div class="stats-row">
				<div class="stat">
					<span class="stat-label">Connected:</span>
					<span class="stat-value connected">{connectedCount}</span>
				</div>
				<div class="stat">
					<span class="stat-label">Total:</span>
					<span class="stat-value">{relays.length}</span>
				</div>
				<div class="stat">
					<span class="stat-label">Events:</span>
					<span class="stat-value">{totalEvents}</span>
				</div>
			</div>

			<!-- Individual Relays -->
			<div class="relay-list">
				{#each relays as relay (relay.url)}
					<div class="relay-item">
						<StatusBadge
							status={relay.status}
							pulse={relay.status === 'connecting'}
							mono={true}
						/>
						<span class="relay-url" class:connected={relay.status === 'connected'}>
							{formatRelayUrl(relay.url)}
						</span>
						{#if relay.events > 0}
							<span class="relay-events">[{relay.events} events]</span>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Terminal Footer -->
			<div class="terminal-footer">
				<span class="prompt">~$</span>
				<span class="command">nostr relay monitor --live</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.relay-status-widget {
		background: var(--terminal-gray-dark);
		border: 1px solid var(--border-accent);
		border-radius: var(--radius-md);
		overflow: hidden;
		max-width: 600px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.status-header {
		width: 100%;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-md);
		background: var(--terminal-black);
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		transition: background var(--duration-fast);
		font-size: var(--font-size-0);
	}

	.status-header:hover {
		background: var(--terminal-gray-dark);
	}

	.prompt {
		color: var(--code-rain);
		font-weight: bold;
	}

	.title {
		flex: 1;
		text-align: left;
		color: var(--text-terminal);
	}

	.expand-icon {
		color: var(--text-tertiary);
		font-size: var(--font-size-00);
		transition: transform var(--duration-fast);
	}

	.status-details {
		padding: var(--space-md);
		background: var(--terminal-gray-dark);
		border-top: 1px solid var(--border-subtle);
	}

	.stats-row {
		display: flex;
		gap: var(--space-lg);
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-md);
		border-bottom: 1px dashed var(--border-subtle);
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xs);
	}

	.stat-label {
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.stat-value {
		font-size: var(--font-size-2);
		color: var(--text-primary);
		font-weight: bold;
	}

	.stat-value.connected {
		color: var(--code-rain);
	}

	.relay-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
	}

	.relay-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-0);
		padding: var(--space-xs) 0;
	}

	.relay-url {
		flex: 1;
		color: var(--text-secondary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.relay-url.connected {
		color: var(--text-primary);
	}

	.relay-events {
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
	}

	.terminal-footer {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		padding-top: var(--space-md);
		border-top: 1px dashed var(--border-subtle);
		font-size: var(--font-size-00);
		color: var(--text-tertiary);
	}

	.terminal-footer .prompt {
		color: var(--amber-warm);
	}

	.terminal-footer .command {
		color: var(--text-secondary);
	}

	/* Mobile responsive */
	@media (max-width: 640px) {
		.stats-row {
			flex-direction: column;
			gap: var(--space-md);
		}

		.relay-url {
			font-size: var(--font-size-00);
		}
	}
</style>

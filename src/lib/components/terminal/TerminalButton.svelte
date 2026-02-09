<script lang="ts">
	/**
	 * TerminalButton - Terminal-style button component
	 * Part of "The Handbuilt Greenhouse" design system
	 *
	 * Usage:
	 *   <TerminalButton on:click={handler}>Run Script</TerminalButton>
	 *   <TerminalButton variant="primary" icon="$">Enter Garden</TerminalButton>
	 *   <TerminalButton variant="danger" disabled>Blocked</TerminalButton>
	 */

	type Variant = 'default' | 'primary' | 'success' | 'danger' | 'chaos';

	export let variant: Variant = 'default';
	export let icon: string = '>'; // Terminal prompt character
	export let disabled: boolean = false;
	export let fullWidth: boolean = false;
	export let loading: boolean = false;
</script>

<button
	class="terminal-btn"
	class:primary={variant === 'primary'}
	class:success={variant === 'success'}
	class:danger={variant === 'danger'}
	class:chaos={variant === 'chaos'}
	class:full-width={fullWidth}
	class:loading
	{disabled}
	on:click
>
	<span class="prompt" aria-hidden="true">{loading ? '...' : icon}</span>
	<span class="label">
		<slot />
	</span>
</button>

<style>
	.terminal-btn {
		/* Layout */
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-sm) var(--space-md);

		/* Typography */
		font-family: var(--font-mono);
		font-size: var(--font-size-1);
		font-weight: 500;
		line-height: 1;
		text-align: left;

		/* Colors - default */
		background: var(--terminal-gray-dark);
		color: var(--text-terminal);
		border: 1px solid var(--border-accent);

		/* Effects */
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: all var(--duration-fast) var(--ease-out);
		box-shadow: var(--shadow-sm);

		/* Wabi-sabi: Slight imperfection */
		transform: translateX(var(--wobble-sm));
	}

	.terminal-btn:hover:not(:disabled) {
		background: var(--terminal-gray);
		border-color: var(--interactive-hover);
		color: var(--interactive-hover);
		box-shadow: var(--shadow-terminal);
		transform: translateX(0) translateY(-1px);
	}

	.terminal-btn:active:not(:disabled) {
		background: var(--terminal-black);
		border-color: var(--interactive-active);
		transform: translateX(0) translateY(0);
		box-shadow: var(--shadow-sm);
	}

	.terminal-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		color: var(--text-tertiary);
		border-color: var(--border-subtle);
	}

	/* Variants */
	.terminal-btn.primary {
		background: var(--interactive-default);
		color: var(--terminal-black);
		border-color: var(--code-accent);
		font-weight: 600;
	}

	.terminal-btn.primary:hover:not(:disabled) {
		background: var(--code-accent);
		border-color: var(--amber-warm);
		box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
	}

	.terminal-btn.success {
		background: var(--moss-green);
		color: var(--concrete);
		border-color: var(--nature-primary);
	}

	.terminal-btn.success:hover:not(:disabled) {
		background: var(--nature-primary);
		border-color: var(--code-rain);
	}

	.terminal-btn.danger {
		background: var(--earth-brown);
		color: var(--concrete);
		border-color: var(--clay-terracotta);
	}

	.terminal-btn.danger:hover:not(:disabled) {
		background: var(--clay-terracotta);
		border-color: var(--amber-dark);
	}

	/* Chaos variant - Comic Sans + maximum dad jokes */
	.terminal-btn.chaos {
		font-family: var(--font-chaos);
		background: var(--amber-warm);
		color: var(--terminal-black);
		border: 2px dashed var(--amber-dark);
		transform: rotate(var(--rotate-subtle));
	}

	.terminal-btn.chaos:hover:not(:disabled) {
		transform: rotate(calc(-1 * var(--rotate-subtle))) scale(1.05);
		background: var(--amber-dark);
	}

	/* Modifiers */
	.terminal-btn.full-width {
		width: 100%;
		justify-content: flex-start;
	}

	.terminal-btn.loading {
		pointer-events: none;
	}

	.terminal-btn.loading .prompt {
		animation: blink 1s steps(2) infinite;
	}

	/* Prompt character */
	.prompt {
		font-size: var(--font-size-2);
		font-weight: 700;
		color: inherit;
		line-height: 1;
	}

	.label {
		flex: 1;
	}

	/* Animations */
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0.3;
		}
	}

	/* Keyboard focus */
	.terminal-btn:focus-visible {
		outline: 2px solid var(--interactive-hover);
		outline-offset: 2px;
	}
</style>

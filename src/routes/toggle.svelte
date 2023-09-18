<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
	import { Leaf, Flower } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Flower />
			<!--<span>light</span>-->
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Leaf />
			<!--<span>dark</span>-->
		</div>
	{/if}
</button>

<style>
	div {
		stroke-width: 3px;
		size: 13px;
		color: var(--brand);
	}

	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';

	$: currentPath = $page.url.pathname;
</script>

<nav>
	<div class="nav-links">
		<a href="/" class:active={currentPath === '/'}>Home</a>
		<a href="/feed" class:active={currentPath === '/feed'}>Feed</a>
		<a href="/about" class:active={currentPath === '/about'}>About</a>
	</div>
	<div class="nav-toggle">
		<Toggle />
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: var(--size-5);
	}

	.nav-links {
		display: flex;
		gap: var(--size-4);
	}

	.nav-links a {
		color: var(--text-2);
		text-decoration: none;
		font-size: var(--font-size-0);
		padding: var(--size-1) var(--size-2);
		border-radius: var(--radius-2);
		transition: all 0.2s ease;
	}

	.nav-links a:hover {
		color: var(--text-1);
		background: var(--surface-2);
	}

	.nav-links a.active {
		color: var(--brand);
		font-weight: var(--font-weight-5);
	}

	.nav-toggle {
		display: flex;
		align-items: center;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';
	import { prefetchPosts } from '$lib/stores/posts';
	import 'open-props/buttons';
	import 'open-props/normalize';
	import 'open-props/style';

	export let data;

	// Background prefetch: start loading posts as soon as the app mounts
	// This means data will likely be ready by the time user navigates to /feed
	onMount(() => {
		if (browser) {
			console.log('[nostrgardn] Starting background prefetch...');
			prefetchPosts();
		}
	});
</script>

<div class="layout">
	<Header />

	<main class="items-center">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
		padding-top: 0;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: var(--size-1);
		}
	}
</style>

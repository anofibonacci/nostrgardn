<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';
	import 'open-props/buttons';
	import 'open-props/normalize';
	import 'open-props/style';

	export let data;
</script>

<div class="layout">
	<Header />

	<main>
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

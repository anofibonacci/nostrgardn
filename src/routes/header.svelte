<script lang="ts">
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';
</script>

<center>
	<nav>
		<Toggle />
	</nav>
</center>

<style>
	nav {
		padding-block: var(--size-7);
	}
	@media (min-width: 768px) {
		nav {
			display: absolute; /*display was flex before absolute*/
			justify-content: space-between;
		}
	}
</style>

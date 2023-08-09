<!--
<script lang="ts">
	import { fade } from 'svelte/transition'

	export let url: string
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
-->

<script lang="ts">
	import { blur } from 'svelte/transition'

	export let url: string
</script>

{#key url}
	<div class="transition" in:blur={{ amount: 10, duration: 500 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>

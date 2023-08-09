<script lang="ts">
	import * as config from '$lib/config'
	import { text } from '@sveltejs/kit'
	import Toggle from './toggle.svelte'
	import Transition from './transition.svelte'
</script>

<section>
	<nav>
		<ul class="links">
			<li><a href="/about">nostrgardn</a></li>
		</ul>
	</nav>
	<img src="static/IMG_8530.jpeg" width="50" height="50" alt="idk" />
</section>

<style>
	img {
		border: 2px;
	}

	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
		font-size: 200px;
	}

	a:hover {
		text-shadow: rgb(255, 255, 255) 5px 2px 5px;
	}

	@media (min-width: 768px) {
		nav {
			white-space: nowrap;
			word-break: normal;
			display: flex;
			/* justify-content: space-between; */
		}

		.links {
			display: flex;
			gap: var(--size-3);
			margin-block: 0;
		}
	}
</style>

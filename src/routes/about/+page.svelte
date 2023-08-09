<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
</nav>
<h1><i>California, USA</i></h1>
<p>
	Digging holes, planting seeds, and watering so others may view our garden in a perpetual state of
	awe.
</p>

<style>
	h1 {
		font-size: 25px;
	}

	a {
		font-size: 100px;
		color: inherit;
	}

	a:hover {
		text-decoration: none;
		text-shadow: rgb(255, 255, 255) 5px 2px 5px;
	}

	p {
		font-size: 20px;
		white-space: nowrap;
		word-break: normal;
		display: flex;
	}
</style>

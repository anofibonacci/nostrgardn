<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<center>
		<p>developed at <b>{config.title}</b> &copy {new Date().getFullYear()}</p>
	</center>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
	}

	p {
		color: var(--text-2);
	}
</style>

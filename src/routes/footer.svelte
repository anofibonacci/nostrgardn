<script lang="ts">
	import { site } from '$lib/config';
</script>

<footer>
	<center>
		<p>developed at <b>{site.title}</b> &copy; {new Date().getFullYear()}</p>
	</center>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
	}

	p {
		color: var(--text-2);
		color: var(--text-2);
		font-size: var(--font-size-1);
		opacity: 0.6;
	}
</style>

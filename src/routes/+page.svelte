<script lang="ts">
	import FullPostCard from '$lib/components/FullPostCard.svelte';
	import PhotoOnlyFrame from '$lib/components/PhotoOnlyFrame.svelte';
	import ndkStore from '$lib/stores/ndk';
	import { gardnNpub } from '$lib/config';

	const eventsPromise = $ndkStore.fetchEvents({
		kinds: [1]
	});
	const myNine = 'e2b1b6aba';
	//post.pubkey.substring(0,9) == myNine
</script>

<section>
	<nav>
		<h1><a href="/about">nostrgardn</a></h1>
	</nav>
	<!--
  <div class="image-container">
    <img src="IMG_8530.jpeg" alt="idk" />
    <img src="IMG_8531.jpeg" alt="idk" />
    <img src="IMG_8532.jpeg" alt="idk" />
  </div>
  <p>&nbsp;</p>
  -->

	{#await eventsPromise then events}
		{#each Array.from(events) as post}
			{#if post.pubkey == gardnNpub}
				<FullPostCard {post} />
			{:else}
				<PhotoOnlyFrame {post} />
			{/if}
		{/each}
	{/await}
</section>

<style>
	h1 {
		font-size: 200px;
		font-weight: var(--font-weight-3);
		margin-block: var(--size-1);
	}

	.image-container {
		text-align: left;
	}

	img {
		border: 10px double rgb(95, 195, 154);
		display: inline-block;
		width: 350px;
		margin-right: 10px;
	}

	img:hover {
		border: 5px solid white;
		box-shadow: rgb(95, 195, 154) 0px 0px 10px;
	}

	nav {
		padding-block: var(--size-1);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: white;
		text-shadow: rgb(58, 161, 130) 0px 0px 10px;
	}

	@media (min-width: 768px) {
		nav {
			white-space: nowrap;
			word-break: normal;
			display: flex;
			/* justify-content: space-between; */
		}
	}
</style>

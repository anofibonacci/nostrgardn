<script lang="ts">
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser } from '@nostr-dev-kit/ndk';
	import dayjs from 'dayjs';

	export let post: NDKEvent;
	//console.log("photo only post: ", post);

	async function getAuthorProfile() {
		let author: NDKUser = $ndk.getUser({ hexpubkey: post.pubkey });
		author.fetchProfile();
		const authorName = (await author.profile?.displayName)
			? author.profile.displayName
			: author.profile?.name
			? author.profile.name
			: 'anonymous';
		console.log('author: ', authorName);
		return authorName;
	}

	let content: string = post.content;
	let rTag: number = 0;

	// grabbing images that are in tags (type r)
	function isImageLink(text: string) {
		var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
		return text.match(imageSuffixPatternRegex);
	}

	// parsing images that are embedded in the post's content
	function grabImagesFromPost(text: string) {
		var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
		//var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
		var matchedUrls = text.match(urlPattern);
		if (matchedUrls) {
			console.log('matchedUrls: ', matchedUrls);
			return matchedUrls;
		} else {
			console.log('no matched Urls');
			return false;
		}
	}
</script>

{#if post.tags.length > 0}
	<div class="photoOnlyBlock">
		{#each Array.from(post.tags) as tag}
			{#if tag[0] == 'r' && isImageLink(tag[1])}
				{#if rTag == 0}<!-- want to move <div> to here but won't compile -->{/if}
				<img src={tag[1]} alt="tagged from user: {post.pubkey.substring(0, 9)}" />
			{/if}
		{/each}
		<span>
			{#await getAuthorProfile()}
				<p>loading...</p>
			{:then authorName}<p>{authorName} {post.pubkey}</p>
			{/await}
		</span>
	</div>
{:else if grabImagesFromPost(content)}
	<div class="photoOnlyBlock">
		{#each Array.from(grabImagesFromPost(content)) as imageUrl}
			<img src={imageUrl} alt="embedded from user: {post.pubkey.substring(0, 9)}" />
		{/each}
		<span>
			{#await getAuthorProfile()}
				<p>loading...</p>
			{:then authorName}<p>{authorName} {post.pubkey}</p>
			{/await}
		</span>
	</div>
{/if}

<style>
	h6 {
		color: rgb(193, 127, 196);
	}
	.photoOnlyBlock {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		padding: 1rem;
		background-color: var(--surface-4);
		border: 1px solid var(--color-gray-2);
		border-radius: var(--size-3);
		box-shadow: 0 0 0.5rem var(--color-shadow);
		margin-bottom: var(--size-2);
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
</style>

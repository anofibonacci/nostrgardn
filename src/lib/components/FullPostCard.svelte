<script lang="ts">
	import { gardnNpub } from '$lib/config';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import dayjs from 'dayjs';
	import { skips } from '$lib/skip_these';

	export let post: NDKEvent;
	console.log("full post: ", post);

	let content: string = post.content;

	function linkify(text: string) {
		var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
		var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
		var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
		return text
			.replace(urlPattern, '<a href="$&" target="_blank">$&</a>')
			.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>')
			.replace(emailAddressPattern, '<a href="mailto:$&" target="_blank">$&</a>');
	}

	function addLineBreaks(text: string) {
		var regex1 = /\n|\r{1}/gim;
		var regex2 = /<br>{2,}/gim;
		var revised = text.replace(regex1, '<br />');
		return revised.replace(regex2, '<br />');
	}

	function convertLinkToImage(text: string) {
		var imageHidingAsLinkPatternRegex =
			/<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
		var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
		var br = '<br />';
		var p = '<p>&nbsp;</p>';
		return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
			var alt = link.replace(/^https?:\/\//, '').replace(imageSuffixPatternRegex, '');
			return `<a href="${link}" target="_blank"><img src="${link}" 
  alt="${alt}"></a>`;
		});
	}

	function skipThisPost(id: string) {
		if (skips.includes(id)) {
			console.log("skipping post: ", id);
			return true;
		} else {
			return false;
		}
	}
</script>

<div class="fullPostBlock">
	<h5><a href="https://primal.net/profile/{gardnNpub}" target="_blank">nostrgardn</a></h5>
	<h6>
		{dayjs.unix(post.created_at ?? 0).format('MMM D, YYYY h:mm a')}<br />&nbsp;
	</h6>
	{#if skipThisPost(post.id)}
			<p>This picture did not load 😢</p>
	{:else}
		<p>{@html convertLinkToImage(addLineBreaks(linkify(content)))}</p>
	{/if}
</div>

<style>
	p {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-2);
		line-height: var(--line-height-3);
		margin-block: var(--size-1);
		text-align: left;
		color: var(--text-1);
	}
	h5 {
		color: var(--text-2);
	}
	h6 {
		color: var(--text-3);
	}
	a {
		color: var(--text-a);
	}
	.fullPostBlock {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: max-content;
		margin-top: var(--size-4);
		padding-top: var(--size-4);
		padding-left: var(--size-7);
		padding-right: var(--size-6);
		padding-bottom: var(--size-3);
		margin-bottom: var(--size-2);
		background-color: var(--surface-2);
		border: 4px solid var(--surface-3);
		border-radius: var(--size-3);
		box-shadow: 0 0 0.5rem var(--color-shadow);
	}
</style>

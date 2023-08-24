<script lang="ts">
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import dayjs from 'dayjs';

	export let post: NDKEvent;
	//console.log("full post: ", post);

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
		var regex = /\n|\r{1}/gim;
		return text.replace(regex, '<br />');
	}

	function convertLinkToImage(text: string) {
		var imageHidingAsLinkPatternRegex =
			/<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
		var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
		var br = '<br />';
		var p = '<p>&nbsp;</p>';
		return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
			var alt = link.replace(/^https?:\/\//, '').replace(imageSuffixPatternRegex, '');
			return `${br}<a href="${link}" target="_blank"><img src="${link}" 
  alt="${alt}"></a>${br}`;
		});
	}
</script>

<div class="fullPostBlock">
	<h5>nostrgardn</h5>
	<h6>
		{dayjs.unix(post.created_at ?? 0).format('MMM D, YYYY h:mm a')}<br />&nbsp;
	</h6>
	<p>{@html convertLinkToImage(addLineBreaks(linkify(content)))}</p>
</div>

<style>
	h6 {
		color: rgb(193, 127, 196);
	}
	.fullPostBlock {
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
	img {
		border: 10px double rgb(95, 195, 154);
		display: inline-block;
		width: 350px;
		margin-right: 10px;
	}
</style>

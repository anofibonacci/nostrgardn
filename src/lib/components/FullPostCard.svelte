<script lang="ts">
	import type { FilteredPost } from '$lib/filters';
	import { whitelist, display } from '$lib/config';
	import { truncatedBech } from '$lib/utils';
	import DOMPurify from 'dompurify';
	import dayjs from 'dayjs';

	export let post: FilteredPost;

	// Get display name with fallbacks
	$: authorName = post.author.displayName || post.author.name || 'nostrgardn';
	$: authorPicture = post.author.picture;
	$: formattedDate = dayjs.unix(post.createdAt).format(display.dateFormat);
	$: content = post.event.content;

	/**
	 * Convert URLs in text to clickable links
	 */
	function linkify(text: string): string {
		const urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
		const pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
		const emailPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

		return text
			.replace(urlPattern, '<a href="$&" target="_blank" rel="noopener">$&</a>')
			.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank" rel="noopener">$2</a>')
			.replace(emailPattern, '<a href="mailto:$&">$&</a>');
	}

	/**
	 * Convert newlines to <br> tags
	 */
	function addLineBreaks(text: string): string {
		return text.replace(/\n|\r/gim, '<br />').replace(/<br\s*\/?>\s*(<br\s*\/?>)+/gim, '<br /><br />');
	}

	/**
	 * Convert image URLs that were linkified back to actual images
	 */
	function convertLinkToImage(text: string): string {
		const imagePattern = /<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg|avif)(\?[^"]*)?)"\s+[^>]*>([^<]+)<\/a>/gi;

		return text.replace(imagePattern, (_, url) => {
			return `<a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="Posted image" loading="lazy" /></a>`;
		});
	}

	/**
	 * Process content for display
	 * Sanitizes HTML to prevent XSS from malicious Nostr event content
	 */
	function processContent(text: string): string {
		const processed = convertLinkToImage(addLineBreaks(linkify(text)));
		return DOMPurify.sanitize(processed, {
			ALLOWED_TAGS: ['a', 'img', 'br', 'p', 'span', 'strong', 'em'],
			ALLOWED_ATTR: ['href', 'src', 'alt', 'target', 'rel', 'loading', 'class']
		});
	}
</script>

<article class="full-post wabi-vary wabi-texture-paper">
	<header>
		{#if authorPicture}
			<img src={authorPicture} alt="" class="avatar" />
		{/if}
		<div class="meta">
			<a
				href="https://nosta.me/{post.author.pubkey}"
				target="_blank"
				rel="noopener"
				class="author"
			>
				{authorName}
			</a>
			<time datetime={new Date(post.createdAt * 1000).toISOString()}>
				{formattedDate}
			</time>
		</div>
	</header>

	<div class="content">
		{@html processContent(content)}
	</div>

	<!-- Show extracted images that might not be in content -->
	{#if post.images.length > 0}
		<div class="images">
			{#each post.images as src}
				{#if !content.includes(src)}
					<a href={src} target="_blank" rel="noopener">
						<img {src} alt="Posted image" loading="lazy" />
					</a>
				{/if}
			{/each}
		</div>
	{/if}
</article>

<style>
	.full-post {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: 600px;
		/* Wabi-sabi: Asymmetric padding — hand-placed, not machine-perfect */
		padding: 1.1rem 1.25rem 1rem 1.15rem;
		background-color: var(--surface-2);
		/* Wabi-sabi: Dashed border like a garden sketch */
		border: 1px dashed var(--brand, #00ff41);
		border-left: 3px solid var(--brand, #00ff41);
		border-radius: 2px 6px 4px 8px;
		box-shadow:
			2px 3px 0px rgba(0, 255, 65, 0.08),
			inset 0 0 30px rgba(0, 255, 65, 0.02);
	}

	header {
		display: flex;
		align-items: center;
		gap: var(--size-3);
		margin-bottom: var(--size-3);
	}

	.avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.meta {
		display: flex;
		flex-direction: column;
	}

	.author {
		color: var(--text-2);
		font-weight: var(--font-weight-5);
		text-decoration: none;
	}

	.author:hover {
		color: var(--text-ahover);
	}

	time {
		color: var(--text-3);
		font-size: var(--font-size-0);
	}

	.content {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-2);
		line-height: var(--line-height-3);
		color: var(--text-1);
		word-break: break-word;
	}

	.content :global(a) {
		color: var(--text-a);
	}

	.content :global(a:hover) {
		color: var(--text-ahover);
	}

	.content :global(img),
	.images img {
		max-width: 100%;
		height: auto;
		margin-block: var(--size-2);
		border-radius: var(--radius-2);
	}

	.images {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin-top: var(--size-3);
	}

	.images a {
		display: block;
	}
</style>

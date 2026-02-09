<script lang="ts">
	import type { FilteredPost } from '$lib/filters';
	import { display } from '$lib/config';
	import { truncatedBech } from '$lib/utils';
	import dayjs from 'dayjs';

	export let post: FilteredPost;

	// Images are pre-extracted by the filter
	$: images = post.images;

	// Author info with fallbacks
	$: authorName = post.author.displayName || post.author.name || truncatedBech(post.author.npub || post.author.pubkey);
	$: authorPicture = post.author.picture;
	$: formattedDate = dayjs.unix(post.createdAt).format(display.dateFormat);
</script>

{#if images.length > 0}
	<article class="photo-frame wabi-vary wabi-texture-concrete">
		<div class="images" class:single={images.length === 1} class:multiple={images.length > 1}>
			{#each images as src, i}
				<a href={src} target="_blank" rel="noopener" class="image-link">
					<img {src} alt="Guest photo {i + 1}" loading="lazy" />
				</a>
			{/each}
		</div>

		<footer>
			<div class="author-info">
				{#if authorPicture}
					<img src={authorPicture} alt="" class="avatar" />
				{/if}
				<a
					href="https://nosta.me/{post.author.pubkey}"
					target="_blank"
					rel="noopener"
					class="author-link"
				>
					@{authorName}
				</a>
			</div>
			<time datetime={new Date(post.createdAt * 1000).toISOString()}>
				{formattedDate}
			</time>
		</footer>
	</article>
{/if}

<style>
	.photo-frame {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 700px;
		/* Wabi-sabi: Asymmetric padding */
		padding: 1.15rem 1.2rem 1.05rem 1.3rem;
		background-color: var(--surface-2);
		/* Wabi-sabi: Double border like an old picture frame */
		border: 3px double var(--brand, #00ff41);
		border-radius: 4px 2px 6px 3px;
		box-shadow:
			-2px 2px 0px rgba(0, 255, 65, 0.08),
			inset 0 0 30px rgba(0, 255, 65, 0.02);
	}

	.images {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		justify-content: center;
	}

	.images.single .image-link {
		width: 100%;
	}

	.images.multiple .image-link {
		flex: 1 1 300px;
		max-width: 350px;
	}

	.image-link {
		display: block;
	}

	.images img {
		width: 100%;
		height: auto;
		border: 8px double rgb(95, 195, 154);
		border-radius: var(--radius-2);
		transition: border 0.2s ease;
	}

	.images img:hover {
		border: 4px solid white;
		box-shadow: rgb(95, 195, 154) 0px 0px 10px;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: var(--size-3);
		padding-top: var(--size-2);
		border-top: 1px solid var(--surface-5);
	}

	.author-info {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
	}

	.author-link {
		color: var(--text-1);
		text-decoration: none;
		font-size: var(--font-size-1);
	}

	.author-link:hover {
		color: var(--text-ahover);
	}

	time {
		color: var(--text-3);
		font-size: var(--font-size-0);
	}
</style>

<script lang="ts">
	import type { NDKEvent, NDKUser } from '@nostr-dev-kit/ndk';
	import ndkStore from '$lib/stores/ndk';
    import { truncatedBech } from '$lib/utils';
	import dayjs from 'dayjs';

	export let post: NDKEvent;
	//console.log("photo only post: ", post);

	let content: string = post.content;
	//console.log("content: ", post.content);

	//let guest: NDKUser = post.pubkey;

	let source: string = '';

	let photos: string[] = [];
	//console.log('photos: ', photos);

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
			//console.log('matchedUrls: ', matchedUrls);
			return matchedUrls;
		} else {
			//console.log('no matched Urls');
			return false;
		}
	}

	async function checkForPhotos() {
		if (post.tags.length > 0) {
			for (let tag of post.tags) {
				if (tag[0] == 'r' && isImageLink(tag[1])) {
					photos.push(tag[1]);
					source = 'tag';
				}
			}
		} else if (grabImagesFromPost(content)) {
			for (let imageUrl of grabImagesFromPost(content)) {
				photos.push(imageUrl);
				source = 'embed';
			}
		} else {
			console.log('no photos');
		}
	}

    function fetchUsername(ndkUser: NDKUser): Promise<string> {
        let name: string;
        return new Promise((resolve, reject) => {
            ndkUser.fetchProfile().then(() => {
                name =
                    ndkUser.profile?.displayName ||
                    ndkUser.profile?.name ||
                    truncatedBech(ndkUser.npub);
                resolve(name);
            });
        });
    }
</script>

{#await checkForPhotos()}
	<p>loading...</p>
{:then}
	{#if photos.length > 0}
		<div class="photoOnlyBlock">
			<div class="image-container">
				{#each photos as photo}
					<a href={photo} target="_blank"
						><img
							style="margin:9px;"
							src={photo}
							alt="{source} from user: {post.pubkey.substring(0, 9)}"
						/></a
					>
				{/each}
			</div>
			<p>guest posted by: 
				<a href="https://primal.net/profile/{post.pubkey}" target="_blank">
					{#await fetchUsername($ndkStore.getUser({ hexpubkey: post.pubkey })) then name}
						@{name}
					{/await}
				</a></p>
				<h6>
					{dayjs.unix(post.created_at ?? 0).format('MMM D, YYYY h:mm a')}<br />&nbsp;
				</h6>
		</div>
	{/if}
{:catch error}
	<p>error: {error.message}</p>
{/await}

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
	.photoOnlyBlock {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: max-content;
		margin-top: var(--size-4);
		padding-top: var(--size-4);
		padding-inline: var(--size-4);
		padding-bottom: var(--size-3);
		margin-bottom: var(--size-2);
		background-color: var(--surface-4);
		border: 4px solid var(--surface-5);
		border-radius: var(--size-3);
		box-shadow: 0 0 0.5rem var(--color-shadow);
	}
	.image-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	img {
		border: 10px double rgb(95, 195, 154);
		display: inline-block;
		width: 350px;
		margin-right: 10px;
	}
</style>

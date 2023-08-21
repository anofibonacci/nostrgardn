<script lang="ts">
  import type { NDKEvent } from "@nostr-dev-kit/ndk";
  import ndk from "$lib/stores/ndk";
  import dayjs from "dayjs";

  const myNine = "e2b1b6aba";

  export let post: NDKEvent;
  console.log("post: ", post);

  let content: string = post.content;

  function linkify(text: string) {
    var urlPattern =
      /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
    var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
    return text
      .replace(urlPattern, '<a href="$&" target="_blank">$&</a>')
      .replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>')
      .replace(
        emailAddressPattern,
        '<a href="mailto:$&" target="_blank">$&</a>'
      );
  }

  function addLineBreaks(text: string) {
    var regex = /\n|\r{1}/gim;
    return text.replace(regex, "<br />");
  }

  function convertLinkToImage(text: string) {
    var imageHidingAsLinkPatternRegex =
      /<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
    var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
    var br = "<br />";
    var p = "<p>&nbsp;</p>";
    return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
      var alt = link
        .replace(/^https?:\/\//, "")
        .replace(imageSuffixPatternRegex, "");
      return `${br}<a href="${link}" target="_blank"><img src="${link}" 
alt="${alt}"></a>${br}`;
    });
  }

  function isImageLink(text: string) {
    var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
    return text.match(imageSuffixPatternRegex);
  }
</script>

{#if post.pubkey.substring(0,9) == myNine}
<div class="eventBlock">
  <h5>{myNine}</h5>
  <h6>
    {dayjs.unix(post.created_at ?? 0).format("MMM D, YYYY h:mm a")}<br />&nbsp;
  </h6>
  <p>{@html convertLinkToImage(addLineBreaks(linkify(content)))}</p>
</div>
{:else}
  {#if post.tags}
    {#each Array.from(post.tags) as tag}
      {#if tag[0] == "r" && isImageLink(tag[1])}
      <div class="image-container">
        <img src="{tag[1]}" alt="user: {post.pubkey}">
      </div>
      {/if}
    {/each}
  {/if}
{/if}

<style>
  h6 {
    color: rgb(193, 127, 196);
  }
  .eventBlock {
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

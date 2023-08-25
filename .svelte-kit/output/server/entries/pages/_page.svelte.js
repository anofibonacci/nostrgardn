import { c as create_ssr_component, e as escape, j as is_promise, n as noop, g as each, k as add_attribute, h as subscribe, v as validate_component } from "../../chunks/ssr.js";
import NDK from "@nostr-dev-kit/ndk";
import { w as writable } from "../../chunks/index.js";
import dayjs from "dayjs";
const ndk = new NDK({
  explicitRelayUrls: ["wss://gardn.nostr1.com"],
  debug: false
});
const ndkStore = writable(ndk);
const FullPostCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h6.svelte-1xuh8jc{color:rgb(193, 127, 196)}.fullPostBlock.svelte-1xuh8jc{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:max-content;margin-top:var(--size-4);padding-top:var(--size-4);padding-left:var(--size-7);padding-right:var(--size-6);padding-bottom:var(--size-3);margin-bottom:var(--size-2);background-color:var(--surface-4);border:1px solid var(--color-gray-2);border-radius:var(--size-3);box-shadow:0 0 0.5rem var(--color-shadow)}",
  map: null
};
function linkify(text) {
  var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
  var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
  return text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>').replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>').replace(emailAddressPattern, '<a href="mailto:$&" target="_blank">$&</a>');
}
function addLineBreaks(text) {
  var regex1 = /\n|\r{1}/gim;
  var regex2 = /<br>{2,}/gim;
  var revised = text.replace(regex1, "<br />");
  return revised.replace(regex2, "<br />");
}
function convertLinkToImage(text) {
  var imageHidingAsLinkPatternRegex = /<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
  var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
  return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
    var alt = link.replace(/^https?:\/\//, "").replace(imageSuffixPatternRegex, "");
    return `<a href="${link}" target="_blank"><img src="${link}" 
  alt="${alt}"></a>`;
  });
}
const FullPostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let content = post.content;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$2);
  return `<div class="fullPostBlock svelte-1xuh8jc"><h5 data-svelte-h="svelte-r7k326">nostrgardn</h5> <h6 class="svelte-1xuh8jc">${escape(dayjs.unix(post.created_at ?? 0).format("MMM D, YYYY h:mm a"))}<br> </h6> <p><!-- HTML_TAG_START -->${convertLinkToImage(addLineBreaks(linkify(content)))}<!-- HTML_TAG_END --></p> </div>`;
});
const PhotoOnlyFrame_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h6.svelte-1t41el6{color:rgb(193, 127, 196)}.photoOnlyBlock.svelte-1t41el6{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:max-content;margin-top:var(--size-4);padding-top:var(--size-4);padding-inline:var(--size-4);padding-bottom:var(--size-3);margin-bottom:var(--size-2);background-color:var(--surface-5);border:1px solid var(--color-gray-2);border-radius:var(--size-3);box-shadow:0 0 0.5rem var(--color-shadow)}.image-container.svelte-1t41el6{display:flex;flex-direction:row;align-items:center;justify-content:center}img.svelte-1t41el6{border:10px double rgb(95, 195, 154);display:inline-block;width:350px;margin-right:10px}",
  map: null
};
function isImageLink(text) {
  var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
  return text.match(imageSuffixPatternRegex);
}
function grabImagesFromPost(text) {
  var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
  var matchedUrls = text.match(urlPattern);
  if (matchedUrls) {
    return matchedUrls;
  } else {
    return false;
  }
}
const PhotoOnlyFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let content = post.content;
  let source = "";
  let photos = [];
  async function checkForPhotos() {
    if (post.tags.length > 0) {
      for (let tag of post.tags) {
        if (tag[0] == "r" && isImageLink(tag[1])) {
          photos.push(tag[1]);
          source = "tag";
        }
      }
    } else if (grabImagesFromPost(content)) {
      for (let imageUrl of grabImagesFromPost(content)) {
        photos.push(imageUrl);
        source = "embed";
      }
    } else {
      console.log("no photos");
    }
  }
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-qeejp2">loading...</p> `;
    }
    return function() {
      return ` ${photos.length > 0 ? `<div class="photoOnlyBlock svelte-1t41el6"><h6 class="svelte-1t41el6">${escape(dayjs.unix(post.created_at ?? 0).format("MMM D, YYYY h:mm a"))}<br> </h6> <div class="image-container svelte-1t41el6">${each(photos, (photo) => {
        return `<a${add_attribute("href", photo, 0)} target="_blank"><img style="margin:9px;"${add_attribute("src", photo, 0)} alt="${escape(source, true) + " from user: " + escape(post.pubkey.substring(0, 9), true)}" class="svelte-1t41el6"></a>`;
      })}</div> <p>posted (${escape(source)}) by: ${escape(post.pubkey)}</p></div>` : ``} `;
    }();
  }(checkForPhotos())}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-88j5ve{padding-block:var(--size-1)}.links.svelte-88j5ve{margin-block:var(--size-1)}a.svelte-88j5ve{color:inherit;text-decoration:none;font-size:200px}a.svelte-88j5ve:hover{color:white;text-shadow:rgb(58, 161, 130) 0px 0px 10px}@media(min-width: 768px){nav.svelte-88j5ve{white-space:nowrap;word-break:normal;display:flex}.links.svelte-88j5ve{display:flex;gap:var(--size-3);margin-block:0}}",
  map: null
};
const myNine = "e2b1b6aba";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ndkStore, $$unsubscribe_ndkStore;
  $$unsubscribe_ndkStore = subscribe(ndkStore, (value) => $ndkStore = value);
  const eventsPromise = $ndkStore.fetchEvents({ kinds: [1] });
  $$result.css.add(css);
  $$unsubscribe_ndkStore();
  return `<section><nav class="svelte-88j5ve" data-svelte-h="svelte-15vhoep"><ul class="links svelte-88j5ve"><li><a href="/about" class="svelte-88j5ve">nostrgardn</a></li></ul></nav>  ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(events) {
      return ` ${each(Array.from(events), (post) => {
        return `${post.pubkey.substring(0, 9) == myNine ? `${validate_component(FullPostCard, "FullPostCard").$$render($$result, { post }, {}, {})}` : `${validate_component(PhotoOnlyFrame, "PhotoOnlyFrame").$$render($$result, { post }, {}, {})}`}`;
      })} `;
    }(__value);
  }(eventsPromise)} </section>`;
});
export {
  Page as default
};

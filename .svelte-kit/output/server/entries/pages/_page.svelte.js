import { c as create_ssr_component, e as escape, g as each, j as add_attribute, h as subscribe, k as is_promise, n as noop, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import NDK from "@nostr-dev-kit/ndk";
import dayjs from "dayjs";
const ndk = new NDK({
  explicitRelayUrls: ["wss://gardn.nostr1.com"],
  debug: false
});
const ndkStore = writable(ndk);
const PictureCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h6.svelte-zghf0h{color:rgb(193, 127, 196)}.eventBlock.svelte-zghf0h{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:100%;padding:1rem;background-color:var(--surface-4);border:1px solid var(--color-gray-2);border-radius:var(--size-3);box-shadow:0 0 0.5rem var(--color-shadow);margin-bottom:var(--size-2)}.image-container.svelte-zghf0h{text-align:left}img.svelte-zghf0h{border:10px double rgb(95, 195, 154);display:inline-block;width:350px;margin-right:10px}",
  map: null
};
const myNine = "e2b1b6aba";
function linkify(text) {
  var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
  var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
  return text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>').replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>').replace(emailAddressPattern, '<a href="mailto:$&" target="_blank">$&</a>');
}
function addLineBreaks(text) {
  var regex = /\n|\r{1}/gim;
  return text.replace(regex, "<br />");
}
function convertLinkToImage(text) {
  var imageHidingAsLinkPatternRegex = /<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
  var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
  var br = "<br />";
  return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
    var alt = link.replace(/^https?:\/\//, "").replace(imageSuffixPatternRegex, "");
    return `${br}<a href="${link}" target="_blank"><img src="${link}" 
alt="${alt}"></a>${br}`;
  });
}
function isImageLink(text) {
  var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
  return text.match(imageSuffixPatternRegex);
}
const PictureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  console.log("post: ", post);
  let content = post.content;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `${post.pubkey.substring(0, 9) == myNine ? `<div class="eventBlock svelte-zghf0h"><h5>${escape(myNine)}</h5> <h6 class="svelte-zghf0h">${escape(dayjs.unix(post.created_at ?? 0).format("MMM D, YYYY h:mm a"))}<br> </h6> <p><!-- HTML_TAG_START -->${convertLinkToImage(addLineBreaks(linkify(content)))}<!-- HTML_TAG_END --></p></div>` : `${post.tags ? `${each(Array.from(post.tags), (tag) => {
    return `${tag[0] == "r" && isImageLink(tag[1]) ? `<div class="image-container svelte-zghf0h"><img${add_attribute("src", tag[1], 0)} alt="${"user: " + escape(post.pubkey, true)}" class="svelte-zghf0h"> </div>` : ``}`;
  })}` : ``}`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-container.svelte-1gqsokj{text-align:left}img.svelte-1gqsokj{border:10px double rgb(95, 195, 154);display:inline-block;width:350px;margin-right:10px}img.svelte-1gqsokj:hover{border:5px solid white;box-shadow:rgb(95, 195, 154) 0px 0px 10px}nav.svelte-1gqsokj{padding-block:var(--size-7)}.links.svelte-1gqsokj{margin-block:var(--size-7)}a.svelte-1gqsokj{color:inherit;text-decoration:none;font-size:200px}a.svelte-1gqsokj:hover{color:white;text-shadow:rgb(58, 161, 130) 0px 0px 10px}@media(min-width: 768px){nav.svelte-1gqsokj{white-space:nowrap;word-break:normal;display:flex}.links.svelte-1gqsokj{display:flex;gap:var(--size-3);margin-block:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ndkStore, $$unsubscribe_ndkStore;
  $$unsubscribe_ndkStore = subscribe(ndkStore, (value) => $ndkStore = value);
  const eventsPromise = $ndkStore.fetchEvents({ kinds: [1] });
  $$result.css.add(css);
  $$unsubscribe_ndkStore();
  return `<section><nav class="svelte-1gqsokj" data-svelte-h="svelte-18bav37"><ul class="links svelte-1gqsokj"><li><a href="/about" class="svelte-1gqsokj">nostrgardn</a></li></ul></nav> <div class="image-container svelte-1gqsokj" data-svelte-h="svelte-1jv1zxw"><img src="IMG_8530.jpeg" alt="idk" class="svelte-1gqsokj"> <img src="IMG_8531.jpeg" alt="idk" class="svelte-1gqsokj"> <img src="IMG_8532.jpeg" alt="idk" class="svelte-1gqsokj"></div> <p data-svelte-h="svelte-9hmwf2"> </p> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(events) {
      return ` ${each(Array.from(events), (post) => {
        return `${validate_component(PictureCard, "PictureCard").$$render($$result, { post }, {}, {})}`;
      })} `;
    }(__value);
  }(eventsPromise)} </section>`;
});
export {
  Page as default
};

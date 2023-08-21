import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { t as title } from "../../../chunks/config.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-nnnn9c{font-size:25px}a.svelte-nnnn9c{font-size:100px;color:inherit}a.svelte-nnnn9c:hover{text-decoration:none;color:white;text-shadow:rgb(58, 161, 130) 0px 0px 10px}p.svelte-nnnn9c{font-size:20px;white-space:nowrap;word-break:normal;display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><a href="/" class="title svelte-nnnn9c"><b>${escape(title)}</b></a></nav> <h1 class="svelte-nnnn9c" data-svelte-h="svelte-1ucwr6"><i>California, USA</i></h1> <p class="svelte-nnnn9c" data-svelte-h="svelte-95h0wg">Digging holes, planting seeds, and watering so others may view our garden in a
  perpetual state of awe.
</p>`;
});
export {
  Page as default
};

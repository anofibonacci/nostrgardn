import { c as create_ssr_component, e as escape, k as add_attribute, g as each, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
function formatDate(date, dateStyle = "medium", locales = "en") {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return formatter.format(new Date(date));
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-10gsp8k.svelte-10gsp8k{max-inline-size:var(--size-content-3);margin-inline:auto}h1.svelte-10gsp8k.svelte-10gsp8k{text-transform:capitalize}h1.svelte-10gsp8k+p.svelte-10gsp8k{margin-top:var(--size-2);color:var(--text-2)}.tags.svelte-10gsp8k.svelte-10gsp8k{display:flex;gap:var(--size-3);margin-top:var(--size-7)}.tags.svelte-10gsp8k>.svelte-10gsp8k{padding:var(--size-2) var(--size-3);border-radius:var(--radius-round)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = "auto";
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` ${$$result.head += `<!-- HEAD_svelte-1hjcmj9_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-1hjcmj9_END -->`, ""} <article class="svelte-10gsp8k"> <hgroup><h1 class="svelte-10gsp8k">${escape(data.meta.title)}</h1> <p class="svelte-10gsp8k">Published at ${escape(formatDate(data.meta.date))}</p></hgroup>  <div class="tags svelte-10gsp8k">${each(data.meta.categories, (category) => {
    return `<span class="surface-4 svelte-10gsp8k">#${escape(category)}</span>`;
  })}</div>  <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> </article>`;
});
export {
  Page as default
};

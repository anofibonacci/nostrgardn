import { t as title } from "../../chunks/config.js";
import { w as writable } from "../../chunks/index.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
import {
  c as create_ssr_component,
  e as escape,
  a as compute_rest_props,
  b as spread,
  d as escape_object,
  f as escape_attribute_value,
  g as each,
  v as validate_component,
  h as subscribe,
} from "../../chunks/ssr.js";

const void_element_names =
  /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const browser = BROWSER;
const footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "footer.svelte-rd2s5b{padding-block:var(--size-7)}p.svelte-rd2s5b{color:var(--text-2)}",
  map: null,
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="svelte-rd2s5b"><center><p class="svelte-rd2s5b">developed at <b>${escape(
    title
  )}</b> © ${escape(
    /* @__PURE__ */ new Date().getFullYear()
  )}</p></center> </footer>`;
});
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if (
    $$props.strokeWidth === void 0 &&
    $$bindings.strokeWidth &&
    strokeWidth !== void 0
  )
    $$bindings.strokeWidth(strokeWidth);
  if (
    $$props.absoluteStrokeWidth === void 0 &&
    $$bindings.absoluteStrokeWidth &&
    absoluteStrokeWidth !== void 0
  )
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(
          absoluteStrokeWidth
            ? (Number(strokeWidth) * 24) / Number(size)
            : strokeWidth
        ),
      },
      {
        class: escape_attribute_value(
          `lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`
        ),
      },
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1
        ? `<${tag}${spread([escape_object(attrs)], {})}>${
            is_void(tag$1) ? "" : ``
          }${is_void(tag$1) ? "" : `</${tag$1}>`}`
        : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Flower = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "m8 16 1.5-1.5" }],
    ["path", { d: "M14.5 9.5 16 8" }],
    ["path", { d: "m8 8 1.5 1.5" }],
    ["path", { d: "M14.5 14.5 16 16" }],
  ];
  return `${validate_component(Icon$1, "Icon").$$render(
    $$result,
    Object.assign({}, { name: "flower" }, $$props, { iconNode }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      },
    }
  )}`;
});
const Flower$1 = Flower;
const Leaf = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      },
    ],
    [
      "path",
      {
        d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
      },
    ],
  ];
  return `${validate_component(Icon$1, "Icon").$$render(
    $$result,
    Object.assign({}, { name: "leaf" }, $$props, { iconNode }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      },
    }
  )}`;
});
const Leaf$1 = Leaf;
const userTheme = browser;
const theme = writable(userTheme);
const toggle_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-u3wayo.svelte-u3wayo{stroke-width:3px;size:13px}button.svelte-u3wayo.svelte-u3wayo{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-u3wayo>.svelte-u3wayo{display:flex;gap:var(--size-2)}",
  map: null,
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => ($theme = value));
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-u3wayo">${
    $theme === "dark"
      ? `<div class="svelte-u3wayo">${validate_component(
          Flower$1,
          "Flower"
        ).$$render($$result, {}, {}, {})} </div>`
      : `<div class="svelte-u3wayo">${validate_component(
          Leaf$1,
          "Leaf"
        ).$$render($$result, {}, {}, {})} </div>`
  } </button>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-axkk9j{padding-block:var(--size-7)}@media(min-width: 768px){nav.svelte-axkk9j{display:absolute;justify-content:space-between}}",
  map: null,
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<center><nav class="svelte-axkk9j">${validate_component(
    Toggle,
    "Toggle"
  ).$$render($$result, {}, {}, {})}</nav> </center>`;
});
const transition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition.svelte-l7qyos{height:100%}",
  map: null,
};
const Transition = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let { url } = $$props;
    if ($$props.url === void 0 && $$bindings.url && url !== void 0)
      $$bindings.url(url);
    $$result.css.add(css$1);
    return `  <div class="transition svelte-l7qyos">${
      slots.default ? slots.default({}) : ``
    }</div>`;
  }
);
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-3ah9f7{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-3ah9f7{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-3ah9f7{padding-inline:0}}",
  map: null,
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-3ah9f7">${validate_component(
    Header,
    "Header"
  ).$$render(
    $$result,
    {},
    {},
    {}
  )} <main class="svelte-3ah9f7">${validate_component(
    Transition,
    "PageTransition"
  ).$$render(
    $$result,
    { url: data.url },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      },
    }
  )}</main> ${validate_component(Footer, "Footer").$$render(
    $$result,
    {},
    {},
    {}
  )} </div>`;
});
export { Layout as default };

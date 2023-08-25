import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.64db99d3.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js","_app/immutable/chunks/config.0a5a2d5c.js","_app/immutable/chunks/index.84afc186.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/0.ef19a2cb.css"];
export const fonts = ["_app/immutable/assets/cormorant-cyrillic-ext-wght-normal.68fae60a.woff2","_app/immutable/assets/cormorant-cyrillic-wght-normal.3c152052.woff2","_app/immutable/assets/cormorant-vietnamese-wght-normal.a2d198c7.woff2","_app/immutable/assets/cormorant-latin-ext-wght-normal.bf0d5abc.woff2","_app/immutable/assets/cormorant-latin-wght-normal.55531389.woff2","_app/immutable/assets/inconsolata-vietnamese-wght-normal.38b604dc.woff2","_app/immutable/assets/inconsolata-latin-ext-wght-normal.50bd8168.woff2","_app/immutable/assets/inconsolata-latin-wght-normal.5d5476af.woff2"];

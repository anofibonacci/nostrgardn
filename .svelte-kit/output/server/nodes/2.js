import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.4500f956.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.0b6bcf33.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/transition.svelte_svelte_type_style_lang.e30a0d99.js","_app/immutable/chunks/index.3b5b6fbf.js"];
export const stylesheets = ["_app/immutable/assets/2.092379dc.css","_app/immutable/assets/transition.fa9528d8.css"];
export const fonts = [];

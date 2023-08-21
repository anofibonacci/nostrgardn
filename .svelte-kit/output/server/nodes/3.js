import * as universal from '../entries/pages/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.da9243bd.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.0b6bcf33.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.ebea7b33.css"];
export const fonts = [];

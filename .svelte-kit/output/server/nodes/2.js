

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6bcfa308.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.84afc186.js"];
export const stylesheets = ["_app/immutable/assets/2.843721ae.css"];
export const fonts = [];

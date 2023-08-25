

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.dc796d44.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js","_app/immutable/chunks/config.0a5a2d5c.js"];
export const stylesheets = ["_app/immutable/assets/3.e5f0ef06.css"];
export const fonts = [];

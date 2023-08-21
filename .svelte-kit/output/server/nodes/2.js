

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8d42fd6c.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.af391148.js"];
export const stylesheets = ["_app/immutable/assets/2.c8344b04.css"];
export const fonts = [];

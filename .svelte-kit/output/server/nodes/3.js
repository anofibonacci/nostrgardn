

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f26f5d08.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.af391148.js","_app/immutable/chunks/config.0a5a2d5c.js"];
export const stylesheets = ["_app/immutable/assets/3.9dd13885.css"];
export const fonts = [];

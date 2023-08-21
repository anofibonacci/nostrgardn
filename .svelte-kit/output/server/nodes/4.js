

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.cf8c2240.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.0b6bcf33.js","_app/immutable/chunks/config.0a5a2d5c.js"];
export const stylesheets = ["_app/immutable/assets/4.dde7390e.css"];
export const fonts = [];

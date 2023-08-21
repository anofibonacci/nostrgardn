

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.374a2953.js","_app/immutable/chunks/scheduler.5b5d9a22.js","_app/immutable/chunks/index.5bbdcbc7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.821ad274.js"];
export const stylesheets = ["_app/immutable/assets/2.afbfd8d7.css"];
export const fonts = [];

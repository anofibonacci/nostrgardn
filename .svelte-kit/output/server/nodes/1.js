

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0b2fe29a.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.0b6bcf33.js","_app/immutable/chunks/singletons.fd1e7e2a.js","_app/immutable/chunks/index.3b5b6fbf.js"];
export const stylesheets = ["_app/immutable/assets/1.e7eb8744.css"];
export const fonts = [];

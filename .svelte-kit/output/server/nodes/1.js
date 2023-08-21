

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f281007c.js","_app/immutable/chunks/scheduler.5b5d9a22.js","_app/immutable/chunks/index.5bbdcbc7.js","_app/immutable/chunks/singletons.299ee9b8.js","_app/immutable/chunks/index.821ad274.js"];
export const stylesheets = ["_app/immutable/assets/1.e7eb8744.css"];
export const fonts = [];

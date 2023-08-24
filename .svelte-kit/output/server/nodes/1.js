export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.a8a88708.js",
  "_app/immutable/chunks/scheduler.2bcde0a4.js",
  "_app/immutable/chunks/index.4caa21f6.js",
  "_app/immutable/chunks/singletons.4cb47995.js",
  "_app/immutable/chunks/index.1f5880ea.js",
];
export const stylesheets = ["_app/immutable/assets/1.e7eb8744.css"];
export const fonts = [];

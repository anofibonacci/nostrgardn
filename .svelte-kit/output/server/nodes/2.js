export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/2.c7fe7701.js",
  "_app/immutable/chunks/scheduler.2bcde0a4.js",
  "_app/immutable/chunks/index.4caa21f6.js",
  "_app/immutable/chunks/each.e59479a4.js",
  "_app/immutable/chunks/index.1f5880ea.js",
];
export const stylesheets = ["_app/immutable/assets/2.7f907fee.css"];
export const fonts = [];

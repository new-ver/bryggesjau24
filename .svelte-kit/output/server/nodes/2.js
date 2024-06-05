

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.NVlqtaD9.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.7I0j2CQ_.js"];
export const stylesheets = ["_app/immutable/assets/2.BEaezUwf.css"];
export const fonts = [];

import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CfBR3pL7.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.7I0j2CQ_.js","_app/immutable/chunks/entry.C-pxSeZp.js"];
export const stylesheets = ["_app/immutable/assets/0.Dm7_vCbd.css"];
export const fonts = [];

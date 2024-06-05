import * as universal from '../entries/pages/attending/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/attending/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/attending/+page.ts";
export const imports = ["_app/immutable/nodes/3.BkvG7rry.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.7I0j2CQ_.js"];
export const stylesheets = [];
export const fonts = [];

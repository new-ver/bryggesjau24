import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app svelte-itj38p"> <main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};

import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, createStaticVNode as _createStaticVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
const script = {};


export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("header", null, [...(_cache[0] || (_cache[0] = [
    _createStaticVNode("<a class=\"logo\" href=\"/\"><img alt=\"AbsoluteJS\" height=\"24\" src=\"/assets/png/absolutejs-temp.png\"> AbsoluteJS </a><nav><a href=\"/\">React</a><a href=\"/svelte\">Svelte</a><a class=\"active\" href=\"/vue\">Vue</a><a href=\"/angular\">Angular</a><a href=\"/html\">HTML</a></nav>", 2)
  ]))]))
}
script.render = render;


// Vue Native HMR Registration
script.__hmrId = "components/Nav";
if (typeof __VUE_HMR_RUNTIME__ !== 'undefined') {
  __VUE_HMR_RUNTIME__.createRecord(script.__hmrId, script);
  if (typeof window !== 'undefined') {
    window.__VUE_HMR_COMPONENTS__ = window.__VUE_HMR_COMPONENTS__ || {};
    window.__VUE_HMR_COMPONENTS__[script.__hmrId] = script;
  }
}
export default script;
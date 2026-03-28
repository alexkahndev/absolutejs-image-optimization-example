const script = {};

import { ssrRenderAttrs as _ssrRenderAttrs } from "vue/server-renderer"

export function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${_ssrRenderAttrs(_attrs)}><a class="logo" href="/"><img alt="AbsoluteJS" height="24" src="/assets/png/absolutejs-temp.png"> AbsoluteJS </a><nav><a href="/">React</a><a href="/svelte">Svelte</a><a class="active" href="/vue">Vue</a><a href="/angular">Angular</a><a href="/html">HTML</a></nav></header>`)
}
script.ssrRender = ssrRender;


export default script;
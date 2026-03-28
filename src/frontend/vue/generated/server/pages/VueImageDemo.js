import { defineComponent as _defineComponent } from "vue";
import { Image } from "@absolutejs/absolute/vue/components";
import Nav from "../components/Nav.js";
const script = _defineComponent({
  __name: "VueImageDemo",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Image() {
      return Image;
    }, Nav };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

import { ssrRenderComponent as _ssrRenderComponent } from "vue/server-renderer"

export function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`)
  _push(_ssrRenderComponent($setup["Nav"], null, null, _parent))
  _push(`<main><div class="page-title"><img src="/assets/svg/vue-logo.svg" height="32" alt="Vue"><h1>Vue</h1><span class="badge">Image Optimization</span></div><h2 class="section-title">Responsive Images</h2><p class="section-desc"> Each image below uses the &lt;Image&gt; component with width, height, and sizes. The component generates responsive srcset attributes and serves optimized images through the /_absolute/image endpoint. </p><div class="image-grid"><div class="image-card"><div class="image-wrapper">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Landscape photo",
    height: 800,
    sizes: "(max-width: 640px) 100vw, 340px",
    src: "/assets/jpg/landscape.jpg",
    width: 1200
  }, null, _parent))
  _push(`</div><div class="card-body"><div class="card-title">Landscape</div><div class="card-desc"> 1200×800 with responsive sizes. Browser picks the best variant. </div></div><div class="card-meta"><span>src: <code>/assets/jpg/landscape.jpg</code></span></div></div><div class="image-card"><div class="image-wrapper">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Portrait photo",
    height: 900,
    sizes: "(max-width: 640px) 100vw, 340px",
    src: "/assets/jpg/portrait.jpg",
    width: 600
  }, null, _parent))
  _push(`</div><div class="card-body"><div class="card-title">Portrait</div><div class="card-desc"> 600×900 portrait orientation. Aspect ratio preserved via width/height. </div></div><div class="card-meta"><span>src: <code>/assets/jpg/portrait.jpg</code></span></div></div><div class="image-card"><div class="image-wrapper">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Square photo",
    height: 800,
    sizes: "(max-width: 640px) 100vw, 340px",
    src: "/assets/jpg/square.jpg",
    width: 800
  }, null, _parent))
  _push(`</div><div class="card-body"><div class="card-title">Square</div><div class="card-desc"> 800×800 square image. CLS prevented by width/height attributes. </div></div><div class="card-meta"><span>src: <code>/assets/jpg/square.jpg</code></span></div></div></div><h2 class="section-title">Priority (Preloaded)</h2><p class="section-desc"> This image has priority=true which adds a &lt;link rel=&quot;preload&quot;&gt; tag and sets loading=&quot;eager&quot; + fetchPriority=&quot;high&quot; for above-the-fold images. </p><div class="image-grid"><div class="image-card"><div class="image-wrapper">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Priority landscape",
    height: 800,
    priority: true,
    sizes: "(max-width: 640px) 100vw, 50vw",
    src: "/assets/jpg/landscape.jpg",
    width: 1200
  }, null, _parent))
  _push(`</div><div class="card-body"><div class="card-title">Priority Image</div><div class="card-desc"> Preloaded with &lt;link rel=&quot;preload&quot;&gt;. Check the network tab — this loads before other images. </div></div><div class="card-meta"><span>priority: <code>true</code></span></div></div></div><h2 class="section-title">Fill Mode</h2><p class="section-desc"> Fill mode makes the image fill its parent container with object-fit: cover. No width/height needed — the parent controls the dimensions. </p><div class="fill-demo">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Fill mode landscape",
    fill: true,
    sizes: "100vw",
    src: "/assets/jpg/landscape.jpg"
  }, null, _parent))
  _push(`</div><h2 class="section-title">Unoptimized</h2><p class="section-desc"> Setting unoptimized=true bypasses the optimization endpoint entirely. The original image is served as-is. </p><div class="image-grid"><div class="image-card"><div class="image-wrapper">`)
  _push(_ssrRenderComponent($setup["Image"], {
    alt: "Unoptimized square",
    height: 800,
    src: "/assets/jpg/square.jpg",
    unoptimized: true,
    width: 800
  }, null, _parent))
  _push(`</div><div class="card-body"><div class="card-title">Unoptimized</div><div class="card-desc"> Original JPG served directly. No srcset, no format conversion. </div></div><div class="card-meta"><span>unoptimized: <code>true</code></span></div></div></div><p class="footer"><img src="/assets/png/absolutejs-temp.png" alt=""> Powered by <a href="https://absolutejs.com" target="_blank" rel="noopener noreferrer">AbsoluteJS</a></p></main><!--]-->`)
}
script.ssrRender = ssrRender;


export default script;
import { defineComponent as _defineComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, createStaticVNode as _createStaticVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
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


const _hoisted_1 = { class: "image-grid" }
const _hoisted_2 = { class: "image-card" }
const _hoisted_3 = { class: "image-wrapper" }
const _hoisted_4 = { class: "image-card" }
const _hoisted_5 = { class: "image-wrapper" }
const _hoisted_6 = { class: "image-card" }
const _hoisted_7 = { class: "image-wrapper" }
const _hoisted_8 = { class: "image-grid" }
const _hoisted_9 = { class: "image-card" }
const _hoisted_10 = { class: "image-wrapper" }
const _hoisted_11 = { class: "fill-demo" }
const _hoisted_12 = { class: "image-grid" }
const _hoisted_13 = { class: "image-card" }
const _hoisted_14 = { class: "image-wrapper" }

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode($setup["Nav"]),
    _createElementVNode("main", null, [
      _cache[10] || (_cache[10] = _createStaticVNode("<div class=\"page-title\"><img src=\"/assets/svg/vue-logo.svg\" height=\"32\" alt=\"Vue\"><h1>Vue</h1><span class=\"badge\">Image Optimization</span></div><h2 class=\"section-title\">Responsive Images</h2><p class=\"section-desc\"> Each image below uses the &lt;Image&gt; component with width, height, and sizes. The component generates responsive srcset attributes and serves optimized images through the /_absolute/image endpoint. </p>", 3)),
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _createVNode($setup["Image"], {
              alt: "Landscape photo",
              height: 800,
              sizes: "(max-width: 640px) 100vw, 340px",
              src: "/assets/jpg/landscape.jpg",
              width: 1200
            })
          ]),
          _cache[0] || (_cache[0] = _createElementVNode("div", { class: "card-body" }, [
            _createElementVNode("div", { class: "card-title" }, "Landscape"),
            _createElementVNode("div", { class: "card-desc" }, " 1200×800 with responsive sizes. Browser picks the best variant. ")
          ], -1 /* CACHED */)),
          _cache[1] || (_cache[1] = _createElementVNode("div", { class: "card-meta" }, [
            _createElementVNode("span", null, [
              _createTextVNode("src: "),
              _createElementVNode("code", null, "/assets/jpg/landscape.jpg")
            ])
          ], -1 /* CACHED */))
        ]),
        _createElementVNode("div", _hoisted_4, [
          _createElementVNode("div", _hoisted_5, [
            _createVNode($setup["Image"], {
              alt: "Portrait photo",
              height: 900,
              sizes: "(max-width: 640px) 100vw, 340px",
              src: "/assets/jpg/portrait.jpg",
              width: 600
            })
          ]),
          _cache[2] || (_cache[2] = _createElementVNode("div", { class: "card-body" }, [
            _createElementVNode("div", { class: "card-title" }, "Portrait"),
            _createElementVNode("div", { class: "card-desc" }, " 600×900 portrait orientation. Aspect ratio preserved via width/height. ")
          ], -1 /* CACHED */)),
          _cache[3] || (_cache[3] = _createElementVNode("div", { class: "card-meta" }, [
            _createElementVNode("span", null, [
              _createTextVNode("src: "),
              _createElementVNode("code", null, "/assets/jpg/portrait.jpg")
            ])
          ], -1 /* CACHED */))
        ]),
        _createElementVNode("div", _hoisted_6, [
          _createElementVNode("div", _hoisted_7, [
            _createVNode($setup["Image"], {
              alt: "Square photo",
              height: 800,
              sizes: "(max-width: 640px) 100vw, 340px",
              src: "/assets/jpg/square.jpg",
              width: 800
            })
          ]),
          _cache[4] || (_cache[4] = _createElementVNode("div", { class: "card-body" }, [
            _createElementVNode("div", { class: "card-title" }, "Square"),
            _createElementVNode("div", { class: "card-desc" }, " 800×800 square image. CLS prevented by width/height attributes. ")
          ], -1 /* CACHED */)),
          _cache[5] || (_cache[5] = _createElementVNode("div", { class: "card-meta" }, [
            _createElementVNode("span", null, [
              _createTextVNode("src: "),
              _createElementVNode("code", null, "/assets/jpg/square.jpg")
            ])
          ], -1 /* CACHED */))
        ])
      ]),
      _cache[11] || (_cache[11] = _createElementVNode("h2", { class: "section-title" }, "Priority (Preloaded)", -1 /* CACHED */)),
      _cache[12] || (_cache[12] = _createElementVNode("p", { class: "section-desc" }, " This image has priority=true which adds a <link rel=\"preload\"> tag and sets loading=\"eager\" + fetchPriority=\"high\" for above-the-fold images. ", -1 /* CACHED */)),
      _createElementVNode("div", _hoisted_8, [
        _createElementVNode("div", _hoisted_9, [
          _createElementVNode("div", _hoisted_10, [
            _createVNode($setup["Image"], {
              alt: "Priority landscape",
              height: 800,
              priority: true,
              sizes: "(max-width: 640px) 100vw, 50vw",
              src: "/assets/jpg/landscape.jpg",
              width: 1200
            })
          ]),
          _cache[6] || (_cache[6] = _createElementVNode("div", { class: "card-body" }, [
            _createElementVNode("div", { class: "card-title" }, "Priority Image"),
            _createElementVNode("div", { class: "card-desc" }, " Preloaded with <link rel=\"preload\">. Check the network tab — this loads before other images. ")
          ], -1 /* CACHED */)),
          _cache[7] || (_cache[7] = _createElementVNode("div", { class: "card-meta" }, [
            _createElementVNode("span", null, [
              _createTextVNode("priority: "),
              _createElementVNode("code", null, "true")
            ])
          ], -1 /* CACHED */))
        ])
      ]),
      _cache[13] || (_cache[13] = _createElementVNode("h2", { class: "section-title" }, "Fill Mode", -1 /* CACHED */)),
      _cache[14] || (_cache[14] = _createElementVNode("p", { class: "section-desc" }, " Fill mode makes the image fill its parent container with object-fit: cover. No width/height needed — the parent controls the dimensions. ", -1 /* CACHED */)),
      _createElementVNode("div", _hoisted_11, [
        _createVNode($setup["Image"], {
          alt: "Fill mode landscape",
          fill: true,
          sizes: "100vw",
          src: "/assets/jpg/landscape.jpg"
        })
      ]),
      _cache[15] || (_cache[15] = _createElementVNode("h2", { class: "section-title" }, "Unoptimized", -1 /* CACHED */)),
      _cache[16] || (_cache[16] = _createElementVNode("p", { class: "section-desc" }, " Setting unoptimized=true bypasses the optimization endpoint entirely. The original image is served as-is. ", -1 /* CACHED */)),
      _createElementVNode("div", _hoisted_12, [
        _createElementVNode("div", _hoisted_13, [
          _createElementVNode("div", _hoisted_14, [
            _createVNode($setup["Image"], {
              alt: "Unoptimized square",
              height: 800,
              src: "/assets/jpg/square.jpg",
              unoptimized: true,
              width: 800
            })
          ]),
          _cache[8] || (_cache[8] = _createElementVNode("div", { class: "card-body" }, [
            _createElementVNode("div", { class: "card-title" }, "Unoptimized"),
            _createElementVNode("div", { class: "card-desc" }, " Original JPG served directly. No srcset, no format conversion. ")
          ], -1 /* CACHED */)),
          _cache[9] || (_cache[9] = _createElementVNode("div", { class: "card-meta" }, [
            _createElementVNode("span", null, [
              _createTextVNode("unoptimized: "),
              _createElementVNode("code", null, "true")
            ])
          ], -1 /* CACHED */))
        ])
      ]),
      _cache[17] || (_cache[17] = _createElementVNode("p", { class: "footer" }, [
        _createElementVNode("img", {
          src: "/assets/png/absolutejs-temp.png",
          alt: ""
        }),
        _createTextVNode(" Powered by "),
        _createElementVNode("a", {
          href: "https://absolutejs.com",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "AbsoluteJS")
      ], -1 /* CACHED */))
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
script.render = render;


// Vue Native HMR Registration
script.__hmrId = "pages/VueImageDemo";
if (typeof __VUE_HMR_RUNTIME__ !== 'undefined') {
  __VUE_HMR_RUNTIME__.createRecord(script.__hmrId, script);
  if (typeof window !== 'undefined') {
    window.__VUE_HMR_COMPONENTS__ = window.__VUE_HMR_COMPONENTS__ || {};
    window.__VUE_HMR_COMPONENTS__[script.__hmrId] = script;
  }
}
export default script;
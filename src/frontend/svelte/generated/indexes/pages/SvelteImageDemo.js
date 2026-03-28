window.__HMR_FRAMEWORK__ = "svelte";
import "/home/alexkahn/abs/absolutejs/src/dev/client/hmrClient.ts";
import Component from "../../client/pages/SvelteImageDemo.js";
import { hydrate, mount, unmount } from "svelte";

var initialProps = (typeof window !== "undefined" && window.__INITIAL_PROPS__) ? window.__INITIAL_PROPS__ : {};
var isHMR = typeof window !== "undefined" && window.__SVELTE_COMPONENT__ !== undefined;
var isSsrDirty = typeof window !== "undefined" && window.__SSR_DIRTY__;
var component;

if (isHMR) {
  var preservedState = window.__HMR_PRESERVED_STATE__;
  if (!preservedState) {
    try {
      var stored = sessionStorage.getItem("__SVELTE_HMR_STATE__");
      if (stored) preservedState = JSON.parse(stored);
    } catch (err) { /* ignore */ }
  }
  var mergedProps = (preservedState && Object.keys(preservedState).length > 0) ? Object.assign({}, initialProps, preservedState) : initialProps;
  if (typeof window.__SVELTE_UNMOUNT__ === "function") {
    try { window.__SVELTE_UNMOUNT__(); } catch (err) { /* ignore */ }
  }
  component = mount(Component, { target: document.body, props: mergedProps });
  window.__HMR_PRESERVED_STATE__ = undefined;
} else if (isSsrDirty) {
  component = mount(Component, { target: document.body, props: initialProps });
} else {
  component = hydrate(Component, { target: document.body, props: initialProps });
}

if (typeof window !== "undefined") {
  window.__SVELTE_COMPONENT__ = component;
  window.__SVELTE_UNMOUNT__ = function() { unmount(component); };
}
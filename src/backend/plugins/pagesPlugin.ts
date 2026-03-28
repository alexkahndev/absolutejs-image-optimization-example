import { Elysia } from "elysia";
import {
  handleReactPageRequest,
  handleHTMLPageRequest,
  generateHeadElement,
  asset,
} from "@absolutejs/absolute";
import { handleSveltePageRequest } from "@absolutejs/absolute/svelte";
import { handleVuePageRequest } from "@absolutejs/absolute/vue";
import { handleAngularPageRequest } from "@absolutejs/absolute/angular";
import { ReactImageDemo } from "../../frontend/react/pages/ReactImageDemo";

export const pagesPlugin = (manifest: Record<string, string>) =>
  new Elysia()
    .get("/", () =>
      handleReactPageRequest(
        ReactImageDemo,
        asset(manifest, "ReactImageDemoIndex"),
        {
          cssPath: asset(manifest, "ImageDemoCSS"),
        },
      ),
    )
    .get("/svelte", async () => {
      const SvelteImageDemo = (
        await import("../../frontend/svelte/pages/SvelteImageDemo.svelte")
      ).default;

      return handleSveltePageRequest(
        SvelteImageDemo,
        asset(manifest, "SvelteImageDemo"),
        asset(manifest, "SvelteImageDemoIndex"),
        {
          cssPath: asset(manifest, "ImageDemoCSS"),
        },
      );
    })
    .get("/vue", async () => {
      const { VueImageDemo } = (await import("../vueImporter")).vueImports;

      return handleVuePageRequest(
        VueImageDemo,
        asset(manifest, "VueImageDemo"),
        asset(manifest, "VueImageDemoIndex"),
        generateHeadElement({
          cssPath: asset(manifest, "ImageDemoCSS"),
          title: "AbsoluteJS Image Optimization - Vue",
        }),
      );
    })
    .get("/angular", async () =>
      handleAngularPageRequest(
        () => import("../../frontend/angular/pages/angular-image-demo"),
        asset(manifest, "AngularImageDemo"),
        asset(manifest, "AngularImageDemoIndex"),
        generateHeadElement({
          cssPath: asset(manifest, "ImageDemoCSS"),
          title: "AbsoluteJS Image Optimization - Angular",
        }),
      ),
    )
    .get("/html", () =>
      handleHTMLPageRequest(asset(manifest, "HtmlImageDemo")),
    );

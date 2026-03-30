# Adding Angular to This Example

Angular is currently disabled due to a `NG0201: EnvironmentInjector` error in AbsoluteJS's Angular SSR handler. This is caused by Bun baking `import.meta.dir` at bundle time, which makes the published package resolve `@angular/core` from the AbsoluteJS source tree instead of the consumer's `node_modules` — creating two separate Angular instances with incompatible injector hierarchies.

Once the fix is applied (same `process.cwd() + node_modules/` resolution pattern used for the dev client paths), follow these steps:

## 1. Enable Angular in config

```ts
// absolute.config.ts
export default defineConfig({
  angularDirectory: "./src/frontend/angular",
  // ... rest of config
});
```

## 2. Add the route

```ts
// src/backend/plugins/pagesPlugin.ts
import { handleAngularPageRequest } from "@absolutejs/absolute/angular";

// Inside pagesPlugin:
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
```

## 3. Angular component and template

The component already exists at `src/frontend/angular/pages/angular-image-demo.ts` and its template at `src/frontend/angular/templates/angular-image-demo.html`.

The template uses the `/_absolute/image` endpoint URLs directly in `<img>` tags since Angular components from `node_modules` can't be used as standalone imports in templates without an Angular module setup. Once the `abs-image` component from `@absolutejs/absolute/angular/components` is available, you can use:

```html
<abs-image
  [src]="'/assets/jpg/landscape.jpg'"
  [alt]="'Landscape photo'"
  [width]="1200"
  [height]="800"
  sizes="(max-width: 640px) 100vw, 340px"
/>
```

## 4. Dependencies

Make sure `@angular/forms` is installed (some Angular SSR features depend on it):

```bash
bun add @angular/forms
```

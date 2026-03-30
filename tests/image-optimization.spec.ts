import { test, expect } from "@playwright/test";

const FRAMEWORKS = [
  { name: "React", path: "/" },
  { name: "Svelte", path: "/svelte" },
  { name: "Vue", path: "/vue" },
  { name: "Angular", path: "/angular" },
  { name: "HTML", path: "/html" },
  { name: "HTMX", path: "/htmx" },
] as const;

const EXPECTED_IMAGES = [
  { alt: "Landscape photo", src: "/assets/jpg/landscape.jpg" },
  { alt: "Portrait photo", src: "/assets/jpg/portrait.jpg" },
  { alt: "Square photo", src: "/assets/jpg/square.jpg" },
] as const;

for (const framework of FRAMEWORKS) {
  test.describe(`${framework.name} (${framework.path})`, () => {
    test("page loads with 200", async ({ page }) => {
      const response = await page.goto(framework.path);
      expect(response?.status()).toBe(200);
    });

    test("optimized images use /_absolute/image endpoint", async ({ page }) => {
      await page.goto(framework.path);
      await page.waitForLoadState("domcontentloaded");

      for (const img of EXPECTED_IMAGES) {
        const el = page.locator(`img[alt="${img.alt}"]`);
        await expect(el).toHaveCount(1);
        const src = await el.getAttribute("src");
        expect(src, `${img.alt} src`).toContain("/_absolute/image");
        expect(src, `${img.alt} original path`).toContain(
          encodeURIComponent(img.src),
        );
      }
    });

    test("optimized images have srcset", async ({ page }) => {
      await page.goto(framework.path);
      await page.waitForLoadState("domcontentloaded");

      for (const img of EXPECTED_IMAGES) {
        const el = page.locator(`img[alt="${img.alt}"]`);
        const srcset = await el.getAttribute("srcset");
        expect(srcset, `${img.alt} srcset`).toBeTruthy();
        expect(srcset, `${img.alt} srcset endpoint`).toContain(
          "/_absolute/image",
        );
      }
    });

    test("fill mode image is present and optimized", async ({ page }) => {
      await page.goto(framework.path);
      await page.waitForLoadState("domcontentloaded");
      const fill = page.locator('img[alt="Fill mode landscape"]');
      await expect(fill).toHaveCount(1);
      const src = await fill.getAttribute("src");
      expect(src).toContain("/_absolute/image");
    });

    test("unoptimized image serves original file", async ({ page }) => {
      await page.goto(framework.path);
      await page.waitForLoadState("domcontentloaded");
      const unopt = page.locator('img[alt="Unoptimized square"]');
      await expect(unopt).toHaveCount(1);
      const src = await unopt.getAttribute("src");
      expect(src).toBe("/assets/jpg/square.jpg");
    });
  });
}

test.describe("Image endpoint content negotiation", () => {
  test("returns webp when Accept includes image/webp", async ({ request }) => {
    const response = await request.get(
      "/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1200&q=75",
      { headers: { Accept: "image/webp,image/png,*/*" } },
    );
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("image/webp");
  });

  test("returns avif when Accept includes image/avif", async ({ request }) => {
    const response = await request.get(
      "/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1200&q=75",
      { headers: { Accept: "image/avif,image/webp,*/*" } },
    );
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("image/avif");
  });

  test("returns jpeg when Accept has no modern formats", async ({
    request,
  }) => {
    const response = await request.get(
      "/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1200&q=75",
      { headers: { Accept: "image/jpeg,*/*" } },
    );
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("image/jpeg");
  });

  test("avif preferred over webp when both accepted (config order)", async ({
    request,
  }) => {
    const response = await request.get(
      "/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1200&q=75",
      { headers: { Accept: "image/avif,image/webp,*/*" } },
    );
    expect(response.headers()["content-type"]).toBe("image/avif");
  });

  test("serves different valid sizes", async ({ request }) => {
    for (const width of [640, 1080, 1920]) {
      const response = await request.get(
        `/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=${width}&q=75`,
        { headers: { Accept: "image/webp,*/*" } },
      );
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toBe("image/webp");
    }
  });

  test("rejects invalid width", async ({ request }) => {
    const response = await request.get(
      "/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=999&q=75",
      { headers: { Accept: "image/webp,*/*" } },
    );
    expect(response.status()).toBe(400);
  });
});

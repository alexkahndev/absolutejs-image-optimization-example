import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3000",
    // JS enabled — tests verify both SSR and hydrated output
  },
});

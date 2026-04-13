/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    unstubGlobals: true,
    exclude: ["**/e2e/**", "node_modules/**"],
  },
});

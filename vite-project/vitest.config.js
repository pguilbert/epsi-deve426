/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    unstubGlobals: true,
    mockReset: true,
  },
});

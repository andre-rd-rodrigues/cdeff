import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const resolvePath = (relativePath) =>
  fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
      "server-only": resolvePath("./__mocks__/empty.cjs"),
      "next/navigation": resolvePath("./__mocks__/nextNavigationMock.js")
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    setupFiles: ["./vitest.setup.jsx"],
    include: ["src/**/*.{test,spec}.{js,jsx}"],
    server: {
      deps: {
        // Inline next-intl so Vite transforms it and applies the
        // next/navigation alias (otherwise Node can't resolve the bare
        // "next/navigation" specifier from next-intl's ESM build).
        inline: ["next-intl"]
      }
    },
    coverage: {
      provider: "v8",
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "**/*.d.ts",
        "**/node_modules/**",
        "src/data/**",
        "src/messages/**",
        "src/test-utils/**"
      ]
    }
  }
});

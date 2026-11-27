import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

import pkg from "./package.json" with { type: "json" }

const externalPackages = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
]

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@saurlax/saui": resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: "src/build.ts",
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    rolldownOptions: {
      external: (id) =>
        externalPackages.some(
          (name) => id === name || id.startsWith(`${name}/`)
        ),
      // The single ESM bundle gets the client directive from the output banner.
      checks: { moduleLevelDirective: false },
      output: { banner: '"use client";' },
    },
  },
})

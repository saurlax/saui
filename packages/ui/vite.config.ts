import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

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
      external: /^(react|react-dom|@base-ui\/react|class-variance-authority|cn|lucide-react)(\/|$)/,
      output: { banner: '"use client";' },
    },
  },
})

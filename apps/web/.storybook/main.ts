import { resolve } from "node:path"
import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import { mergeConfig } from "vite"

const uiSource = resolve(import.meta.dirname, "../../../packages/ui/src")

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: [
          {
            find: /^@saurlax\/saui$/,
            replacement: resolve(uiSource, "index.ts"),
          },
          {
            find: "@saurlax/saui",
            replacement: uiSource,
          },
        ],
      },
    })
  },
}

export default config

import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react-vite"

import "./preview.css"

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { Light: "light", Dark: "dark" },
      defaultTheme: "Light",
    }),
  ],
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    options: {
      storySort: { order: ["Overview", "Components"] },
    },
  },
}

export default preview

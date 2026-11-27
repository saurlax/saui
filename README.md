# saui

A shared React component library for web and desktop WebView apps. It uses shadcn/ui’s Nova preset with Base UI.

- `packages/ui` contains the component source, theme variables, and library build.
- `apps/web` is a Vite preview that imports the built UI package.

## Development

Use Node.js 22.13 or later and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

Run `pnpm ui:add <component>` to add shadcn components. Export components from `packages/ui/src/index.ts` when they are part of the public API.

## Use in an app

Install the package from a workspace or a package archive, then import its CSS once at the app entry point.

```tsx
import { Button, Input } from "@saurlax/saui"
import "@saurlax/saui/styles.css"
```

Run `pnpm --filter @saurlax/saui pack` to build an archive for use in another repository.

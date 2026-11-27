# saui

A shared React component library for web and desktop WebView apps. It uses shadcn/ui’s Nova preset with Base UI.

- `packages/ui` contains the [shadcn/ui Base Nova component set](https://github.com/shadcn-ui/ui/tree/0e5b2e621a9ee4cf6a604bbe6c5c0d5b70561eb4/apps/v4/registry/bases/base/ui), theme variables, and library build.
- `apps/web` hosts the public component gallery and Storybook for development.

## Development

Use Node.js 22.13 or later and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

Run `pnpm dev` to browse the component gallery. `pnpm build` builds the library and writes the gallery to `apps/web/dist`.

Run `pnpm storybook` to develop stories at http://127.0.0.1:6006. Story files live in `apps/web/src/stories`. `pnpm build-storybook` writes the static Storybook build to `apps/web/dist-storybook`.

Run `pnpm ui:add <component>` to add shadcn components. Export components from `packages/ui/src/index.ts` when they are part of the public API.

## Use in an app

Install the package from a workspace or a package archive, then import its CSS once at the app entry point.

```tsx
import { Button, Input } from "@saurlax/saui"
import "@saurlax/saui/styles.css"
```

Run `pnpm --filter @saurlax/saui pack` to build an archive for use in another repository.

Use `Toaster` with the Base UI `toast` manager, or `SonnerToaster` with `toast` from `sonner`.

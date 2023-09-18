## Setup

Make sure to install the dependencies:

```bash
pnpm install @poidet/nuxt
```

Then add the dependency to their `extends` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@poidet/nuxt'
});
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

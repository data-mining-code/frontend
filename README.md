# frontend

A small [Choo]-based frontend app that communicates with the broker and displays
results, as well as accepting inputs.

## Installation

You need:
- Git
- Node.js 6.4+ (stable version should do)

```sh
git clone https://github.com/data-mining-code/frontend dm-frontend
cd dm-frontend
npm install
npm start
```

## Commands

- `npm start`: Fires up a local development server with LiveReload support.
- `npm run build`: Produces a compiled version of the app, used for running in
  production.
- `npm run inspect`: Inspect bundle sizes using `bankai`.
- `npm test`: Runs linting tools and dependency usage checks.
- `npm run test-deps`: Only runs dependency usage checks.

## License

AGPL 3.0+ (see [LICENSE](./LICENSE))

[Choo]: http://choo.io

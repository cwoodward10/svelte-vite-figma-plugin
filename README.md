# svelte-vite-figma-plugin
Template for a Figma Plugin using Svelte and Vite. ESBuild is used for the main plugin code. Plugin structure (and the README below) is based off of [@figma/create-widget](https://www.npmjs.com/package/@figma/create-widget). I mainly removed React, added Svelte (and accompanying structure for Svelte), and renamed things to make it all work.

## Getting started

Run the following command to start building your widget

```bash
npm run dev
```

1. Log in to your account and open the Figma desktop app
2. You can open any existing Figma document or create a new one.
3. Go to Menu > Plugins > Development > "Import plugin from manifest..."
4. Select the manifest.json in this folder

## Organization

This plugin uses:

- [esbuild](https://esbuild.github.io/) for bundling
- [vite](https://vitejs.dev/) and [react](https://reactjs.org/) for the iframe
- [typescript](https://www.typescriptlang.org/) for typechecking

| file/folder   | description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| manifest.json | The widget's [manifest.json](https://www.figma.com/widget-docs/widget-manifest/) |
| plugin-src/   | Contains the widget code                                                         |
| ui-src/       | Contains the iframe code                                                         |

### `npm run dev`

This is the only command you need to run in development. It will start the following processes for you:

- bundling (both widget and iframe code)
- typechecking (both widget and iframe code)
- vite dev server (for iframe development)

### `npm run build`

This runs bundling with minification turned on. You should run this command before releasing your widget.

### `npm run test`

This runs typechecking and makes sure that your widget builds without errors.

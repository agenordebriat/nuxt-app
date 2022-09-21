# Nuxt 3 Starter

## Features

- [Nuxt 3](https://v3.nuxtjs.org) with some modules:
  - [FormKit](https://formkit.com)
  - [Nuxt Icon](https://github.com/nuxt-modules/icon)
  - [Nuxt Image](https://v1.image.nuxtjs.org/)
  - [Pinia](https://pinia.vuejs.org/)
  - [TailwindCSS](https://tailwindcss.nuxtjs.org/)
    - [Line-clamp plugin](https://github.com/tailwindlabs/tailwindcss-line-clamp)
  - [VueUse](https://vueuse.org/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/) preconfigured
- [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)

## Setup

Create a copy of this repository to use as a new project with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit agenordebriat/nuxt-app my-new-project
```

Go to the project folder and initialize a git repository:

```bash
cd my-new-project && git init
```

## Usage

### In a development container

#### Prerequisites

https://code.visualstudio.com/docs/remote/containers#_installation

Open the project in Visual Studio Code and click the `Reopen in Container` button in the lower right corner of the window.  
_Alternatively, you can either open the command palette and select `Remote-Containers: Reopen in Container` or open the `Remote Explorer` panel and click the `Open Folder in Container` button._

### "Classic" local development

#### Prerequisites

- [Node.js](https://nodejs.org/) version 16.17.0
  - Use your preferred version manager, e.g. [fnm](https://github.com/Schniz/fnm):
    ```bash
    node -v # 16.17.0
    ```
- [Yarn](https://yarnpkg.com/) version 1.22.19
  - You can make sure you're using the right `yarn` version with [Corepack](https://nodejs.org/api/corepack.html):
    ```bash
    corepack enable && yarn -v # 1.22.19
    ```

Copy the editor settings in `devcontainer.json` to your workspace settings (`.vscode/settings.json`) and install the recommended extensions, still from `devcontainer.json`.

Install the dependencies:

```bash
yarn
```

### In both cases

Since you should be using [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), you must enable [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471).

## Development

Start the development server with:

```bash
yarn dev
```

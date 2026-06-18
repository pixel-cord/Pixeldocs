# Building from Source

If you need to build Pixelcord from source — for development, or to run your own user plugins — follow these steps.

## Prerequisites

Before starting, make sure you have the following installed:

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev/en/)

### Install pnpm

> **Warning:** Windows users — do not run the following commands in an administrator terminal. This can break your Discord installation.

```sh
npm i -g pnpm
```

### Clone the Repository

> **Warning:** Do not clone into a system folder. Clone into a folder you'll remember, like your Documents folder.

Windows:

```sh
cd "%USERPROFILE%/Documents"
```

Linux or macOS:

```sh
cd "$HOME/Documents"
```

Then clone and enter the project:

```sh
git clone https://github.com/pixel-cord/pixelcord
cd pixelcord
```

### Install Dependencies

```sh
pnpm install --no-frozen-lockfile
```

## Discord Desktop

### Build

```sh
pnpm build
```

> **Tip:** To enable developer-only plugins and access debugging tools like **PatchHelper**, build in development mode using the `--dev` flag:

```sh
pnpm build --dev
```

> **Tip:** If you are actively making changes to the source code, use **watch mode**. This automatically triggers a rebuild every time you save a file:

```sh
pnpm build --watch
# Or for dev mode with watch:
pnpm build --dev --watch
```

### Inject and Start

Run the injector to patch your Discord installation, then start Discord normally:

```sh
pnpm inject
```

> **Note:** You only need to run `pnpm inject` once (or again if Discord is no longer injected). After that, rebuilding and restarting Discord is enough to pick up your changes.

## Web Browser

You can also build Pixelcord as a browser extension or userscript.

### Build

```sh
pnpm buildWeb
```

> **Tip:** To enable developer-only plugins and access debugging tools like **PatchHelper**, build in development mode using the `--dev` flag:

```sh
pnpm buildWeb --dev
```

### Install

After building, you'll find the output files inside the `dist/` folder. Pick the one that matches your browser:

- **extension-chrome.zip** — For Chrome and Chromium-based browsers. Go to `chrome://extensions`, enable Developer Mode, and drag the zip file into the window.
- **extension-firefox.zip** — For Firefox. Go to `about:addons`, click the gear icon, and select `Install Add-on From File...`.
- **Pixelcord.user.js** — Userscript for Tampermonkey, Greasemonkey, or any other userscript manager. Open the file in your browser and your userscript manager will prompt you to install it.

> **Note:** Unless you're a developer, there's usually no reason to build from source. If you just want a ready-to-use client, use [Pixeltop](https://github.com/pixel-cord/Pixeltop/releases) instead.

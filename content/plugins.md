# Installing User Plugins

Pixelcord can build any plugin into your Discord, whether it's a plugin made by the community, adapted from Vencord, or one you wrote yourself.

> **Warning:** Pixelcord does not provide official support for user plugins or dev builds. If you run into issues you cannot resolve on your own, you can open a [GitHub issue](https://github.com/pixel-cord/pixelcord/issues), but a response is not guaranteed.

## Before You Start

User plugins require building Pixelcord from source. If you haven't done this yet, follow the [Building from Source](/building-from-source) guide first.

You'll also need to understand where plugins live in the project, since putting a plugin in the wrong folder is the most common cause of issues.

### Where plugins live

Pixelcord separates plugins into three folders depending on their purpose:

| Folder                  | What goes here                                          |
| ----------------------- | ------------------------------------------------------- |
| `src/pixelcordplugins/` | Official Pixelcord plugins, shipped with the project.   |
| `src/plugins/`          | Plugins sourced from or based on Vencord.               |
| `src/userplugins/`      | Your private plugins. Not tracked, not shared.          |

**Unless you are contributing to Pixelcord or Vencord, always use `src/userplugins/`.**

## Installing a Plugin

### 1. Create the `userplugins` folder

This folder does not exist by default. Navigate to `src/` inside your Pixelcord folder and create a new folder named `userplugins`.

```text
src/userplugins/
```

### 2. Add the plugin

Place the plugin inside `src/userplugins/`. **Each plugin must have its own folder**, and the entry file must be named `index.ts` or `index.tsx`.

> **Tip:** Valid structures
>
> ```text
> src/userplugins/myMagicPlugin/index.ts
> src/userplugins/myMagicPlugin/index.tsx
> ```

> **Danger:** Invalid structures
>
> ```text
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx
>
> src/userplugins/index.ts
> src/userplugins/index.tsx
>
> src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
> ```

### 3. Rebuild Pixelcord

After adding the plugin, rebuild so it gets bundled into Discord:

```sh
pnpm build
```

If you want to also include developer-only plugins, use:

```sh
pnpm build --dev
```

### 4. Restart Discord

Once the build finishes, restart Discord. Your plugin should now appear in the plugins tab.

## Updating Pixelcord & official plugins

Run these three commands inside your Pixelcord folder:

```sh
git fetch
git pull
pnpm build
```

> **Note:** `git fetch` and `git pull` only update **Pixelcord itself and its official plugins**. They do **not** update your user plugins automatically.

After building, you only need to run `pnpm inject` again if Discord is not already injected. If it was already running, a simple restart of Discord is enough.

## Updating user plugins

Git does **not** manage your user plugins. To update a user plugin, you need to:

> If you're experienced enough, you can figure out how to make Git manage it, but let's focus on simplicity.

1. Download the new version of the plugin manually from its repository or source.
2. Replace the old file(s) inside `src/userplugins/` with the new ones.
3. Rebuild Pixelcord:

```sh
pnpm build
```

> **Tip:** If you are not familiar with Git yet, the [GitHub Git guide](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository) and [Git for beginners](https://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide) are great places to start. They'll teach you how Git works and how to use it, which helps both here and in many other situations.

## Troubleshooting

If your plugin isn't showing up, check these first:

- Wrong folder (`pixelcordplugins`, `plugins`, or `userplugins`).
- The entry file is not named `index.ts` or `index.tsx`.
- Folder name is not camelCase.
- Pixelcord was not rebuilt after adding the plugin.

### Missing dependencies

If `pnpm build` complains about missing packages, run:

```sh
pnpm install
```

Then try building again.

### Discord not reflecting your build

If Discord still shows the old version after building, try rebuilding:

```sh
pnpm build
```

If the issue persists, make sure Discord was fully restarted after the build completed.

### Something in your user plugin broke

Errors that persist after running `pnpm install` are almost always caused by the plugin itself — a syntax error, a missing file, a broken import, or whatever. Read the error message carefully and check the plugin's source manually.

> **Note:** Want to help improve these docs or the project? Open a pull request [on GitHub](https://github.com/pixel-cord/pixelcord).

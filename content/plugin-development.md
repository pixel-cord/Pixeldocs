# Plugin Development

Pixelcord uses the same plugin system as Vencord (by way of Equicord), which means you can develop entirely new plugins from scratch or adapt existing ones.

This page covers:

- Creating your first plugin
- Understanding the plugin boilerplate
- Development tips and resources

## Creating Your First Plugin

### 1. Choose the correct folder

| Path                    | Purpose                   |
| ----------------------- | ------------------------- |
| `src/pixelcordplugins/` | For official Pixelcord plugins |
| `src/userplugins/`      | For personal plugins      |

### 2. Create a new folder using camelCase

| Example             | Valid |
| ------------------- | ----- |
| `myFirstPlugin`     | Yes   |
| `MyFirstPlugin`     | No    |
| `my first plugin`   | No    |

### 3. Add an `index.ts` file

Each plugin must have its own folder, and the entry file must be named `index.ts` or `index.tsx`.

```text
src/userplugins/myFirstPlugin/index.ts
```

## Plugin Boilerplate

Inside `index.ts`, define your plugin using `definePlugin`.

### Pixelcord Plugin

If this is your first time contributing an official Pixelcord plugin, you must first add yourself to the **`PixelCordDevs`** object. Go to `src/utils/constants.ts`, add your entry, and then reference it in the `authors` field.

```ts
import { PixelCordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [PixelCordDevs.YourName],
});
```

Use this format for plugins inside `src/pixelcordplugins/`.

### User Plugin

For user plugins, you don't need to register yourself in `PixelCordDevs`. Just provide your information directly as a plain object.

```ts
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [{ name: "Your Name", id: 1234567890n }],
});
```

Use this format for plugins inside `src/userplugins/`.

## Guidelines

- `name` should be short, clear, and unique
- `description` should clearly explain what the plugin does
- Use `PixelCordDevs.YourName` only for official Pixelcord plugins
- Use a plain object for personal or private plugins
- Folder names must be camelCase (e.g. `myFirstPlugin`)

## Further Resources

To learn more about how plugins work, check out the [Pixelcord GitHub repository](https://github.com/pixel-cord/pixelcord) and explore the existing plugins in:

- `src/pixelcordplugins` — official Pixelcord plugins
- `src/plugins` — Vencord-based plugins

Reading existing plugins is the fastest way to learn the available APIs and patterns.

### Where to get help

For plugin development questions and support, open a [GitHub issue](https://github.com/pixel-cord/pixelcord/issues) on the Pixelcord repository.

> **Note:** Want to help improve these docs or the project? Open a pull request [on GitHub](https://github.com/pixel-cord/pixelcord).

# Plugin Submission

Pixelcord is a community-driven project, and plugin development is the primary way to contribute. This page explains how to submit plugins, follow the project guidelines, and give your contribution the best chance of being accepted.

Before submitting anything, make sure you understand Pixelcord's goals, technical standards, and community expectations.

## Ways to Contribute

Contributions are submitted through pull requests on GitHub at <https://github.com/pixel-cord/pixelcord>. If you are new to Git or GitHub, we recommend reading [this guide about creating pull requests](https://opensource.com/article/19/7/create-pull-request-github).

Pull requests must target the `dev` branch. Always create a new branch for your changes. Use a descriptive name like `feature/my-plugin-name` or `fix/some-bug` and open your pull request against `dev`.

Do **not** target `main` directly. The `main` branch is reserved for stable releases.

## Writing a Plugin

Writing a plugin is the most common form of contribution.

Before you start developing your plugin, you should:

- Check existing [pull requests](https://github.com/pixel-cord/pixelcord/pulls) to avoid duplicate work.
- Search the [issues tracker](https://github.com/pixel-cord/pixelcord/issues) to see if your idea already exists or was previously rejected.
- If no request exists, open a [GitHub issue](https://github.com/pixel-cord/pixelcord/issues) describing your idea and clearly state that you want to work on it yourself.
- Wait for feedback before starting development, as some ideas may not be accepted or may need adjustments.
- Familiarize yourself with the plugin rules below.

> **Warning:** Skipping these steps may result in your plugin being rejected, even if it is technically correct.

## Plugin Rules

To keep Pixelcord stable, secure, and maintainable, all plugins must follow these rules:

1. No simple slash-command plugins (e.g. `/cat`). If applicable, create a [user-installable Discord app](https://discord.com/developers/docs/change-log#userinstallable-apps-preview) instead.
2. No simple text replacement plugins (the built-in TextReplace plugin already covers this).
3. No raw DOM manipulation — always use proper patches and React.
4. No FakeDeafen or FakeMute functionality.
5. No StereoMic-related plugins.
6. No plugins that only hide or redesign UI elements (use CSS for that). This rule may be negotiable.
7. No plugins that interact with specific third-party Discord bots (official Discord apps are allowed).
8. No selfbots or API abuse (auto-replies, animated statuses, message pruning, Nitro snipers, etc.).
9. No untrusted third-party APIs (well-known services like Google or GitHub are acceptable).
10. No plugins that require users to provide their own API keys.
11. Do not introduce new dependencies unless they are strictly necessary and well justified.

**Plugins that violate any of these rules will not be accepted.**

## Improving Pixelcord Itself

If you want to improve Pixelcord beyond plugins, such as internal features or performance improvements, you are welcome to open a [GitHub issue](https://github.com/pixel-cord/pixelcord/issues) so it can be discussed first.

Bug fixes, refactors, and documentation improvements are also highly appreciated! Open a pull request against the `dev` branch at <https://github.com/pixel-cord/pixelcord>.

## Helping Out

Helping other users is always appreciated. If you can answer questions or troubleshoot problems on the [issues tracker](https://github.com/pixel-cord/pixelcord/issues), please do. The more, the merrier.

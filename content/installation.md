# Installation

## Installing Pixelcord

There are two supported ways to install Pixelcord. Choose the one that fits your needs:

1. **Pixeltop** — a standalone Discord client with Pixelcord pre-installed. This is the simplest option and requires no building.
2. **Build from source and inject** — build Pixelcord yourself and patch it into your existing Discord install. This path is required if you want to run or develop your own plugins.

> **Note:** Pixelcord does not ship a hosted graphical installer. If you don't want to build from source, use Pixeltop.

## Option 1: Pixeltop (Recommended)

Pixeltop is Pixelcord's standalone desktop client. It comes with Pixelcord already bundled, so you don't need to patch an existing Discord installation.

Download the latest build for your operating system from the releases page:

- **Pixeltop Releases:** <https://github.com/pixel-cord/Pixeltop/releases>

Pixeltop is available for **Linux**, **macOS**, and **Windows**. Pick the asset that matches your platform from the latest release, then install and launch it like any other application.

> **Tip:** If you're on Windows and your antivirus flags the download, see the [FAQ](/faq) for how to add an exclusion.

## Option 2: Build from Source and Inject

If you'd rather patch your existing Discord client (and this is the route you'll want for plugin development), you can build Pixelcord from source and inject it.

In short:

1. Install the prerequisites (Git, Node.js LTS, pnpm).
2. Clone the repository:

   ```sh
   git clone https://github.com/pixel-cord/pixelcord
   ```

3. Install dependencies and build:

   ```sh
   pnpm install --no-frozen-lockfile
   pnpm build
   ```

4. Inject into Discord and restart it:

   ```sh
   pnpm inject
   ```

For the full, step-by-step walkthrough (including per-OS notes and web builds), see [Building from Source](/building-from-source).

## Per-OS Notes

The installation steps are the same across platforms. A few things to keep in mind:

- **Windows** — Do not run the build/inject commands in an administrator terminal; this can break your Discord installation. If a download is blocked, add an antivirus exclusion (see the [FAQ](/faq)).
- **macOS** — Both Intel (x64) and Apple Silicon (arm64) are supported via Pixeltop releases.
- **Linux** — Pixeltop releases cover Linux as well. Building from source works the same as on other platforms.

# FAQ

## 1. "A JavaScript error occurred in the main process"

This is usually caused by Pixelcord or Discord's JavaScript files being out of date. If you built from source, pull the latest changes and rebuild:

```sh
git fetch
git pull
pnpm build
```

Then restart Discord. If you're on Pixeltop, update to the [latest release](https://github.com/pixel-cord/Pixeltop/releases).

## 2. "Didn't find desktop.asar"

If injecting fails with an error about not finding `desktop.asar`, your Discord install is likely corrupted. Do a clean reinstall.

### Windows

1. Press `Windows+R`.
2. Type `%AppData%` and press OK, then delete the `Discord` folder.
3. Repeat for `%LocalAppData%` and delete the `Discord` folder there too.
4. Reinstall Discord. Quick download links:

- [Main Branch (Discord)](https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64)
- [PTB Branch (Discord PTB)](https://ptb.discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64)
- [Canary Branch (Discord Canary)](https://canary.discord.com/api/downloads/distributions/app/installers/latest?channel=canary&platform=win&arch=x64)

You can also follow Discord's official guide [on corrupt Discord installations](https://support.discord.com/hc/en-us/articles/115004307527--Windows-Corrupt-Installation).

After reinstalling Discord, run `pnpm inject` again from your Pixelcord folder.

## 3. Windows Defender blocked something

If a download or build step is blocked, this is often Windows Defender (or another antivirus) being overly cautious. Add an exclusion for the affected file or folder. Learn how to add an exclusion [in this article](https://www.howtogeek.com/671233/how-to-add-exclusions-in-windows-defender-on-windows-10/).

## 4. "Discord Activities aren't working!"

This is often caused by OpenASAR. Simply uninject OpenASAR from Discord and restart it. If you're using Pixeltop, make sure you're on the [latest release](https://github.com/pixel-cord/Pixeltop/releases).

## 5. "Pixeltop isn't detecting my game(s) or programs!"

This is because of how Pixeltop detects games and programs using **arrpc-bun**. Learn more about arrpc-bun [here](https://github.com/Creationsss/arrpc-bun).

## 6. "I have a different issue!"

For any other issues, please open a [GitHub issue](https://github.com/pixel-cord/pixelcord/issues) on the Pixelcord repository. Include as much detail as you can — your OS, what you were doing, and any error messages — so it can be diagnosed quickly.

# Good Redirect

> ⚠️ **Work in progress:** this project is currently in active development. The features described below are planned and **do not exist yet**.

Good Redirect is a browser extension designed to help people reduce unwanted online habits.

Instead of relying on willpower in the moment, the extension aims to redirect visits from distracting or harmful websites to pages that reinforce healthier choices.

## Why this project exists

Many online behaviors happen quite automatically, but may be bad: gambling, watching porn, or way too much social media. Good Redirect aims to prevent you from doing that, by redirecting you from such "bad sites" to better ones, that either remind you why you should not do that bad behaviour, or that present you alternatives of what to do instead.

The goal: replacing bad habits with better ones.

## How it is intended to work

After installing the extension, users will be able to:

1. Select behavior presets to avoid (for example, porn or gambling).
2. Configure a personal redirect URL for each preset.
3. Get redirected each time a matching website is opened.

Example:
- A user enables the gambling preset.
- They set a redirect URL to a helpful video why not to gamble, and why gambling is bad.
- When they try to open a matching site, Good Redirect sends them to that helpful video instead.

## Planned features

- Presets for common unwanted behavior categories (gambling, porn, maybe social media)
- Custom redirect targets per category
- Simple, focused configuration UI

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

Note that contributions may not be accepted in early stages of the project, if I want to code the browser extension on myself.

## License

This project is licensed under the terms described in [LICENSE.md](./LICENSE.md).

## Technologies used

- [Svelte](https://svelte.dev/) — frontend framework

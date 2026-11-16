# Starfall

A responsive gaming / anime / manga hub inspired by the visual structure of Space-proxy. This starter is a standalone front-end; it does not include Space's proxy/browser code.

## Run locally

You can open `index.html` directly for the basic UI, but the catalog fetch works best from a local server:

```bash
npx serve .
```

Or deploy this folder to a static host such as GitHub Pages, Netlify, or Vercel.

## Add your own HTML games

1. Create a folder such as `games/my-game/` in this project.
2. Put the complete game files there (including its CSS, JS, images, and audio folders).
3. Add an entry to `catalog.json` under `games`, for example:

```json
{
  "id": "my-game",
  "title": "My Game",
  "category": "arcade",
  "description": "A short description.",
  "url": "/games/my-game/index.html",
  "cover": "/assets/covers/my-game.jpg",
  "type": "game"
}
```

The game opens in an iframe popup. Some games intentionally prevent iframe embedding; those can be opened in a separate tab instead. Only add games you own or have permission to host.

## Add anime and manga

Add entries under `anime` or `manga` in `catalog.json`. Anime URLs can point to an MP4/WebM file or a player page that permits embedding. Manga URLs can point to a chapter reader page or a page/image you are authorized to share. For multi-page manga, a dedicated reader component can be added later.

The Add buttons let you add links locally in your browser using localStorage. These local entries are not automatically shared with other visitors; put public entries in `catalog.json` and redeploy.

## jsDelivr setup

Edit `config.js` and set:

```js
cdn: {
  enabled: true,
  githubUser: 'YOUR_GITHUB_USERNAME',
  githubRepo: 'YOUR_REPOSITORY',
  branch: 'main'
}
```

Use `window.starfallAsset('assets/covers/example.jpg')` in your own scripts to build a jsDelivr URL. jsDelivr is intended for static assets such as images, CSS, JavaScript, and JSON. Do **not** use it as an executable HTML-game host. Keep HTML game bundles in the site's `/games/` directory, GitHub Pages, or object storage such as Cloudflare R2. For large game bundles, set `gameStorageBase` to your public R2 base URL and use those full URLs in `catalog.json`.

## Space-proxy inspiration and license

This project uses its own implementation and original Starfall styling, taking inspiration from the layout concept of the public Space-proxy project. It does not copy or bundle Space-proxy source files. If you later copy or modify code from Space-proxy itself, review and comply with its AGPL-3.0 license, including applicable source-sharing obligations.

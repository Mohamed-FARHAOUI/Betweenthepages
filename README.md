# Between the Pages

A private, Spotify-inspired soundtrack site — mobile-first, installable, works offline once saved.

## 1. Add your songs

Drop your mp3 files into `audio/`, then open `js/playlist.js` and edit the
`tracks` array at the top. Each entry looks like:

```js
{
  title: "Skinny Love",
  artist: "Bon Iver",
  file: "audio/01-skinny-love.mp3",
  artwork: "",              // optional — see step 2
  book: "Book I",           // optional — leave "" if none
  page: "87",                // optional — leave "" if none
  note: "This one stayed with me."  // optional — leave "" if none
}
```

Add, remove, or reorder entries freely — the playlist, hero panel, and
persistent player all render from this array automatically.

**Only fill in `book` / `page` / `note` where you actually have a real
memory attached.** Tracks with all three left blank still work fine —
they just show as a plain song row, no invented detail.

## 2. Add artwork (optional)

Drop square images into `images/artwork/` and reference them from a
track's `artwork` field, e.g. `"images/artwork/01.jpg"`. Any track left
without artwork gets a quiet generated gradient instead, so nothing
looks broken if you skip this.

## 3. Replace the icons (optional)

`icons/icon-192.png` and `icons/icon-512.png` are placeholder marks.
Swap in your own square PNGs at the same filenames and sizes if you'd
like a custom install icon.

## 4. Test it locally

Browsers block service workers on `file://`, so serve the folder over
local HTTP:

```
cd between-the-pages
python3 -m http.server 8000
```

Then open `http://localhost:8000` on your phone (same Wi-Fi) or in a
desktop browser.

## 5. Host it

Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare
Pages. **It must be served over HTTPS** (or localhost) for the
"Save for Offline" button and installability to work — service workers
are blocked on plain HTTP.

Once it's live, generate a QR code pointing at the URL — that's the
card.

## How offline saving works

Tapping "Save for Offline" registers a service worker and tells it to
cache the app shell plus every mp3 in your `tracks` array. Once it
finishes, the button changes to "The Soundtrack Is Yours" and the site
keeps working with no connection — including a full page reload.

## Project structure

```
between-the-pages/
├── index.html
├── manifest.json
├── sw.js
├── css/style.css
├── js/
│   ├── playlist.js   — track data + playlist rendering
│   ├── player.js      — audio playback logic
│   ├── offline.js     — service worker + save-for-offline UX
│   └── app.js          — landing transition + wiring
├── audio/              — your mp3 files
├── images/artwork/     — optional cover art
└── icons/               — PWA install icons
```

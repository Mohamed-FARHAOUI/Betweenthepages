/* ============================================================
   SERVICE WORKER — app shell precache + on-demand audio caching
   ============================================================ */

const SHELL_CACHE = "btp-shell-v1";
const AUDIO_CACHE = "btp-audio-v1";

const SHELL_ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "css/style.css",
  "js/playlist.js",
  "js/player.js",
  "js/offline.js",
  "js/app.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== SHELL_CACHE && name !== AUDIO_CACHE)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Cache-first for shell assets and cached audio; network fallback otherwise.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => {
        // No cache, no network — nothing sensible to return for most assets.
        return new Response("", { status: 504, statusText: "Offline" });
      });
    })
  );
});

self.addEventListener("message", (event) => {
  if (!event.data || event.data.type !== "CACHE_SOUNDTRACK") return;
  const port = event.ports[0];
  const files = event.data.tracks || [];

  caches.open(AUDIO_CACHE).then(async (cache) => {
    const results = await Promise.allSettled(
      files.map((file) =>
        fetch(file).then((res) => {
          if (!res.ok) throw new Error(`${res.status} for ${file}`);
          return cache.put(file, res);
        })
      )
    );

    const failed = results
      .map((r, i) => (r.status === "rejected" ? { file: files[i], reason: r.reason.message } : null))
      .filter(Boolean);

    if (failed.length) {
      console.error("Failed to cache these files:", failed);
      port.postMessage({ ok: false, error: `${failed.length} file(s) failed`, failed });
    } else {
      port.postMessage({ ok: true });
    }
  });
});
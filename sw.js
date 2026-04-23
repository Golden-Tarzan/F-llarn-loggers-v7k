// Service Worker for FÄLLARN LOGGERS - Offline support
// BUMP THIS VERSION whenever index.html changes so clients refresh
const CACHE_NAME = 'fallarn-v12';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './music.mp3'
];

// Install: cache all files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Fetch: NETWORK-FIRST for HTML/navigation (so updates appear immediately),
// CACHE-FIRST for heavy static files like music.mp3.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isNavigation =
    event.request.mode === 'navigate' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('/index.html');

  if (isNavigation) {
    // Network-first: always try the network, fall back to cache if offline
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok && event.request.method === 'GET') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(event.request).then(
            (cached) => cached || caches.match('./index.html')
          )
        )
    );
    return;
  }

  // Cache-first for the rest (music, manifest, etc.)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((response) => {
            if (response.ok && event.request.method === 'GET') {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
            }
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});

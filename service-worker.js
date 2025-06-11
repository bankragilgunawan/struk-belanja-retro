const CACHE_NAME = 'struk-retro-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon.png',
  './assets/html2canvas.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

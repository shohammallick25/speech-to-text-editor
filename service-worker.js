const cacheName = 'speech-to-text-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/lo.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetch Cached Content
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

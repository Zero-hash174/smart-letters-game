self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('smart-letters-game').then(function(cache) {
      return cache.addAll([
        '/tim.mp3',
        '/go.mp3',
        '/error.mp3',
        '/good.mp3',
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ghostv').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/ghostv.html',
        '/css/style.css',
        '/js/app.js',
        '/js/reset.js'
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
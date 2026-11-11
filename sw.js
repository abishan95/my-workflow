self.addEventListener('fetch', (event) => {
  // Allows app to function smoothly and install natively
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

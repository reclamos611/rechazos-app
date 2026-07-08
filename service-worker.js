const CACHE_VERSION = 'v11'; // ← cambiá este número cada vez que subas cambios
const CACHE_NAME = '611-rechazos-' + CACHE_VERSION;

const ASSETS = [
  '/rechazos-app/index.html',
  '/rechazos-app/respuesta_vendedor.html',
  '/rechazos-app/manifest.json',
  '/rechazos-app/logo.png'
];

// Instalación
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(ASSETS).catch(() =>
        cache.addAll([
          '/rechazos-app/index.html',
          '/rechazos-app/respuesta_vendedor.html'
        ])
      )
    )
  );
  self.skipWaiting(); // activa el nuevo SW inmediatamente
});

// Activación: borra cachés viejos automáticamente
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('611-rechazos-') && k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim(); // toma control de todas las tabs abiertas
});

// Fetch: network-first para HTML (siempre trae lo más nuevo), cache para el resto
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // APIs externas → siempre red
  if (
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('cloudinary.com') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) return;

  // HTML → network-first (siempre busca la versión más nueva)
  if (e.request.destination === 'document' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Resto → cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('/rechazos-app/index.html'));
    })
  );
});

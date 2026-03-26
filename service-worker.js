const CACHE_NAME = '611-rechazos-v1';
const ASSETS = [
  '/rechazos-app/reporte_rechazo.html',
  '/rechazos-app/respuesta_vendedor.html',
  '/rechazos-app/manifest.json',
  '/rechazos-app/logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(ASSETS).catch(() =>
        cache.addAll([
          '/rechazos-app/reporte_rechazo.html',
          '/rechazos-app/respuesta_vendedor.html'
        ])
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // APIs externas → dejar pasar sin caché
  if (
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('cloudinary.com') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('/rechazos-app/reporte_rechazo.html'));
    })
  );
});

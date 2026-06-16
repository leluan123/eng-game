/* ============================================================
   WordType - Service Worker
   Handles caching for offline PWA support
   ============================================================ */

const CACHE_NAME = 'wordtype-v1';

// Files to cache on install
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/data.js',
  './js/userManager.js',
  './js/storage.js',
  './js/audio.js',
  './js/levelManager.js',
  './js/bossManager.js',
  './js/ui.js',
  './js/game.js',
  './data/boss.json',
  './data/level1.json',
  './data/level2.json',
  './data/level3.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

/* ---------- INSTALL ---------- */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Failed to cache:', err);
      })
  );
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      // Claim all clients immediately
      return self.clients.claim();
    })
  );
});

/* ---------- FETCH (Cache-First Strategy) ---------- */
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version, but also fetch and cache update in background
          event.waitUntil(
            fetch(event.request)
              .then((networkResponse) => {
                // Update the cache with fresh content
                if (networkResponse && networkResponse.status === 200) {
                  caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse);
                  });
                }
              })
              .catch(() => {
                // Network failed, cached version is already being returned
              })
          );
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache the new response for future offline use
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // If both cache and network fail, return a fallback for navigation
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

/* ---------- MESSAGE HANDLER ---------- */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
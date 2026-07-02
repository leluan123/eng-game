/* ============================================================
   Game English - Service Worker
   Handles caching for offline PWA support
   ============================================================ */

const CACHE_NAME = 'gameenglish-v2';

// Files to cache on install
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './shared/css/style.css',
  './shared/js/userManager.js',
  './shared/js/storage.js',
  './shared/js/audio.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  // WordType game
  './games/wordtype/wordtype.html',
  './games/wordtype/js/data.js',
  './games/wordtype/js/audio.js',
  './games/wordtype/js/levelManager.js',
  './games/wordtype/js/bossManager.js',
  './games/wordtype/js/ui.js',
  './games/wordtype/js/game.js',
  './games/wordtype/data/boss.json',
  './games/wordtype/data/level1.json',
  './games/wordtype/data/level2.json',
  './games/wordtype/data/level3.json'
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
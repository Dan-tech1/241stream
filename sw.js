const CACHE_NAME = "241stream-v1";
const OFFLINE_URL = "/index.html";

// Ressources essentielles à mettre en cache immédiatement
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/films.html",
  "/series.html",
  "/animes.html",
  "/faq.html",
  "/about.html",
  "/dist/style.css",
  "/src/js/app.js",
  "/data.js",
  "/src/assets/images/stream241.jpg",
  "/src/assets/icons/favicon-32x32.png",
  "/src/assets/icons/icon-192x192.png",
  "/site.webmanifest"
];

//INSTALL : pré-cache des ressources critiques 
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pré-cache des ressources essentielles");
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  // Activation immédiate sans attendre la fermeture des anciens onglets
  self.skipWaiting();
});

// ─── ACTIVATE : nettoyage des anciens caches ───
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log("[SW] Suppression ancien cache :", name);
            return caches.delete(name);
          })
      );
    })
  );
  // Prend le contrôle de tous les clients immédiatement
  self.clients.claim();
});

// ─── FETCH : stratégie Network First avec fallback cache ───
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignorer les requêtes non-GET et les requêtes vers d'autres domaines (pubs, iframes, etc.)
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Ne pas mettre en cache les requêtes externes (pubs, tracking, iframes vidéo)
  if (url.origin !== self.location.origin) {
    // Pour les images TMDB, on utilise Cache First
    if (url.hostname === "image.tmdb.org") {
      event.respondWith(cacheFirst(request));
      return;
    }
    // Pour les fonts Google, Cache First aussi
    if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
      event.respondWith(cacheFirst(request));
      return;
    }
    return;
  }

  // Pages HTML : Network First (toujours avoir la dernière version)
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // CSS, JS, images locales : Stale While Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// ─── Stratégies de cache ───

// Network First : essaie le réseau, puis le cache, puis offline
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    // Fallback vers la page d'accueil en mode hors-ligne
    return caches.match(OFFLINE_URL);
  }
}

// Cache First : cache d'abord, réseau en fallback
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response("", { status: 408, statusText: "Offline" });
  }
}

// Stale While Revalidate : cache immédiat + mise à jour en arrière-plan
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

const CACHE = "floresta-interior-v9";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./img/leaf-single.webp",
  "./img/leaf-sprig.webp",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/icon-maskable-192.png",
  "./img/icon-maskable-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Áudio: deixar passar direto (range requests p/ seek; episódios grandes não entram no cache)
  if (e.request.url.includes("/audio/")) return;
  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request)
          .then((res) => {
            // só cachear respostas completas (200); 206/opaque quebram o Cache API
            if (e.request.method === "GET" && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
            }
            return res;
          })
          .catch(() => caches.match("./index.html"))
    )
  );
});

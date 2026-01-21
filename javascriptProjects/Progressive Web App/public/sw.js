self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open("static").then(function (caches) {
      console.log("Precaching");
      cache.addAll(["/", "/public/index.html", "/public/src/js/app.js"]);
    }),
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      }),
    ),
  );
});

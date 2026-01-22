const { cache } = require("react");

self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open("static-v2").then(function (caches) {
      console.log("Precaching");
      cache.addAll([
        "/",
        "/public/index.html",
        "/public/src/js/app.js",
        "/public/src/js/feed.js",
        "/public/src/js/promise.js",
        "/public/src/js/fetch.js",
        "/public/src/js/material.min.js",
        "/public/src/css/app.css",
        "/public/src/css/feed.css",
      ]);
    }),
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  event.waitUntil(
    caches.key().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== "stativ-v2" || key !== "dynamic") {
            console.log("Service worker- --- remove old cache", key);
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request).then(function (res) {
            return caches.open("dynamic").then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          });
        }
      }),
    ),
  );
});

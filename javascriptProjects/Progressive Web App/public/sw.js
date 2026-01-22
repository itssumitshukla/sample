const { cache } = require("react");
let CACHE_STATIC_NAME = "static-v4";
let CACHE_DYNAMIC_NAME = "dynamic-v2";

self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (caches) {
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
          if (key !== CACHE_STATIC_NAME || key !== CACHE_DYNAMIC_NAME) {
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
            return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          });
        }
      }),
    ),
  );
});

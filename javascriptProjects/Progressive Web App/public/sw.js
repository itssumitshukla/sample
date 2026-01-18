self.addEventListener("install", function (event) {
  console.log("Serivce working[SW file] Installing Service worker...".event);
});
self.addEventListener("activate", function (event) {
  console.log("Serivce working[SW file] Activating Service worker...".event);
  return self.clients.claim();
});

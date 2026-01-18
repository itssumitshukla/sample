if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/public/sw.js", { scope: "/public/help" })
    .then(function () {
      console.log("Service worker working");
    });
}

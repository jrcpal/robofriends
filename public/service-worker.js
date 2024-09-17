// public/service-worker.js

// This is the "Offline page" service worker

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Cached offline page during install");

      if (offlineFallbackPage === "offline.html") {
        return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
      }

      return cache.add(offlineFallbackPage);
    })
  );
});

// If any fetch fails, it will show the offline page.
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(function (error) {
      console.error("[PWA Builder] Network request Failed. Serving offline page " + error);
      return caches.open(CACHE).then(function (cache) {
        return cache.match(offlineFallbackPage);
      });
    })
  );
});

// This is a fallback for any other fetches that fail.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
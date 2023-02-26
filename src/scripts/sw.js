import CacheHelper from "./utils/cache-helper";

const assetToCache = [
  './',
  './favicon.png',
  './index.html',
  './app.bundle.js',
  './app.manifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});
 
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});
 
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

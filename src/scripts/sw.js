import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
]

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});
 
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});
 
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

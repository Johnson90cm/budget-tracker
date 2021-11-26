self.addEventListener('install', function (e) {

    const APP_PREFIX = 'budgetTracker-';     
    const VERSION = 'version_01';
    const CACHE_NAME = APP_PREFIX + VERSION;

})

const FILES_TO_CACHE = [
    "./server.js",
    "./public/index.html",
    "./public/css/styles.css",
    "./public/js/index.js",
    "./routes/api.js",
  ];

  self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  })
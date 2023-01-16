var CACHE_NAME='static-v1';

//sw installation
self.addEventListener('install', function(event) {
    event.waitUntil (
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll ([
                '/',
                'index.html',
                '/css/style.css',
                '/script/script.js',
                'manifest.json'
            ])
        })
    )
});

//sw activation
self.addEventListener('activate', function activator(event){
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.filter(function(key) {
                return key.indexOf(CACHE_NAME) !== 0;
            })
            .map(function (key) {
                return caches.delete(key);
            })
            );
        })
    );
});

//request interception
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
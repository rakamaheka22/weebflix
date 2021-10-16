/*global workbox*/
workbox.core.setCacheNameDetails({prefix:  "weebflix"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    /https:\/\/api\.jikan\.moe\/v3\/top\/anime\/1\/upcoming/,
    /https:\/\/api\.jikan\.moe\/v3\/top\/anime\/1\/airing/,
    new  workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({request, url}) => request.destination === 'image' &&
                        url.pathname.startsWith('/img'),
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 365
            }),
        ],
    })
);

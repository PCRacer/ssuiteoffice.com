self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open('SSuiteSoft10');
      await cache.addAll([
        '/',
        '/index.htm',
        '/software.htm',
        '/resources/windowswithnojava.htm',
        '/images/notfound/fplt.jpg',
        '/images/notfound/11empty-office.jpg',
        '/images/notfound/mcu.jpg',
        '/images/notfound/d2.jpg',
        '/static/fonts/mplus/m-plus-rounded-1c-v10-latin-ext_latin-700.woff2',
        '/static/fonts/roboto/roboto-v20-latin_latin-ext-300.woff2',
        '/static/fonts/roboto/roboto-v20-latin_latin-ext-700.woff2',
        '/static/fonts/roboto/roboto-v20-latin_latin-ext-regular.woff2',
        '/static/fonts/nunito/XRXV3I6Li01BKofINeaB.woff2',
        '/static/fonts/nunito/XRXW3I6Li01BKofAjsOUYevI.woff2'
      ]);
    })()
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        let responseClone = response.clone();
        caches.open('SSuiteSoft10').then(function(cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    }).catch(function() {
      return caches.match('../index.htm');
    })
  );
});
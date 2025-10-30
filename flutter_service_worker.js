'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6809778f2a60c9e0d00be251584b26d1",
"assets/AssetManifest.bin.json": "6c4c640adf49dc476f422b935ef0ad0a",
"assets/AssetManifest.json": "187f04cbcd2b9def8ffc412100dfdef6",
"assets/assets/AYUDA.png": "8abc7a251dc5d9d1125966c16a8fd08d",
"assets/assets/bolsa.png": "84d95b614876f36e6a15804e1ec9f90f",
"assets/assets/boo.png": "39f113b2623e3b171e814a2907c8407e",
"assets/assets/bubbletea.png": "ca9a246a27bb6459c501eb36aa0e35bc",
"assets/assets/Buldak.png": "a37e3920debaa5ab3cc0fe71e92ba82b",
"assets/assets/calabasa.png": "f01d145eb68a9730bb1137151916e056",
"assets/assets/canasta.png": "ca69dd9e82a51c4790b93dfd1f9e3afc",
"assets/assets/descuento.png": "5b00e98d4192169ab2c02906ba6a8fcb",
"assets/assets/dona.png": "83f0f6c747db5b428d8139d2768a08fd",
"assets/assets/dumpling.png": "760b69ffe7601460232b2f0f46c8daa5",
"assets/assets/equipo.png": "dfa948a0b2d271a622d680892b5fda1b",
"assets/assets/fantasma.png": "ff3401782c4d8662c6d79c6c8dcdd920",
"assets/assets/fondo.jpg": "f30ccdb387b280b8a2e53ac85f35ca96",
"assets/assets/fondo.png": "91671f059dacaf99491d7061fe1217db",
"assets/assets/hamburgesas.png": "a764b957b51dcfdcead2372e635661eb",
"assets/assets/idely.jpg": "6e52339a97c48119a7ab4c7e5936b35c",
"assets/assets/Independiente.png": "fb2564411d3f52f680c9cf1b7fe5e538",
"assets/assets/inicio.jpg": "81abc553e266c0151996d9778abef63c",
"assets/assets/login.png": "d9bc3870e8867edfa59a5bf9e168c3b3",
"assets/assets/logo.png": "c73a078ba406e9af0cc5d1f56eb3e71f",
"assets/assets/logo2.png": "36f78cd7492e1a29bbec2103e6628192",
"assets/assets/mapa.png": "96bd9fed8043c052a639b147f3574cc7",
"assets/assets/muerte.png": "6c4c85996bb4b0d27133776cc9836320",
"assets/assets/murcielago.png": "13097006ef7c6f1886535ece3fde0bac",
"assets/assets/Muricielago.png": "db36328e7383b384a5dca545ba27981e",
"assets/assets/papas.png": "56f1e9d49df4fea123189a5045de8f45",
"assets/assets/paypal.png": "670b15e6a4aa68089c2d2339ca07f560",
"assets/assets/pizza.png": "e2bb150829a5d420a71e90423a6d00ca",
"assets/assets/plix.jpg": "afb8bce0314980754547f95c04f0136e",
"assets/assets/pollo.png": "13ba750f110a730e6fe7c02e2b533efa",
"assets/assets/ramen.png": "9b31992ae37c607339f79b31e3beff5a",
"assets/assets/ramune.png": "9baafd15ea5ddf1e699f4ece2dec26cb",
"assets/assets/Solo.png": "818f7ea2f0c56bf60a3fefbfd4f8a9f6",
"assets/assets/telarana.png": "401e6ad02f21fdc42b9fd432f536f092",
"assets/assets/tesoro.png": "c17574eb2b0cd2a429b647e8d65feade",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "249b8f3b8022d8ab12bd24810cec851c",
"assets/NOTICES": "4a7e68d79e0834f6856525314879be1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "7fe58c3dafe4b60cafa38826cc5c7a66",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "52f4c4b2f8c4a09edeb861a35d5cae39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2fc3d0611a8943f2100daa89bed044c",
"/": "d2fc3d0611a8943f2100daa89bed044c",
"main.dart.js": "b5686ac0b4780a1a3f8863cd0424d827",
"manifest.json": "68f5767fa0bf4f28ca7c65bc1dafc33f",
"version.json": "e58ced1996d3e6116670bc12b6abf4f8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

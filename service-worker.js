const CACHE_NAME = 'viajesmx-pwa';
const urlsToCache = [
    //Archivos HTML (version escritorio)
    './index.html',
    './registro.html',

    './desktop-version/home-computer-view.html',
    './desktop-version/details-computer-view.html',
    './desktop-version/contact-computer-view.html',
    './desktop-version/reservations-computer-view.html',
    './desktop-version/search-computer-view.html',

    './movile-version/contact-movile-view.html',
    './movile-version/details-movile-view.html',
    './movile-version/home-movile-view.html',
    './movile-version/reservations-movil-view.html',
    './movile-version/search-movile-view.html',

    'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js',
    'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js',

    //Archivos CSS
    './assets/css/style-login.css',
    './assets/css/style-main.css',
    './assets/css/styles-movil-app.css',

    //Archivos JS
    './app.js',
    './assets/js/functions-movil-min.js',
    './assets/js/login-js-movil-min.js',
    './assets/js/login-min.js',
    './assets/js/message-movil-tablet-contact.js',
    './assets/js/version-vista-index.js',
    './assets/js/version-vista.js',

    //Links de dedependencias de terceros
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',
    'https://cdn.jsdelivr.net/npm/sweetalert2@11',

    //Archivos PWA
    './manifest.json',

    //Imagenes de los sitios
    './assets/images/places/acapulco.jpg',
    './assets/images/places/bacalar.jpg',
    './assets/images/places/cancun.jpg',
    './assets/images/places/chichen_itza.jpg',
    './assets/images/places/cuidad_de_mexico.png',
    './assets/images/places/culiacan.jpg',
    './assets/images/places/guadalajara.jpg',
    './assets/images/places/guanajuato.webp',
    './assets/images/places/guaymas.jpg',
    './assets/images/places/mazatlan.webp',
    './assets/images/places/merida.webp',
    './assets/images/places/monterey.jpg',
    './assets/images/places/morelia.jpg',
    './assets/images/places/oaxaca.jpg',
    './assets/images/places/palenque.jpg',
    './assets/images/places/playa-del-carmen.webp',
    './assets/images/places/puebla.png',
    './assets/images/places/puerto-vallarta.jpg',
    './assets/images/places/real-de-catorce.jpg',
    './assets/images/places/riviera-maya.jpg',
    './assets/images/places/san-miguel-de-allende.jpg',
    './assets/images/places/taxco.jpg',
    './assets/images/places/tulum.webp',
    './assets/images/places/zacatecas.jpg',

    //Fotografia de usuario
    './assets/images/users/user.jpg',

    //Icon del sitio web
    './assets/images/sitio/logotipo-viajesmx-icono.png',
    
];

// Evento de instalación
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caché abierta');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento de activación
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando cache antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Evento de fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Devuelve la respuesta almacenada en caché si está disponible
                if (response) {
                    return response;
                }

                // Si no está en caché, realiza una solicitud de red y la agrega a la caché
                return fetch(event.request)
                    .then((response) => {
                        // Comprueba si la respuesta es válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});
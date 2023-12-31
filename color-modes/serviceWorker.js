const colorPWA = "appuzaplication";
const assets=[
    "/",
    "/index.html",
    "/css/app.color-modes.css",
    "/js/app.color-modes.js"
]

self.addEventListener("install", installEvent=>{
    installEvent.waitUntil (
        caches.open(colorPWA).then(cache =>{
            caches.addAll(assets)
        })
    )
})

self.addEventListener('fetch', fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.event);
        })
    )
})
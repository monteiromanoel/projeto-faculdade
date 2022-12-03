self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./html/index.html", "./html/pg1.html", "./html/pg2.html", "./html/pg3.html", "./html/pg4.html", "./css/style.css", "./image/maskable_icon_x192.png", "./script/script.js"])
        })
    );
});
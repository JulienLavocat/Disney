const caches = new Map;

class Cache {

    constructor() {
        this.cache = new Map();
    }

    get(key) {
        if(this.cache.has(key))
            return this.cache.get(key);
        else
            this
    }

    set() {}

}

module.exports = function (cacheName) {

    if(caches.has(cacheName))
        return caches.get(cacheName);
    else {
        caches.set(cacheName, new Map());
        return caches.get(cacheName);
    }

}
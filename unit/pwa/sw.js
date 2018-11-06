// try edit the cached files and/or the `cachedFiles` list
const cachedFiles = [
  './',
  './app.js',
  './index.html',
]

// edit this to force re-cache
const cacheKey = 'demo-sw-v1'

// install, a good time to preload cache
self.addEventListener('install', event => {
  console.log(`${cacheKey} is installed`)
  event.waitUntil((async () => {
    const cache = await caches.open(cacheKey)
    return cache.addAll(cachedFiles)
  })())
})

// activate, a good time to clean old cache since the old service work stops now
self.addEventListener('activate', event => {
  console.log(`${cacheKey} is activated`)
  event.waitUntil((async () => {
    const keys = await caches.keys()
    return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
  })())
})

// fetch
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const response = await caches.match(event.request)
    if (response) {
      console.log(`Catch fetch: ${event.request.url}`)
      return response
    }
    console.log(`Network fetch: ${event.request.url}`)
    return fetch(event.request)
  })())
})

// vi:et:sw=2:ts=2

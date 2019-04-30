import 'babel-polyfill'

const cachedFiles = [
  './',
  './index.html',
  './app.eef07239.css',
  './app.dfcc6fdd.js',
  './lato-v15-latin-regular.1971f58d.woff2',
  './icons.6c15f489.woff2',
  './manifest.webmanifest',
  './VOCA-144x144.c861b8bd.png'
]

// edit this to force re-cache
const cacheKey = 'demo-sw-v0'

// install, a good time to preload cache
self.addEventListener('install', event => {
  console.log(`${cacheKey} is installed`)
  event.waitUntil((async () => {
    const cache = await caches.open(cacheKey)
    return cache.addAll(cachedFiles)
  })())
})

self.addEventListener('activate', event => {
  console.log(`${cacheKey} is activated`)
  event.waitUntil((async () => {
    const keys = await caches.keys()
    return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
  })())
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const response = await caches.match(event.request)
    if (response) {
      console.log(`Cache fetch: ${event.request.url}`)
      return response
    }
    console.log(`Network fetch: ${event.request.url}`)
    return fetch(event.request)
  })())
})

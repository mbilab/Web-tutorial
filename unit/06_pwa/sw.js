const cacheFile = [
  './',
  './index.html',
]

const cacheKey = 'demo-app-v1'

// install
self.addEventListener('install', event => {
  console.log("now install")

  event.waitUntil(
    caches.open(cacheKey)
    .then(cache => cache.addAll(cacheFile))
    // .then(() => self.skipWaiting())
  )
})

// activate
self.addEventListener('activate', event => {
  console.log(`activate ${cacheKey}, now ready to handle fetches`)
  event.waitUntil(
    caches.keys().then(cacheNames => {
      const promiseArr = cacheNames.map(item => {
        if (item !== cacheKey) {
          return caches.delete(item)
        }
      })
      return Promise.all(promiseArr)
    })
  )
})

// fetch
self.addEventListener('fetch', event => {
  console.log(`${event.request.method}: ${event.request.url}`)
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

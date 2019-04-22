# PWA
## Step 0: set up and build a website
使用 npm 或 yarn 安裝 express `npm i express --save` 或 `yarn add express`
啟動 server 完成基本網站的架設。

## Step 1: set up ssl configeration
由於 pwa 對於資訊安全的要求，我們必須架設以 https 為協定的 Server。

* 申請 ssl 憑證。

  [SSL For Free](https://www.sslforfree.com/)

* 將 config.json.sample 複製成 config.json。

  `cp config.json.sample config.json`

* 進入`config.json`，填寫 `cert`、`ca`、`key` 的路徑。

* 在 `ser.js` 加入
  ```
  const https = require('https')

  const options = {
    ca : fs.readFileSync(config.ssl.ca),
    key: fs.readFileSync(config.ssl.key),
    cert:fs.readFileSync(config.ssl.cert)
  }

  https.createServer(options, app).listen(port,()=>{
      console.log(`listen on port:${port}`)
  })
  ```
補充: https 加密連線，可以確保封包傳輸在過程中沒有被攔截或竄改。

## Step 2: 註冊 service worker
為了讓應用離線工作，要註冊一個 service worker，一段允許在後臺運行的腳本。其中 sw.js 必須放在根目錄，因為 service workers 的作用範圍是根據其在目錄結構中的位置決定的。
在 `register.js` 中加入:
```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => {
    console.log(`SW is registered with scope: ${reg.scope}`)
  })
  .catch(err => {
    console.log('SW Error ', err)
  })
}
```
這時，console 會顯示 `SW is registered with scope: ${reg.scope}`，但實際上 cache 裡沒有任何資料。

![](https://i.imgur.com/WEwp3DY.png)

補充: Promise and Async function

## Step 3: service worker 安裝時
// todo 解釋三階段
當 service worker 被註冊以後，當用戶首次訪問頁面的時候一個 install 事件會被觸發。在這個事件的回調函數中，我們能夠緩存所有的應用需要再次用到的資源，把所有你設定的資源加入 cache 中。在 `register.js` 中加入:

```
  // try edit the cached files and/or the `cachedFiles` list
  const cachedFiles = [[files you want to cache]]

  // edit this to force re-cache
  const cacheKey = [service worker's version]

  // install, a good time to preload cache
  self.addEventListener('install', event => {
    console.log(`${cacheKey} is installed`)
    event.waitUntil((async () => {
      const cache = await caches.open(cacheKey)
      return cache.addAll(cachedFiles)
    })())
  })
```
這時 cahce 會加入我們所需要的資料，但我們還尚未啟動 service worker。
![](https://i.imgur.com/x8Lg5Dm.png)

## Step 4: service worker 啟動時
我們可以在這個時候把舊的 cache 清除。在 `register.js` 中加入:
```
self.addEventListener('activate', event => {
  console.log(`${cacheKey} is activated`)
  event.waitUntil((async () => {
    const keys = await caches.keys()
    return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
  })())
})
```
新舊版本的 cache 資料很像 chrome 的更新，會先將新的資料下載好，當瀏覽器重新啟動後才會把新的資料拿來用。而 service worker 會在分頁重新啟動後，才會把新的資料拿來用。原因獲得新版本時，是舊的版本仍在啟動中，新的版本只能被安裝無法被啟動，詳情請看[service worker生命週期](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa?hl=zh-tw)

## Step 5: 控制資料抓取
當網頁要向網路抓取資料時，先查看 cache 中是否有相符的資料，若沒有相符的資料再向網路抓取資料。
```
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
```

todo: 設計增加檔案，設計更改檔案

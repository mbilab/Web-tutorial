# PWA
## Step 0: set up and build a website
使用 npm 或 yarn 安裝 express `npm i express --save` 或 `yarn add express`
啟動 server 完成基本網站的架設。

## Step 1: set up https
由於 pwa 對於資訊安全的規定，我們必須架設以 https 為協定的 Server。

* 申請 ssl 憑證。

  [SSL For Free](https://www.sslforfree.com/)

* 將 config.json.sample 複製成 config.json。

  `cp config.json.sample config.json`

* 進入`config.json`，填寫 `cert`、`ca`、`key` 的路徑。

* 打開 `ser.js` 依指示刪掉程式碼，並加入:
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

## Step 2: 加入 manifest.json
Web App manifest 提供了應用程式相關的資訊（像是名稱、作者、圖示、描述）。 manifest 的功用是將 Web 應用程式安裝到設備的主畫面。
在 `dist/index.html` 加入:
 ```
 <!-- for iOS -->
 <link rel="apple-touch-icon" sizes="144x144" href="./src/VOCA-144x144.png"/>
 <link rel="manifest" href="./manifest.json">
 ```
 可以在`./manifest.json`更改 pwa 名稱及縮圖。

## Step 3: 註冊 service worker
為了在離線時能順利工作，我們要註冊一個 service worker，一支在後臺運行的程式，管理向網路抓取資料的行為。
在 `dist/src/app.js` 中加入:
```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
  .then(reg => {
    console.log(`SW is registered with scope: ${reg.scope}`)
  })
  .catch(err => {
    console.log('SW Error ', err)
  })
}
```
其中 sw.js 必須放在根目錄，因為 service workers 的作用範圍是根據其在目錄結構中的位置決定的。
這時打開瀏覽器，console 會顯示 `SW is registered with scope: ${reg.scope}`，但實際上 cache 裡沒有任何資料。

![](https://i.imgur.com/WEwp3DY.png)

補充: Promise and Async function

## Step 4: 安裝 service worker

當 service worker 被註冊以後，service worker 就會開始運行， service worker 運行時，有三大事件可以被  listen。
* Install 
* Active
* Fetch

當用戶首次訪問頁面的時候一個 install 事件會被觸發。在這個事件的回調函數中，我們能夠緩存所有的資源，把所有你設定的資源加入 cache 中。在 `dist/sw.js` 中加入:

```
  // try edit the cached files and/or the `cachedFiles` list
  const cachedFiles = [
    './',
    './src/app.js',
    './src/cat1.jpeg',
    './index.html',
    './manifest.json',
    './src/VOCA-144x144.png',
  ]

  // edit this to force re-cache
  const cacheKey = 'demo-sw-v3'

  // install, a good time to preload cache
  self.addEventListener('install', event => {
    console.log(`${cacheKey} is installed`)
    event.waitUntil((async () => {
      const cache = await caches.open(cacheKey)
      return cache.addAll(cachedFiles)
    })())
  })
```
其中 ExtendableEvent.waitUntil() 延長事件的壽命，從而阻止瀏覽器在事件完成之前終止 service worker。

這時 cahce 會加入新的資料，但如果有舊的 service worker 我們不一定會啟動的新版 service worker。
![](https://i.imgur.com/x8Lg5Dm.png)

## Step 5: service worker 啟動時
首先我們要知道，如果有舊的 service worker，剛安裝好的 service worker 並不會馬上啟動，這種狀態稱爲“waiting”。  

當新的 serviceworker 啟動時 ，舊的 serviceworker 仍在 cache 中，我們可以把舊的 cache 清除或是其他你想要做的事。在 `dist/sw.js` 中加入:
```
self.addEventListener('activate', event => {
  console.log(`${cacheKey} is activated`)
  event.waitUntil((async () => {
    const keys = await caches.keys()
    return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
  })())
})
```

只要舊的版本還在，就算新版的 service worker 安裝好，這段程式程式碼仍不會運作。當分頁關閉，舊的 service worker 停止，重新開啟分頁我們這段程式碼才會運作。

詳情請看[service worker生命週期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=zh-tw)。
並試試在 install 階段以 .skipWating() 取代 .waitUntivl()

## Step 6: 控制資料抓取
當網頁要向網路抓取資料時，先查看 cache 中是否有相符的資料，若沒有相符的資料再向網路抓取資料。在 `dist/sw.js` 中加入:

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
## Step 7: 資料新增
在  cachedFiles 中加入 './src/cat1.jpeg' 並更新 cacheKey，在 `dist/sw.js`中更改

```
const cachedFiles = [
  ...
  './src/cat1.jpeg',
  ...
]
const cacheKey = 'demo-sw-v2'

```

這時重新整理網頁並觀察 console，會發先圖片原先由網路抓取，加入 cahce 後，從 cache 抓取。

## Step 8: 資料更改
在 `dist/index.html`中更改貓咪圖片為貓咪2:
```
 <div style="background:url('src/cat2.jpeg') no-repeat no-repeat;width:600px;height:400px;"></div>
```

這時重新整理網頁，會發現網頁上的貓咪一直是貓咪 1，cahce 中的index.html 也並未改動。關掉網頁重開後，發現變成貓咪2，cahce 中的index.html 也變了。印證先前的教學。

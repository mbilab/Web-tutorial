# PWA

## Step 0: set up and build a website

使用 npm 或 yarn 安裝 express `npm i express --save` 或 `yarn add express`。啟動 server 完成基本網站的架設。

## Step 1: set up https

由於 pwa 對於資訊安全的規定，我們必須架設以 https 為協定的 server。

* 申請 ssl 憑證。

  [SSL For Free](https://www.sslforfree.com/)

* 將 config.json.sample 複製成 config.json。

```shell
cp config.json.sample config.json
```

* 開啟 `config.json`，填寫 `cert`、`ca`、`key` 的路徑。

* 開啟 `ser.js` 依指示刪掉程式碼，並加入:

```javascript
const https = require('https')

const options = {
  ca: fs.readFileSync(config.ssl.ca),
  cert: fs.readFileSync(config.ssl.cert),
  key: fs.readFileSync(config.ssl.key),
}

https.createServer(options, app).listen(port,()=>{
  console.log(`listen on port:${port}`)
})
```

補充: https 加密連線，可以確保封包傳輸在過程中沒有被攔截或竄改。

## Step 2: 加入 manifest.json

Web App manifest 提供了應用程式相關的資訊（像是名稱、作者、圖示、描述）。

在 `dist/index.html` 加入:

```html
<!-- for iOS -->
<link rel="apple-touch-icon" sizes="144x144" href="./src/VOCA-144x144.png"/>
<link rel="manifest" href="./manifest.json">
```

可以在 `./manifest.json` 更改 pwa 名稱及縮圖。

## Step 3: 註冊 service worker

為了在離線時能順利工作，我們要註冊一個 service worker，一支在背景執行的程式，管理向網路抓取資料的行為。在 `dist/src/app.js` 中加入:

```javascript
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

其中 sw.js 必須放在根目錄，因為 service workers 的作用範圍是根據其在目錄結構中的位置決定的。這時打開瀏覽器，console 會顯示 `SW is registered with scope: ${reg.scope}`，這時候 cache 裡沒有任何資料。

![](https://i.imgur.com/WEwp3DY.png)

補充: Promise and Async function

## Step 4: 安裝 service worker

當 service worker 被註冊以後，service worker 就會開始運行，service worker 運行時，有三大事件可以被 listen。

* Install 
* Active
* Fetch

當用戶首次訪問頁面的時候一個 install 事件會被觸發。在這個事件的 callback 函數中，我們能夠把所有設定的資源加入 cache 中。在 `dist/sw.js` 中加入:

```javascript
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
const cacheKey = 'demo-sw-v1'

// install, a good time to preload cache
self.addEventListener('install', event => {
  console.log(`${cacheKey} is installed`)
  event.waitUntil((async () => {
    const cache = await caches.open(cacheKey)
    return cache.addAll(cachedFiles)
  })())
})
```

其中 event.waitUntil() 延長事件的壽命，從而阻止瀏覽器在事件完成之前終止 service worker。

這時 cahce 會加入新的資料，但如果有舊的 service worker 新版的 service worker 不會自動 activate。

![](https://i.imgur.com/x8Lg5Dm.png)

## Step 5: service worker 啟動時

首先我們要知道，如果有舊的 service worker，剛安裝好的 service worker 並不會馬上啟動，這種狀態稱爲 "waiting"。

當新的 service worker 啟動時，我們可以把舊的 cache 清除。在 `dist/sw.js` 中加入:

```javascript
self.addEventListener('activate', event => {
  console.log(`${cacheKey} is activated`)
  event.waitUntil((async () => {
    const keys = await caches.keys()
    return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
  })())
})
```

只要舊的版本還在，就算新版的 service worker 安裝好，這段程式程式碼仍然無法啟動(想像軟體安裝新版時，通常得先把它關掉)。當網頁關閉，舊的 service worker 停止後，重新開啟網頁我們這段程式碼才會運作。

詳情請看[service worker生命週期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=zh-tw)。在 install 階段加上 `self.skipWaiting()` 是一種比較粗爆的解法。

## Step 6: 控制資料抓取

當網頁要向網路抓取資料時，先查看 cache 中是否有相符的資料，若沒有相符的資料再向網路抓取資料。在 `dist/sw.js` 中加入:

```javascript
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

在 cachedFiles 中加入 `./src/cat2.jpeg` 並更新 cacheKey，在 `dist/sw.js`中更改

```javascript
const cachedFiles = [
  ...
  './src/cat2.jpeg',
  ...
]
const cacheKey = 'demo-sw-v2'
```

這時重新整理網頁並觀察 console，會發先圖片原先由網路抓取，加入 cache 後，從 cache 抓取。

## Step 8: 資料更改

在 `dist/index.html` 中更改貓咪圖片為 `src/cat2.jpeg`：

```html
<div style="background:url('src/cat2.jpeg') no-repeat no-repeat; width: 600px; height: 400px;"></div>
```

這時重新整理網頁，會發現網頁上的貓咪一直是貓咪 1，cache 中的 `index.html` 也並未改動。關掉網頁重開後，發現變成貓咪 2，cahce 中的 `index.html` 也變了。

## Step 8: 更多

瀏覽器對 PWA 的支援一直有在更新，了解基礎後，實際運用時，可以使用一些 CLI 工具來幫忙快速建立 PWA 網頁，例如 `vue-cli`。

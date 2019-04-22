# PWA
## Step 0: set up and build a website
使用 npm 或 yarn 安裝 express `npm i express --save` 或 `yarn add express`
啟動 server 完成基本網站的架設。

## Step 1: set up ssl configeration
自行申請 ssl 憑證，並將 config.json.sample 複製成 config.json，並完成設定。
`cp config.json.sample config.json`
架設以 https 為協定的 Server，配合 pwa 的安全規定。
在 `ser/js` 加入
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
補充: https 在 http 的基礎上，透過 ssl/stl 加密，以非對稱加密配合對稱加密，確保封包傳輸在過程中沒有被攔截或竄改。

## Step 2: 註冊 service worker

## Step 3: 安裝 service worker

## Step 4: 啟動 service worker

## Step 5: 控制資料抓取

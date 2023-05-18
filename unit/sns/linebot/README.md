# LINE Bot

1. 在 [LINE Developers Console](https://developers.line.biz/console/) 中建立 Channel, 如何建立 Channel 請參考 [如何建立Channel](https://developers.line.biz/en/docs/messaging-api/getting-started/)

2. 在 Channel 的頁面中點選 Messaging API 頁籤，將 Webhook URL 設定為 `https://luffy.ee.ncku.edu.tw:[port]/webhook`

3. 執行 `yarn` 安裝需要用到的套件

4. 複製 config.sample.js 並改名為 config.js `cp config.sample.js config.js`

5. 將 channel 中的資訊和 ssl 的檔案位置以及 port 填入 `config.js`

6. 執行 `node app.js`

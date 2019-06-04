# Sound

## Audio
### Step 1: Audio

只需要使用 audio 的標籤就可以將音訊載入，將以下的程式碼插入`./index.html`中，並觀察結果
```
    <!-- Step 1
    controls 的屬性表示用瀏覽器預設的播放器
    還有其他屬性包括 autoplay(自動播放)、loop(循環)、muted(靜音)等等
    更詳細內容的可以參考 https://www.w3schools.com/tags/ref_av_dom.asp
    play() 函式定義在 app.js 中，可以用 js 去操控 audio
    -->
    <audio controls src="res/SynthChime1.mp3"></audio>
```

### Step 2: current time

另外，我們也可以讓音樂在一個特定時間開始播放，將以下的程式碼插入`./app.js`的 Step 2中，點擊 `play` 觀察結果，並且改改看其中的秒數
```
  //Step 2
  audio.currentTime = 0.3
```

## Video
### Step 3: Video

只需要使用 video 的標籤就可以將視訊載入，將以下的程式碼插入`./index.html`中，並觀察結果
```
    <!-- Step 3
    和audio相同
    controls 的屬性表示用瀏覽器預設的播放器
    還有其他屬性包括 autoplay(自動播放)、loop(循環)、muted(靜音)等等
    更詳細內容的可以參考 https://www.w3schools.com/tags/ref_av_dom.asp
    -->
    <video controls height="135" src="res/River.mov" width="240"></video>
```

## MediaDevices
### Stpe 4: Microphone and camera

使用瀏覽器獲得使用者裝置上影像或聲音。
將以下內容寫入 `app.js`:
```
/* Step 4
 * 使用 navigator 獲得麥克風的訪問權
 * 利用 WebRTC 規範中名爲 getUserMedia() 的 API 直接訪問麥克風。
 * getUserMedia() 將提示用戶授予對其相連麥克風和攝像頭的訪問權。
 * 將 getUserMedia() 返回的 stream 附加到 <audio> 元素上，便能在網頁上顯示影片。
 */
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: 'video' === type,
}).then(stream => {
  if ('video' === type){
    document.querySelector('#stream-video').srcObject = stream
  }

  // Stpe 5.1

}).catch(err => console.log(err))
```

## MediaStream Recording
### Step 5: recording

將先前的資料儲存起來，將以下內容寫入 `app.js` 的 Step 5.1:
```
  /* Step 5.1
   * 將 getUserMedia 創建的 stream 交給 MediaRecoder API
   * 當 dataavailable 事件觸發時資料片段資料片段
   */
  window.recorder = new MediaRecorder(stream, {mimeType: `${type}/webm`})
  recorder.ondataavailable = event => {
    if (0 === event.data.size) return
    recordedChunks.push(event.data)
  }
```

控制 recorder 紀錄的時間

將以下內容寫入 `app.js` 的 Step 5.2:
```
// Step 5.2
// 開始記錄
const start = () => {
  recordedChunks.length = 0
  recorder.start(100) // a chunk per 100 ms
}
// 檢查狀態並停止紀錄
const stop = () => {
  if ('inactive' === recorder.state) return
  recorder.stop()
}
```

把資料轉成檔案並下載
將以下內容寫入 `app.js` 的 Step 5.3:
```
/* Step 5.3
 * 把 recordedChunks 中的資料換成 Blob，
 * 並透過 URL.createObjectURL 創建 url，
 * 讓 Blob有超連結，並透過讓使用者超連結下載資料。
 */
const download = () => {
  stop()
  const blob = new Blob(recordedChunks, {type: `${type}/webm`})
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.download = `test.webm`
  a.href = window.URL.createObjectURL(blob)
  a.click()
  document.body.removeChild(a)
}
```

## Web Speech
### Step 6:

將以下內容寫入 `app.js` 的 Step 6:

```
/* Step 6
 * SpeechSynthesis 是一個控制瀏覽器合成聲音的介面，
 * 並透過 SpeechSynthesisUtterance 回應發生請求。
 */
// Web Speech API
const utter = new SpeechSynthesisUtterance()
console.log(speechSynthesis.getVoices())
const speak = () => {
  // 嘗試把以下內容顯示在螢幕上，了解 speechSynthesis
  // console.log(speechSynthesis.getVoices())
  utter.voice = speechSynthesis.getVoices()
    .filter(v => v.name.includes('臺灣'))[0]
  utter.text = document.getElementById('text').value
  speechSynthesis.speak(utter)
}
```

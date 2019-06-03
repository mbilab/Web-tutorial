# Sound

## Audio
## Step 1: Audio

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

## Step 2: current time

另外，我們也可以讓音樂在一個特定時間開始播放，將以下的程式碼插入`./app.js`的 Step 2中，觀察結果，並且改改看其中的秒數
```
  //Step 2
  audio.currentTime = 1.2
```

## Video

## Step 1: Video
只需要使用 video 的標籤就可以將視訊載入，將以下的程式碼插入`./index.html`中，並觀察結果
```
    <!-- Step 1 
    和audio相同
    controls 的屬性表示用瀏覽器預設的播放器
    還有其他屬性包括 autoplay(自動播放)、loop(循環)、muted(靜音)等等
    更詳細內容的可以參考 https://www.w3schools.com/tags/ref_av_dom.asp
    -->
    <video controls height="135" src="res/River.mov" width="240"></video>
```

## MediaStream Recording
## MediaDevices
## Step 1: MediaDevices
## Web Speech

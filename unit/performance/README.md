# performance

## Step 0: 檢測網頁

利用 `GTmetrix` (https://gtmetrix.com/ )去檢測這個網頁
result: https://i.imgur.com/6MtN7Cc.png

## Step 1: Serve scaled images

有些圖片在網頁中，只需要一小區塊，卻使用了很大一張圖。所以將圖片預先縮小到適合的大小，就能夠優化網頁的載入速度。

`./step1` 中是縮小後的圖片，將其取代掉 `./assets/media/` 中原始的圖片。
再跑一次 `GTmetrix` (https://gtmetrix.com/ )看看結果。

## Step 2: Optimize images

圖片做過適當的壓縮，也能夠省出一些容量。

`./step2` 中是壓縮過後的圖片，將其取代掉 `./assets/media` 中原始的圖片。
再跑一次 `GTmetrix` (https://gtmetrix.com/ )看看結果。

## Step 3: Minify JavSScript

將 JavaScript 壓縮，也能夠節省出一些空間。通常的作法會是移除註解、刪除空白與換行、縮短變數名稱等等。

1. `./step3` 中是壓縮過後的JavaScript，將其取代掉 `./assets/js` 的Javascript。

2. `semantic-ui` 等等的框架，通常會一併推出壓縮過後的版本，直接將 `./index.html` 中的 `Step 3` 的 `CDN`，改成以下版本
```
    <!-- Step 3 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
```

3. 再跑一次 `GTmetrix` (https://gtmetrix.com/ )看看結果。

## Step 4: Minify CSS

同 Step 3，將 CSS 壓縮，也能夠節省出一些空間。通常的作法會是移除註解、刪除空白與換行、縮短變數名稱等等。

1. `./step4` 中是壓縮過後的CSS，將其取代掉 `./assets/css` 的CSS。

2. `semantic-ui` 等等的框架，通常會一併推出壓縮過後的版本，直接將 `./index.html` 中的 `Step 4` 的 `CDN`，改成以下版本
```
    <!-- Step 4 -->
    <!-- Step 6 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" rel="stylesheet" type="text/css">
```

3. 再跑一次 `GTmetrix` (https://gtmetrix.com/ )看看結果。

## Step 5: Avoid bad requests

favicon用在瀏覽器頁籤上的標示以及書籤的圖案，當網頁載入時會自動去根目錄抓，如果沒有抓到，就會回傳404。為了優化的需求，我們可以設定這個icon或者禁止產生這個request。將 `./step5` 中的icon放到 `./assets/media` 中，並且在 `./index.html` 中的 `Step 5` 中加入以下的程式碼。

```
    <!-- Step 5 -->
    <link rel='icon' type='image/ico' href='./assets/media/favicon.ico'>
```

## Step 6: Avoid CSS @import

在 `semantic.css` 中，去引用了外部的css。這邊是引用了google的字型。這使得瀏覽器在載入網站時會多花額外的時間。這邊我們用的解決方法是，改用 `semantic-ui-offline` ，它將需要從外部引入的css，內嵌到code裡面了，這樣不用再多載入其他的stylesheet了。

1. 用以下指令去裝semantic-ui-offline的套件
```
$ npm init -y
$ npm i semantic-ui-offline --save
```

或者也可以用 `yarn` 來做到一樣的事情

```
$ yarn init -y
$ yarn add semantic-ui-offline
```

2. 將 `./index.html` 中的 `Step 6` 改成以下程式碼。
```
    <!-- Step 6 -->
    <link href="./node_modules/semantic-ui-offline/semantic.min.css" rel="stylesheet" type="text/css">
```

3. 再跑一次 `GTmetrix` (https://gtmetrix.com/ )看看結果。

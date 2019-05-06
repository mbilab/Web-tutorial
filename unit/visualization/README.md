Visualization
===
透過資料視覺化，我們可以有效地將圖表化成易於吸收的內容。
以下是透過 jQuery, D3.js, Vue 三種框架呈現資料視覺化的示範。

## jQuery

### Step 0: 基本 jQuery 與 svg
到[以前的教學]( https://github.com/mbilab/Web-tutorial/tree/master/unit/js )學習基本jQuery如何運作，包含:
* 如何在 html 引用 javaScript
* Handle Events
* 用 jQuery 修改 css/html
上網[查詢]( https://www.w3schools.com/html/html5_svg.asp )，了解 svg

### Step 1: access 到要視覺化的資料

確定 Event 觸發能夠正確 access 到想要顯示的 data，在`./app/jquery.js`插入以下程式碼，並開啟F12觀察資料，是否正確印出

```
/* Step 1:
 * 將內容包在 `$(()=>{  })` 裡面，確保所有的東西都準備好，才會執行這段程式碼
 * 在 `jquery.html` 裡面的 `data-code` 是一個自定義的變數。在 `html` 中，能利用 `data-*` 將字串存在 DOM 中，再從CSS或JS中取出來使用
 * $(e.target)就是選到 "被點擊的那個 element"
 * `.data('code')` 可以將預存在 DOM 中的 `data-code` 字串取出來
 */

const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {
  $('button').click(e => {
    const code = $(e.target).data('code')
    console.log(data[code])

	//Step 2
  })
  $('button:first-child').click()
})
```

### Step 2: 繪製圖表

將 data 使用 svg 繪製出來，在`./app/jquery.js`中插入以下程式碼，並觀察結果。

```
/* Step 2:
 * for 迴圈的 `i` 回傳的是 `index` 值
 * `toFixed(1)` 規定前面字串的格式，是顯示到小數點後一位
 */

for (const i in data[code]) {
  const ratio = (data[code][i] * 100).toFixed(1)
  $('#chart').append($(`
    <svg x="${60 + i * 150}">
      <text x="20" y="${440 - ratio * 4}">${ratio}%</text>
      <rect height="${ratio * 4}" width="100" y="${450 - ratio * 4}">
    </svg>
  `))
}
```

### Step 3: 清除圖表

測試後應該會發現，資料顯示的狀況好像怪怪的，因為新加入的 svg 圖片，被留在畫面上了，在`./app/jquery.js`中插入以下程式碼

```
/* Step 3:
 * 先將舊的圖刪掉，才接著加上新圖片
 */
    $('#chart > svg').remove()
```

## D3.js

### Step 1: 資料綁定

### Step 2: 清空圖表

### Step 3: 繪製圖表

## Vue

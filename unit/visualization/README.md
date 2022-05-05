# visualization

透過資料視覺化，我們可以有效地將圖表化成易於吸收的內容。以下是透過 `jQuery`, `D3.js` 以及 `Vue` 三種框架呈現資料視覺化的示範。

## jQuery

### Step 0: 基本 jQuery 與 svg

到[以前的教學](https://github.com/mbilab/Web-tutorial/tree/master/unit/js)學習基本jQuery如何運作，包含:
  - 如何在 html 引用 javascript
  - Handle Events
  - 用 jQuery 修改 css/html
  - 上網[查詢](https://www.w3schools.com/html/html5_svg.asp)，了解 svg

### Step 1: 準備要視覺化的資料

確定點擊按鈕的事件觸發後，能夠正確存取到想要顯示的資料。將底下的程式碼插入 `./app/jquery.js`，然後照著 `Step 1` 開頭的提示操作。

```javascript
/* Step 1:
 * 包在 `$(()=>{  })` 裡面的程式碼，jQuery 會在整個網頁讀取完後才會執行。
 * 在 `./app/jquery.html` 裡面的 `data-code` 是一個自定義的屬性。
 * 在 HTML 中，能利用 `data-*` 將字串存在 DOM 中，方便 CSS 或 JS 使用。
 * `e.target` 代表產生 `e` 這個事件的元件。
 * `$(e.target).data('code')` 可以將 `e.target` 中 `data-code` 的內容取出來。
 */

const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {
  $('button').click(e => {
    const code = $(e.target).data('code')
    console.log(data[code])

    // Step 3 code goes here

    // Step 2 code goes here

  })
  $('button:first-child').click()
})
```

用瀏覽器開戶 `./app/jquery.html`，開啟開發人員工具(按下 `F12`)觀察資料是否正確印出。

### Step 2: 繪製圖表

將資料使用 svg 繪製出來。將底下的程式碼插入 `./app/jquery.js`，然後照著 `Step 2` 開頭的提示操作。

```javascript
/* Step 2:
 * `toFixed(1)` 設定小數點位數。
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

測試後應該會發現，資料顯示的狀況好像怪怪的，因為新加入的 svg 圖片，被留在畫面上了。將底下的程式碼插入 `./app/jquery.js`，然後照著 `Step 3` 開頭的提示操作。

```javascript
/* Step 3:
 * 先將舊的圖刪掉之後再繪製新圖片
 */
$('#chart > svg').remove()
```

## D3.js

相比 jQuery，D3.js 可以綁定(binding)資料與 DOM 元件，思考的角度從處理物件變成處理資料。

### Step 1: 選取物件

使用 `select` 選取物件。將底下的程式碼插入 `./app/d3.js`，然後照著 `Step 1` 開頭的提示操作。

```javascript
/* Step 1:
 * 使用 css selector 加上 .select() 選取要加入資料的元件
 */
const chart = d3.select('#chart')
```

### Step 2: 資料綁定

透過 `selectAll` 選取子物件並用 `.data()` 綁定資料，這時很有機會發生資料與物件數量不對齊的狀況，需要下兩個步驟解決這個問題。將底下的程式碼插入 `./app/d3.js`，然後照著 `Step 2` 開頭的提示操作。

```javascript
/* Step 2:
 * 連結資料
 */
const bars = chart.selectAll('svg').data(data[code])
```

### Step 3: 清空沒有資料的元件

選取沒有資料配對的元件後，將剛該物件刪除。將底下的程式碼插入 `./app/d3.js`，然後照著 `Step 3` 開頭的提示操作。

```javascript
/* Step 3:
 * .exit() 會過濾出沒有資料綁定的元件
 * .remove() 會把這些元件刪掉
 */
bars.exit().remove()
```

### Step 4: 繪製沒有元件的資料

將底下的程式碼插入 `./app/d3.js`，然後照著 `Step 4` 開頭的提示操作。

```javascript
/* Step 4:
 * `.enter()` 為沒元件的資料建立元件。
 * `.append()` 加入 DOM 元件。
 * d3 元件裡的資料跟索引會傳進 `(v, i) => {}` 裡的 v 跟 i
 */
const entered = bars.enter().append('svg').attr('x', (v, i) => { return 60 + i * 150 })
entered.append('text').attr('x', 20)
entered.append('rect').attr('width', 100)
bars.select('text')
  .attr('y', (v, i) => { return 440 - v * 400 })
  .text((v, i) => (v * 100).toFixed(1) + '%')
bars.select('rect')
  .attr({
    height: (v, i) => { return v * 400 },
    y: (v, i) => { return 450 - v * 400 },
  })
```

## Vue

### Step 0: setup and pack

安裝套件。

```shell
npm i
yarn # if you `yarn` installed
```

打包並開啟測試伺服器，記得將 `[port]` 改成適點的數值。

```shell
npx parcel ./app/vue.pug --host 0.0.0.0 --port [port]
yarn parcel ./app/vue.pug --host 0.0.0.0 --port [port] # if you have `yarn` installed
```

### Step 1: from pug, js to vue

將底下的程式碼插入 `./app/vue.pug`，然後照著 `Step 1` 開頭的提示操作。

```pug
// Step 1
// 加入未來要顯示用的 DOM 元件以及連結 vue 程式碼。
#app
script(src="./vue.js",type="module")
```

將底下的程式碼插入 `./app/vue.js`，然後照著 `Step 1` 開頭的提示操作。

```javascript
/* Step 1
 * 根據 vue 作者的說法，程式碼中的 h 代表 hyperScript。
 * 連結 .vue 檔，之後會在其中撰寫 pug/sass/js。
 * 注意 `#app` 就是剛剛在 `./app/vue.pug` 加入的 DOM 元件。
 */
import { createApp } from 'vue'
import App from './vue.vue'

createApp(App).mount('#app')
```

用瀏覽器打開對應的網頁(`http://[your host]:[port]`)，此時可以看到 hello world。

### Step 2: 資料綁定

在 `./app/vue.vue` 撰寫 pug 與 js。將底下的程式碼插入 `./app/vue.vue`，然後照著 `Step 2` 開頭的提示操作。在瀏覽器中可以看到顯示的內容即時變跟著資料變動。

在 `./app/vue.vue` Step 2.1 的部分加入 `inputData`。

```javascript
/* Step 2.1
 * 加入變數
 */
inputData: "Type something here",
```

在 `./app/vue.vue` Step 2.2 的部分中加入以下程式碼。

```pug
// Step 2.2
// 你的輸入會跟 inputData 雙向綁定。
// 注意：`input` 和 `p` 在同一層縮排。
// `v-model 用來雙向綁定，另有單向綁定的 `v-bind`。
input(type="text", v-model='inputData')
| {{ inputData }}
```

### Step 3: 繪製清單

使用 `v-for` 迭代清單中的元素。將底下的程式碼插入 `./app/vue.vue`，然後照著 `Step 3` 開頭的提示操作。

在 `./app/vue.vue` Step 3.1 的部分加入以下程式碼。

```pug
// Step 3.1
// 使用 v-for，網頁內容隨著資料迭代渲染。
// 注意：`span` 和 `br` 在同一層縮排
span(v-for="value in chart") {{value}},&nbsp;
```

閱讀[官方教學](https://v1-cn.vuejs.org/guide/list.html)或是[教學部落格](https://cythilya.github.io/2017/04/27/vue-list-rendering/)，找到取得 index of value 的方法。將底下的程式碼加入 `./app/vue.vue`，然後照著 `Step 3.2` 開頭的提示操作。

```pug
// Step 3.2
// 完成 v-for 的語法，將 [value and idex of data] 改成適當的內容
svg(v-for="[value and idx of data]",:x="60 + idx * 150")
  text(x="20",:y="440 - 400 * value") {{(value * 100).toFixed(1)}}%
  rect(:height="value * 400",width="100",:y='450 - value * 400')
```

### Step 4: 事件與方法

綁定 DOM 的事件，透過方法(method)修改資料。將底下的程式碼加入 `./app/vue.vue`，然後照著 `Step 4.1` 開頭的提示操作。

```pug
// step 4.1
// 加入按鈕。
div
  button(@click="update('N2')") 電機所
  button(@click="update('P7')") 資訊所
```

`@click` 會處理該 DOM 的點擊事件，程式碼中的處理方式是呼叫 `update()` 方法。你可以瀏覽器中看到 `inputData` 會隨著點擊按鈕而改變。

將 vue 實例中的 `chart` 變數，改成對應 N2 或 P7 的清單。將底下的程式碼加入 `./app/vue.vue`，然後照著 `Step 4.2` 開頭的提示操作。

```javascript
/* step 4.2
 * 將 [list according to `code`] 改成適當的內容
 * 可能需要修改 Step 3.2 的程式碼
 * 在 vue 實例內部要使用資料或方法時，可是使用 `this`，例如 `this.chart` 或是 `this.update()`。
 */
this.chart = [list according to `code`]
```

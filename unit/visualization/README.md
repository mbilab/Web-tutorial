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
* 上網[查詢]( https://www.w3schools.com/html/html5_svg.asp )，了解 svg

### Step 1: access 到要視覺化的資料

確定 Event 觸發能夠正確 access 到想要顯示的 data，在`./app/jquery.js`插入以下程式碼，並開啟F12觀察資料，是否正確印出。

在`./app/jquery.js`中插入以下程式碼，並觀察結果。
```
/* Step 1:
 * 將內容包在 `$(()=>{  })` 裡面，確保所有的東西都準備好，才會執行這段程式碼
 * 在 `jquery.html` 裡面的 `data-code` 是一個自定義的變數。
 * 在 `html` 中，能利用 `data-*` 將字串存在 DOM 中，再從CSS或JS中取出來使用
 * `$(e.target)` 就是選到 "被點擊的那個 element"
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

    
    //Step 3


	//Step 2

  })
  $('button:first-child').click()
})
```

### Step 2: 繪製圖表

將 data 使用 svg 繪製出來，在 `./app/jquery.js` 中插入以下程式碼，並觀察結果。

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

測試後應該會發現，資料顯示的狀況好像怪怪的，因為新加入的 svg 圖片，被留在畫面上了，在 `./app/jquery.js` 中插入以下程式碼

```
/* Step 3:
 * 先將舊的圖刪掉，才接著加上新圖片
 */
    $('#chart > svg').remove()
```

## D3.js

相比 jQuery，D3.js 可以將資料與 DOM 元件連結，讓我們可以直接使用 DOM 裡的資料，思考的角度更是從物件變成資料。

### Step 1: 選取物件

使用 select 選取物件
在`./app/d3.js`中插入以下程式碼:

```
  /* Step 1:
   * 使用 css selector 加上 .select() 選取要加入資料的元件
   */
  const chart = d3.select('#chart')
```

### Step 2: 資料連結

透過 selectAll 選取子物件並用 .data() 連結資料，這時很有機會發生資料與物件數量不對齊的狀況，需要下兩個步驟解決這個問題。
在`./app/d3.js`中插入以下程式碼:

```
    /* Step 2:
     * 連結資料
     */
    const bars = chart.selectAll('svg').data(data[code])
```

### Step 3: 清空沒有資料的物件

選取沒有資料配對的物件後，將剛該物件刪除。
在`./app/d3.js`中插入以下程式碼:

```
    /* Step 3:
     * .exit() 會過濾出沒有資料配對的物件
     * .remove() 會把這些物件刪掉
     */
    bars.exit().remove()
```

### Step 4: 繪製沒物件的資料

為沒物件的資料建立物件

```
    /* Step 4:
     * .enter() 為沒物件的資料建立物件
     * .append() 跟 jQuery 的 append 類似，加入 DOM 元件。
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
## Step 0: setup and pack

安裝 dependency 套件
uidd 的同學不用再裝 parcel，伺服器上裝好全域的 parcel了，非課程的同學請自行`npm i parcel` or `yarn add parcel`
打包並開啟 devServer: `parcel build ./app/index.pug`

`$ npm i vue`

or

`$ yarn add vue`

## Step 1: include js, import vue

在 `app/vue.pug` 加入以下程式碼:

```
    // Step 1
    // 加入被綁定的 DOM 以及 vue 實例
    //
    #app
    script(src="./vue.js")
```

在 `app/vue.js` 加入以下程式碼:

```
    /* Step 1
     * 根據 vue 作者的說法程式碼中的 h 代表 hyperScript
     * 我們會在同一個 .vue 檔中撰寫 pug/sass/js，並在此引入他。
     */

    import App from './vue.vue'

    new Vue({
        el: '#app',
        render: h => h(App)
    })
```

完成後可以用 `yarn vue` 開啟 devServer，可以看到 hello world

## Step 2: 資料綁定

將 `app/vue.vue`加入 pug 與 vue 實例。透過 parcel 打包後，可以看到顯示的變數即時變跟著資料動。

在 `app/vue.vue` step 2.1 的部分加入data:	
```
    /* Step 2.1
     * 加入變數
     */
    inputData: "Type something here",
```

在 `app/vue.vue` step 2.2 中加入以下程式碼:
```
    // Step 2.2
    // 你的輸入會跟 inputData 雙向綁定，並在螢幕顯示
    // 注意：`input` 和 `p` 在同一層縮排
    input(type="text", v-model='inputData')
    | {{inputData}}
```

補充: v-model 用來雙向綁定，另有單向綁定的 v-bind。

## Step 3: 列表渲染

使用v-for迭代陣列或物件中的元素。 
在 `app/vue.vue` step 3.1 的部分加入以下程式碼:

```
    // Step 3.1
    // 使用 v-for，網頁內容隨著資料迭代渲染。
    // 注意：`span` 和 `br` 在同一層縮排
    span(v-for="value in chart") {{value}} ,
```

閱讀[官方教學](https://v1-cn.vuejs.org/guide/list.html)或是[教學部落格](https://cythilya.github.io/2017/04/27/vue-list-rendering/)，找到取得 index of value 的方法。
完成 `app/vue.vue` step 3.2 的程式碼:
```
    // Step 3.2
    // 完成 v-for 的語法，定義裡的value跟idx
    //
    svg(v-for="[value and idx of data]",:x="60 + idx * 150")
      text(x="20",:y="440 - 400 * value") {{(value * 100).toFixed(1)}}%
      rect(:height="value * 400",width="100",:y='450 - value * 400')
```

## Step 4: 方法與事件處理

綁定 DOM 的事件，透過 methods 在 vue 實例中，修改 data。
在 `app/vue.vue` step 4.1 的部分加入以下程式碼:

```
  // step 4.1
  // 加入 button
  //
  div
    button(@click="update('N2')") 電機所
    button(@click="update('P7')") 資訊所
```

@click會處理該 DOM 的點擊事件，並把這個事件與 update() 綁定。你可以在下面的程式碼中看到 this.inputData 被改為按鈕名稱並顯示在螢幕上。
現在，輪到你把 this.chart 改成 N2 array 或 P7 array。
修改 `app/vue.vue` step 4.2 的部分:
```
  /* step 4.2
   * 換你寫了
   */
  this.chart = [??????]
```

在 vue 實例內部要使用內部的資料或方法時，可是使用 this，例: `this.myData`，`this.myMethod`。

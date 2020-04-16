Vue
===

## Step 0: setup and pack

安裝 `parcel`

```
yarn add parcel
# or
npm i parcel
```

修課同學不用再裝 `parcel`，伺服器上裝好全域的 `parcel` 了。

打包並開啟開發用伺服器，過程中 `parcel` 會自動幫忙安裝其它需要的套件。

```
parcel ./app/index.pug --port [port]
```

Open `[host]:[port]` in a browser to see the result.

用瀏覽器打開 `[host]:[port]` 看結果。

## Step 1: import js, vue, and semantic-ui-offline

在 `app/index.pug` 加入以下程式碼:

```
    // Step 1
    // 加入被綁定的 DOM 以及內容實作
    #app
    script(src="./app.js")
```

在 `app/app.js` 加入以下程式碼:

```
/* Step 1
 * 在 `app.js` 中們新增一個 vue 實例並跟 `#app` 綁定
 * 根據 vue 作者的說法程式碼中的 h 代表 hyperscript
 * 我們會在同一個檔案，App.vue，中撰寫 pug/sass/js，並在此引入這個檔案
 */
import 'semantic-ui-offline/semantic.min.css'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## Step 2: use semantic-ui 

在 `app/App.vue` pug 的部分加入以下程式碼：

```
    // 打包後，就能看到和 [semantic-ui 官網](https://semantic-ui.com/elements/input.html#action) 一樣的 input。
    #input.ui.input.action
      // Step 2.1
      input(type="text", placeholder="add todo...")

      // Step 2.2
      button.ui.icon.button
        i.plus.icon
```

## Step 3: data binding

將 `app/App.vue` 中 Step 2 的 Step 2.1 部分改成如下程式碼，可以看到介面即時跟著資料改動。

```
    // Step 3.1
    // 取代掉 Step 2.1
    // 請務必注意縮排
    input(type="text", v-model='[your variable name]', placeholder="add todo...")
```

在 `app/App.vue` Step 3.2 中加入以下程式碼：

```
    // Step 3.2
    p {{[your variable name]}}
```

在 `app/App.vue` Step 3.3 的部分加入以下程式碼：
	
```
    // Step 3.3
    [your var name]: 'Data binding is cool!',
```

## Step 4: data and method

綁定 DOM 的事件，透過 methods 修改 data。用以下程式碼取代上一步 `app/App.vue` 中 Step 3.2 的部分：

```
    // Step 4.1
    // 取代掉 Step 2.2 的部分
    // 請務必注意縮排
    // 綁定事件，觸發 addTask 函式
    button.ui.icon.button(@click='addTask')
```

在 `app/App.vue` data 的部分加入以下程式碼: 

```
    // Step 4.2
    tasks: [],
```

在 `app/App.vue` methods 的部分加入以下程式碼: 

```
    // Step 4.3
    addTask() {
      if (!this.[your variable name])
        return
      this.tasks.push({
        name: this.[your variable name],
        toggle: false
      })
      this.[your variable name] = ''
    },
```

## Step 5: 列表渲染 v-for。

在 `app/App.vue` 加入以下程式碼：

```
  // Step 5
  // v-for 根據 task 中元素的數量選染出數個 .task。
  .task(v-for="task in tasks")
    .ui.checkbox(@click='toggleTask(task.name)')
      input(type="checkbox" v-model='task.toggle')
      label(v-if='!task.toggle') {{task.name}}
      label(v-if='task.toggle')
        del {{task.name}}
    i.delete.icon(v-if='task.toggle' @click='rmTask(task.name)')
```

你已經完成一個用以 vue 作為框架的 todo list app。

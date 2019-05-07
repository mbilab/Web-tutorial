Vue
===

## Step 0: setup and pack

安裝 dependency 套件
uidd 的同學不用再裝 parcel，伺服器上裝好全域的 parcel了，非課程的同學請自行`npm i parcel` or `yarn add parcel`
打包並開啟 devServer: `parcel ./app/index.pug`

`$ npm i semantic-ui-offline`

or

`$ yarn add semantic-ui-offline`

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
     * 根據 vue 作者的說法程式碼中的 h 代表 hypercript
     * 我們會在同一個檔案中撰寫 pug/sass/js，並在此引入他。
     */
    import 'semantic-ui-offline/semantic.min.css'
    import App from './App.vue'

    new Vue({
        el: '#app',
        render: h => h(App)
    })
```

## Step 2: Using semantic-ui 

在 `app/App.vue` pug 的部分加入以下程式碼:

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

將 `app/App.vue` 中Step 2的 Step2.1 部分改成如下程式碼
透過 parcel 打包後，可以看到顯示的變數即時變跟著資料動。

```
    // Step 3.1
    // 取代掉 Step 2.1
    // 請務必注意縮排
    input(type="text", v-model='[your var name]', placeholder="add todo...")
```

並在 `app/App.vue` Step 3.2 中加入以下程式碼:

```
    // Step 3.2
    p {{[your var name]}}
```

在 `app/App.vue` Step 3.3 的部分加入以下程式碼:
	
```
    // Step 3.3
    [your var name]: 'Data binding is cool!',
```

## Step 4: data and method

綁定 DOM 的事件，透過 methods 在 vue 實例中，修改 data。
將上一步 `app/App.vue` 中 Step 3.2 的部分取代:

```
    // Step 4.1
    // 取代掉 Step 2.2 的部分
    // 請務必注意縮排
    // 綁定事件，觸發 function。
    button.ui.icon.button(@click='addTask()')
```

在 `app/App.vue` data 的部分加入以下程式碼: 

```
    // Step 4.2
    tasks: []
```

在 `app/App.vue` methods 的部分加入以下程式碼: 

```
    // Step 4.3
    addTask() {
      if (!this.[your var name])
        return
      this.tasks.push({
        name: this.[your var name],
        toggle: false
      })
      this.[your var name] = ''
    },
```

## Step 5: 列表渲染 v-for。

透過 parcel 打包後，可以看到我們透過 @click 綁定事件，並透過 methods 裡的 function 不斷增加資料。

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

打包後，完成一個用 parcel 打包以 vue 作為框架的 Todolist app。

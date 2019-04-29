Vue
===
## Step 0: setup and pack
`npm i vue semantic-ui-offline`

or

`yarn add  vue semantic-ui-offline`

uidd 的同學不用再裝 parcel，伺服器上裝好全域的 parcel了，非課程的同學請自行`npm i parcel` or `yarn add parcel`


打包並開啟 devServer: `parcel ./app/index.pug`

## Step 1: import js, vue, and semantic-ui-offline
在 `app/index.pug` 加入:

    ```
    #app
    script(src="./app.js")
    ```
加入被綁定的 DOM 以及內容實作


在 `app/app.app.js` 加入:

    ```
    import 'semantic-ui-offline/semantic.min.css'
    import App from './App.vue'
    
    new Vue({
        el: '#app',
        render: h => h(App)
    })
    
    ```
在 `app.js` 中們新增一個 vue 實例並跟 `#app` 綁定，根據 vue 作者的說法程式碼中的 h 代表 hypercript，這正也是我們下一步要寫的在同一個檔案中撰寫 pug/sass/js。

## Step 2: Using semantic-ui 
在 `app/App.vue` pug 的部分加入:

    ```
    #input.ui.input.action

      <!-- later, step 3 will replace this section -->
      input(type="text", placeholder="add todo...")
      <!--------------------------------------------->

      <!-- later, step 4 will replace this section -->
      button.ui.icon.button
      <!--------------------------------------------->

        i.plus.icon
    ```

打包後，就能看到和 [semantic-ui 官網](https://semantic-ui.com/elements/input.html#action) 一樣的 input。

## Step 3: data binding
學會 data binding。

在 `app/App.vue` pug 的部分改成:

    ```
      input(type="text", v-model='[your var name]', placeholder="add todo...")
    ```
加入:
    ```
    <!-- later, step 4 will replace this section -->
    {{[your var name]}}
    <!--------------------------------------------->
    ```

在 `app/App.vue` data 的部分加入:
	
    ```
    [your var name]: 'Data bing is cool!',
    ```

透過 parcel 打包後，可以看到顯示的變數即時變跟著資料動。

## Step 4: data and method
綁定 DOM 的事件，透過 methods 在 vue 實例中，修改 data。

將上一步 `app/App.vue` button 的部分取代:

    ```
      button.ui.icon.button(@click='addTask()')
    ```
綁定事件，觸發 function。

在 `app/App.vue` data 的部分加入: 
    ```
    tasks: []
    ```

在 `app/App.vue` methods 的部分加入: 
    ```
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
透過 parcel 打包後，可以看到我們透過 @click 綁定事件，並透過 methods 裡的 function 不斷增加資料。

## Step 5: don't repeat yourself
學會 v-for，提高效率。

    ```
    .task(v-for="task in tasks")
      .ui.checkbox(@click='toggleTask(task.name)')
        input(type="checkbox" v-model='task.toggle')
        label(v-if='!task.toggle') {{task.name}}
        label(v-if='task.toggle')
          del {{task.name}}
      i.delete.icon(v-if='task.toggle' @click='rmTask(task.name)')
    ```

v-for 根據 task 中元素的數量選染出數個 .task。

打包後，完成一個用 parcel 打包以 vue 作為框架的 Todolist app。

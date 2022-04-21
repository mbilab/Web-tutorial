# vue demo

## Step 0: setup

Install packages. Notice that only one of the following commands is required.  
安裝套件。注意下面指令擇一使用即可。

```shell
npm i
yarn # if you have `yarn` installed
```

Start the development server. Notice that only one of the following commands is required.  
啟動開發伺服器。注意下面指令擇一使用即可。

```shell
npm run serve
yarn serve # if you have yarn
```

Open `[host]:[port]` in a browser to see the result.  
用瀏覽器打開 `[host]:[port]` 看結果。

If you want to create a vue project from scratch, try search "vue-cli".  
如果你想從無到有建構一個 vue 專案，試著搜尋 "vue-cli"。

## Step 1: data binding

Follow the instructions beginning with `Step 1`.  
請照著 `Step 1` 開頭的提示操作。

```pug
// Step 1.1
// copy this code snippet to `./src/App.vue`
// replace the orignal `input` tag
// watch out the indentation
// edit [variable name] to an appropriate value
// 複製這段程式碼至 `./src/App.vue`
// 取代原本的 `input` 標籤
// 注意縮排
// 將 [variable name] 修改成合適的值
input(v-model="[variable name]", type="text", placeholder="Task...")
```

```pug
// Step 1.2
// copy this code snippet to `./src/App.vue`
// edit [variable name] to an appropriate value
// 複製這段程式碼至 `./src/App.vue`
// 將 [variable name] 修改成合適的值
p {{ [variable name ]}}
```

```javascript
/* Step 1.3
 * copy this code snippet to `./src/App.vue`
 * edit [variable name] to an appropriate value
 * 複製這段程式碼至 `./src/App.vue`
 * 將 [variable name] 修改成合適的值
 */
[variable name]: 'Data binding is cool!',
```

You will see the UI changes as the data, which is _binding_.  
你會看到介面隨著資料改變，這就是所謂的 _binding_。

## Step 2: handle event

Follow the instructions beginning with `Step 2`.  
請照著 `Step 2` 開頭的提示操作。

```pug
// Step 2.1
// copy this code snippet to `./src/App.vue`
// replace the orignal `input` tag
// capture the `click` event
// 複製這段程式碼至 `./src/App.vue`
// 取代原本的 `input` 標籤
// 處理 `click` 事件
button(@click='addTask') Add
```

在 `app/App.vue` data 的部分加入以下程式碼:

```javascript
/* Step 2.2
 * copy this code snippet to `./src/App.vue`
 * 複製這段程式碼至 `./src/App.vue`
 */
tasks: [],
```

```javascript
/* Step 2.3
 * copy this code snippet to `./src/App.vue`
 * edit [variable name] and [another variable name] to an appropriate value
 * 複製這段程式碼至 `./src/App.vue`
 * 將 [variable name] 與 [another variable name] 修改成合適的值
 */
addTask() {
  if (!this.[variable name])
    return
  this.[another variable name].push({
    name: this.[variable name],
    toggle: false
  })
  this.[variable name] = ''
},
```

## Step 3: 列表渲染 v-for。

Follow the instructions beginning with `Step 3`.  
請照著 `Step 3` 開頭的提示操作。

```pug
// Step 3.1
// copy this code snippet to `./src/App.vue`
// `v-for` renders multiple `.task` tags based on `tasks`
// notice the data structure of each `task` (see `addTask()`)
// 複製這段程式碼至 `./src/App.vue`
// `v-for` 根據 `tasks` 渲染出多個 `.task` 標籤
// 注意每個 `task` 的資料結構(參考 `addTask()`)
.task(v-for="task in tasks")
  div(@click='toggleTask(task.name)')
    input(v-model="task.toggle",type="checkbox")
    label(v-if="!task.toggle") {{ task.name }}
    label(v-if="task.toggle"): del {{ task.name }}
```

You've done a vue-based TODO app.  
你已經完成一個以 vue 框架為基礎的 TODO app。

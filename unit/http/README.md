# http & ajax

## Step 0: setup

You can install packages from scratch.  
你可以從零開始安裝需要用到的套件。

```shell
yarn init -y
yarn add express
```

If you don't have `yarn`, try `npm`.  Notice that either way is okay.  
如果你的電腦沒有 `yarn`，試試 `npm`。注意兩個擇其一使用即可。

```shell
npm init -y
npm i express --save
```

Or, simply use our `package.json`, which includes the dependent packages.  
或者，直接使用我們的 `package.json`，裡頭記錄了需要的套件。

```shell
yarn
```

The corresponding command for `npm`.  
對應的 `npm` 指令。

```shell
npm i
```

## Step 1: create a web server, which returns text

[Express](https://expressjs.com/) is a lightweight web server built with [Node.js](https://nodejs.org/).  This step uses it to create a web server in ten lines.  Follow the instructions beginning with `Step 1`.  
[Express](https://expressjs.com/) 是一個使用 [Node.js](https://nodejs.org/) 開發的輕量級網頁伺服器，這個步驟用其在十行程式碼內打造一個網頁伺服器。請照著 `Step 1` 開頭的提示操作。

```javascript
/* Step 1:
 * insert this code snippet to `./ser.js`
 * edit [port] to an appropriate value
 * storing config to variables is a good practice, see `port` in the code
 * learn the syntax of string interpolation in js, see `${port}` in the code
 * 將這段程式碼插入 `./ser.js`
 * 將 [port] 修改成合適的值
 * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 */

// include `express`, you can use `import` now
// 載入 `express`, 現在可以放心使用 `import` 了
import express from 'express'
// const express = require('express')

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

const port = [port]

// handle `/step1` url
// 處理 `/step1` 網址
app.get('/step1', (req, res) => {
  // response browser
  // 回應瀏覽器
  res.send('hello world')
})

// start the server
// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
```

Execute `./ser.js`.  
執行 `./ser.js`。

```shell
node ./ser.js
```

Open `[host]:[port]/step1` in a browser to see the result.  
用瀏覽器打開 `[host]:[port]/step1` 看結果。

## Step 2: html code is okay

Server can return html code.  Try modify `./ser.js` to return `hello world` in a `<h1>`.  Use browser developer console to the see server response and page source.  Remember to re-execute the modified server.  
伺服器可以回傳 html 語法。試著修改 `./ser.js` 使其回傳包在 `<h1>` 標籤內的 `hello world`。使用瀏覽器的開發者工具，去看看伺服器的回應和網頁原始碼。記得重新執行你修改過後的伺服器程式。

## Step 3: use static files instead typing html code in js

Follow the instructions beginning with `Step 3`.  
請照著 `Step 3` 開頭的提示操作。

```javascript
/* Step 3:
 * copy this code snippet to `./ser.js`
 * edit [path] to an appropriate value
 * notice that the static files are stored in `./dist/`
 * `express.static()` is used to server static files, google `express static` for more information
 * `__dirname` is an environment variable in node.js, google `nodejs __dirname` for more information
 * 複製這段程式碼至 `./ser.js`
 * 將 [path] 修改成合適的值
 * 注意靜態檔案放在 `./dist` 目錄下
 * `express.static()` 專門用來處理靜態檔案，搜尋 `express static` 了解更多
 * `__dirname` 是 node.js 的環境變數，搜尋 `nodejs __dirname` 了解更多
 */

// handle other urls
// 處理其它網址
app.use(express.static(`${__dirname}/[path]`))
```

Re-execute server and open `[host]:[port]/exercise.html` in a browser to see the result.  Do you know where `exercise.html` is?  
重新執行啟伺服器並用瀏覽器打開 `[host]:[port]/exercise.html` 看結果。你知道 `exercise.html` 在哪嗎？

## Step 4: dynamic results, even with the same url

That's the reason to develop server-side programs.  Follow the instructions beginning with `Step 4`.  
產生動態結果才是開發伺服器端程式的理由。請照著 `Step 4` 開頭的提示操作。

```javascript
/* Step 4:
 * insert this code snippet to `./ser.js`
 * open `[host]:[port]/step4` in a browser multiple times to see the result
 * try re-execute the program and see the result
 * learn the syntax of string interpolation in js, see `${++nRequests}` in the code
 * 將這段程式碼插入 `./ser.js`
 * 用瀏覽器打開 `[host]:[port]/step4` 多次看結果
 * 試著重新執行程式並觀察結果
 * 學習 js 的 string interpolation 語法，參考程式中的 `${++nRequests}`
 */
let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})
```

## Step 5: receive user input

Usually, the dynamic results are related to user input.  Follow the instructions beginning with `Step 5`.  
通常網頁的結果會跟使用者的輸入有關。請照著 `Step 5` 開頭的提示操作。

```javascript
/* Step 5:
 * insert this code snippet to `./ser.js`
 * user input is stored in the first argument of the callback function, aka `req` in the code
 * open `[host]:[port]/step5?fname=[fname]&lname=[lname]` in a browser to see the result
 * try edit [fname] and [lname]
 * notice the syntax of `?` and `&` in the url
 * 將這段程式碼插入 `./ser.js`
 * 使用者輸入存放在回呼(callback)函式的第一個參數，也就是程式中的 `req` 裡
 * 用瀏覽器打開 `[host]:[port]/step5?fname=[fname]&lname=[lname]` 看結果
 * 試著修改 [fname] 與 [lanme]
 * 注意網址中 `?` 與 `&` 的用法
 */
app.get('/step5', (req, res) => {
  res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})
```

## Step 6: input from form instead of url

In practice, websites need to provide html forms, since no users will input via editing url.  Follow the instructions beginning with `Step 6`.  
實際上，網頁需要提供表單，畢竟沒有使用者會透過網址來輸入資料。請照著 `Step 6` 開頭的提示操作。

```html
<!-- Step 6:
 * insert this code snippet to `./dist/exercise.html`
 * edit [field name]s to appropriate values
 * `action` specifies the url to receive the form data
 * here the server code developed in the last step is used
 * `method="get"` indicates encoding form data in the url, see the next step for more information
 * `type="submit"` indicates that clicking the button will trigger the action
 * open `[host]:[port]/exercise.html` in a browser, fill the form, click the submit button and see the result
 * notice the url
 * 將這段程式碼插入 `./dist/exercise.html`
 * 將 [field name] 修改成適合的值
 * `action` 指定接收表單資料的網址
 * 這裡使用的是前一個步驟所開發的伺服器端程式
 * `method="get"` 將表單資料編碼至網址，參考下一個步驟了解更多
 * `type="submit"` 表示按下此按鈕後會觸發 `action` 設定的網址
 * 用瀏覽器打開 `[host]:[port]/exercise.html`，填好表單，按下送出按鈕看結果
 * 注意網址的變化
-->
<form action="./step5" method="get">
  first name: <input type="text" name="[field name]"><br>
  last name: <input type="text" name="[field name]"><br>
  <button type="submit">submit via get</button>
</form>
```

## Step 7: how to upload file?

For complex data and/or security issue, sometimes we don't want to store form data in the url.  Follow the instructions beginning with `Step 7`.  
為了複雜資料或是安全等因素，有時我們不想將資料存放在網址上。請照著 `Step 7` 開頭的提示操作。

```javascript
/* Step 7:
 * insert this code snippet to `./ser.js`
 * edit [property name]s to appropriate values
 * google `express body-parser` for more information
 * notice `app.post()` is used instead of `app.get()`
 * server can return different results for get and post requests of the same url
 * 將這段程式碼插入 `./ser.js`
 * 將 [property name] 修改成合適的值
 * 搜尋 `express body-parser` 了解更多
 * 注意這裡用的是 `app.post()` 而非 `app.get()`
 * 伺服器可以依 get 或是 post，針對同樣網址回傳不同結果
 */

// include `body-parser`
// 載入 `body-parser`
import bodyParser from 'body-parser'
// const bodyParser = require('body-parser')

// setup `body-parser`
// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  // `bady-parser` stores parsed data in `req.body`
  // `bady-parser` 將解析好的資料存放在 `req.body`
  res.send(`Hello, ${req.[property name].fname} ${req.[property name].lname}`)
})
```

```html
<!-- Step 7:
 * insert this code snippet to `./dist/exercise.html`
 * edit [field name]s to appropriate values
 * the biggest difference to the last step is `method="post"`
 * open `[host]:[port]/exercise.html` in a browser, fill the form, click the submit button and see the result
 * notice the url
 * try reload the page
 * 將這段程式碼插入 `./dist/exercise.html`
 * 將 [file name] 修改成合適的值
 * 跟前一步驟最大的不同就是 `method="post"`
 * 用瀏覽器打開 `[host]:[port]/exercise.html`，填好表單，按下送出按鈕看結果
 * 注意網址
 * 試著重新整理網頁
-->
<form action="./step7" method="post">
  first name: <input type="text" name="[field name]"><br>
  last name: <input type="text" name="[field name]"><br>
  <button type="submit">submit via post</button>
</form>
```

## Step 8: lightweight request

In above steps, servers return a whole new page for each request, which is not a modern web design.  Follow the instructions beginning with `Step 8`.  
在之前的步驟，伺服器每次收到瀏覽器的請求(request)都回傳一個完整的新頁面，而這並不是現代的網頁設計。請照著 `Step 8` 開頭的提示操作。

```html
<!-- Step 8:
 * insert this code snippet to `./dist/exercise.html`
 * set form `id` to help jquery selection
 * `type="submit"`, which is not necessary, is a good practice, google `progressive enhancement` for more information
 * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
 * click the ajax submit button, see the request and notice the url
 * the magic is implemented in `./dist/exercise.js`
 * 將這段程式碼插入 `./dist/exercise.html`
 * 設定 form 的 id 讓 jquery 的選取
 * `type="submit"` 不是必須的, 但是是一種好習慣. 搜尋 `漸進增強` 了解更多
 * 在瀏覽器中開啟 `[host]:[port]/exercise.html` 以及開發者工具
 * 點擊 ajax 提交按鈕、查看 request 並注意網址
 * 魔法藏在 `./dist/exercise.js` 裡
-->
<form id="ajax-form">
  first name: <input type="text" name="fname"><br>
  last name: <input type="text" name="lname"><br>
  <button type="submit">submit via ajax</button>
</form>
```

## Step 9: send data in ajax requests

Do you notice that browser did not send form data in the ajax request?  In ajax, developers need to pack the data explicitly via js code.  Follow the instructions beginning with `Step 9`.  
你有注意到瀏覽器沒有透過 ajax request 傳送資料嗎? 使用 ajax 時，瀏覽器不會幫忙，開發者需要自己使用 js 打包資料。請照著 `Step 9` 開頭的提示操作。

```javascript
/* Step 9:
 * edit the `$.get()` in `./dist/exercise.js` with this code snippet
 * edit [element selector]s to appropriate values
 * the second argument of `$.get()` specifies the data sent to server
 * notice the link from html `fname` to server `fname`
 * `fname` in `./dist/exercise.html` vs. `fname` in `./ser.js`
 * packing data explicitly is troublesome, but it brings flexibility
 * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
 * click the ajax submit button and see the request
 * 將 `./dist/exercise.js` 中的 `$.get()` 改為這段程式碼
 * 修改 `element selector` 成適合的值
 * `$.get()` 的第二個參數，用來將資料送給伺服器
 * 特別注意 html 中的 `fname` 和伺服器端的 `fname` 兩者之間的連結
 * `./dist/exercise.html` 中的 `fname` vs. `./ser.js` 中的 `fname`
 * 自己打包資料確實很麻煩，但是也帶來更大的彈性
 * 在瀏覽器中打開 `[host]:[port]/exercise.html`，開啟瀏覽器的開發者工具並切到 network 的分頁
 * 點擊 ajax 的提交按鈕，並且觀察 request
 */
$.get('./step5', {
  fname: $([element selector]).val(),
  lname: $([element selector]).val(),
})
```

## Step 10: show ajax results

In the last two steps, the ajax results can only be observed in developer console.  In ajax, developers need to show the results explicitly via js code.  Follow the instructions beginning with `Step 10`.  
在前兩個步驟中，ajax 的結果只能在開發者工具中觀察到。使用 ajax 時，開發者需要自己使用 js 呈現結果。請照著 `Step 10` 開頭的提示操作。

```html
<!-- Step 10:
 * insert this code snippet to `./dist/exercise.html`
 * this div is used to display the result
 * give it an id, `ajax-output`, to help jquery seleciton
 * 將這段程式碼插入 `./dist/exercise.html`
 * 這個 div 是用來顯示結果的
 * 給他一個 id , `ajax-output`, 讓 jquery 可以選到他
-->
<div id="ajax-output"></div>
```

```javascript
/* Step 10:
 * this code snippet is in `./dist/exercise.js`
 * edit the `$.get()` in the code snippet of step 9 with this code snippet
 * the third argument of `$.get()` is a callback function, which is called whenever server responses
 * the first argument of the callback function is the data retruned by server
 * edit [show data in div#ajax-output] to an appropriate
 * open `[host]:[port]/exercise.html` in a browser, click the ajax submit button and see the result
 * 這段程式碼位於 `./dist/exercise.js`
 * 用以下程式碼片段取代 Step 9 中的 `$.get()`
 * `$.get()` 的第三個參數是一個回呼(callback)函式，當伺服器回傳時就會被呼叫
 * 這個回呼函式的第一個參數，就是伺器器回傳的結果
 * 將 [show data in div#ajax-output] 修改成合適的值
 * 用瀏覽器打開 `[host]:[port]/exercise.html`，點擊 ajax 提交按鈕並查看結果
 */
$.get('./step5', {
  fname: $('#ajax-form input[name=fname]').val(),
  lname: $('#ajax-form input[name=lname]').val(),
}, (data) => {
  [show data in div#ajax-output]
})
```

## Step 11: experience "asyncronous"

Ajax means "asynchronous js and xml".  So, what's asyncronous?  Follow the instructions beginning with `Step 11`.  
Ajax 代表「非同步的 js 與 xml」。所以什麼是非同步呢？請照著 `Step 11` 開頭的提示操作。
 
```javascript
/* Step 11:
 * insert this code snippet to `./dist/exercise.js`
 * edit [timeout] to an appropriate value
 * if you don't know which code snippet update `div#ajax-output` first, that is asyncronous
 * 將這段程式碼插入 `./dist/exercise.js`
 * 將 [timeout] 修改成合適的值
 * 如果你不知道哪段程式會先更新 `div#ajax-output`，這就是非同步
 */
setTimeout(() => {
  $('#ajax-output').html('loaded')
}, [timeout])
$('#ajax-output').html('loading')
```

There are three instructions that change the content of `#ajax-output`.  Which code snippet execute first and why?  
總共有三行指令會改變 `#ajax-output` 的內容，誰會先執行？為什麼？

## Step 12: more

There are more examples included in this unit.  No step-by-step instructions for them.  But maybe you can learn something from the source code.
  * `./php/` provides a php version of this exercise.  Php is a classic server side language.  Unlike nodejs, which creates a web server, you need a web server, such as Apache, to run your php code.
  * `./chat/` provides a chat room example, where you can learn how to save server data "permanently".  That is, the data is stored in file, which does not disappear even if the server restarts.
  * `./parcel/` uses `parcel` to bulid static files.

以下有更多這個單元的範例，但沒有手把手的教學，但也許你能從原始碼中學到一些東西。
  * `./php/` 提供本教學的 php 版本。Php 是一個經典的伺服器端語言。與 nodejs 自己建立一個網頁伺器不同，在使用 php 時，你會需要其他網頁伺服器(例如 apache)來執行你的 php 程式。
  * `./chat/` 提供一個聊天室範例，其中你們可將資料 "永久" 存在伺服器端。這些資料會以檔案的形式存在伺服器端，即使網頁伺服器重開也不會消失。
  * `./parcel/` 使用 `parcel` 來編譯靜態檔案。

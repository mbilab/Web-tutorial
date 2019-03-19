# http & ajax 練習

## Step 0: Setup

You can install packages from scratch.

你可以從零開始安裝需要用到的套件。

```
$ yarn init -y
$ yarn add express jquery
```

If you don't have `yarn`, try `npm`.
Notice that either way is okay.

如果你的電腦沒有 `yarn`，試試 `npm`。
注意兩個擇其一使用即可。

```
$ npm init -y
$ npm i express jquery --save
```

Or, simply use our `package.json`, which specifies dependent packages for you. 

或者，直接使用我們的 `package.json`，裡頭記錄了需要的套件。

```
$ yarn
```

The corresponding command of `npm`.

對應的 `npm` 指令。

```
$ npm i
```

## Step 1: create a web server, which returns text

[Express](https://expressjs.com/) is a lightweight web server for [Node.js](https://nodejs.org/). This step uses it to create a web server in ten lines. Insert the following code into `./ser.js` and follow instructions beginning with `Step 1`.

[Express](https://expressjs.com/) 是一個使用 [Node.js](https://nodejs.org/) 開發的輕量級網頁伺服器，這個步驟用其在十行程式碼內打造一個網頁伺服器。將底下的程式碼插入 `./ser.js`，然後照著 `Step 1` 開頭的提示操作。

```
/* Step 1:
 * edit [port] to an appropriate value
 * storing config to variables is a good practice, see `port` in the code
 * learn the syntax of string interpolation in js, see `${port}` in the code
 * 將 [port] 修改成合適的值
 * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 */

// include `express`
// 載入 `express`
const express = require('express')

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

```
$ node ./ser.js
```

Open `[host]:[port]/step1` in a browser to see the result.

用瀏覽器打開 `[host]:[port]/step1` 看結果。

## Step 2: html code is okay

Server can return html code. Try modify `./ser.js` to return `hello world` in a `<h1>`. Use browser developer console to see server response and page source. Remember to re-execute the modified server.

伺服器可以回傳 html 語法。試著修改 `./ser.js` 使其回傳在 `<h1>` 標籤內的 `hello world`。使用瀏覽器的開發者工具，去看看伺服器的回應和網頁原始碼。記得重新執行你修改過後的伺服器程式。

## Step 3: use static files instead typing html code in js

Insert the following code to `./ser.js` and follow instructions beginning with `Step 3`.

將底下的程式碼插入 `./ser.js`，然後照著 `Step 3` 開頭的提示操作。

```
/* Step 3:
 * edit [path] to an appropriate value
 * notice that the static files are stored in `./dist/`
 * `express.static()` is used to server static files, google `express static` for more
 * `__dirname` is an environment variable in node.js, google `nodejs __dirname` for more
 * 將 [path] 修改成合適的值
 * 注意靜態檔案放在 `./dist` 目錄下
 * `express.static()` 專門用來處理靜態檔案，搜尋 `express static` 了解更多
 * `__dirname` 是 node.js 的環境變數，搜尋 `nodejs __dirname` 了解更多
 */

// handle other urls
// 處理其它網址
app.use(express.static(`${__dirname}/[path]`))
```

Re-execute server and open `[host]:[port]/exercise.html` in a browser to see the result. Do you know where `exercise.html` is?

重新執行啟伺服器，然後用瀏覽器打開 `[host]:[port]/exercise.html` 看結果。你知道 `exercise.html` 在哪嗎？

## Step 4: dynamic results, even with the same url

That's the reason to develop server-side programs. Insert the following code to `./ser.js` and follow instructions beginning with `Step 4`.

這才是開發伺服器端程式的理由。將底下的程式碼插入 `./ser.js`，然後照著 `Step 4` 開頭的提示操作。

```
/* Step 4:
 * open `[host]:[port]/step4` in a browser multiple times to see the result
 * try re-execute the program and see the result
 * learn the syntax of string interpolation in js, see `${++nRequests}` in the code
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

Usually, the dynamic results are related to user input. Insert the following code to `./ser.js` and follow instructions beginning with `Step 5`.

通常網頁的結果會跟使用者的輸入有關，將底下的程式碼插入 `./ser.js`，然後照著 `Step 5` 開頭的提示操作。

```
/* Step 5:
 * user input is stored in the first argument of the callback function, aka `req` in the code
 * open `[host]:[port]/step5?fname=[fname]&lname=[lname]` in a browser to see the result
 * try edit [fname] and [lname]
 * notice the syntax of `?` and `&` in the url
 * 使用者輸入存放在回呼函式的第一個參數，也就是程式中的 `req` 裡
 * 用瀏覽器打開 `[host]:[port]/step5?fname=[fname]&lname=[lname]` 看結果
 * 試著修改 [fname] 與 [lanme]
 * 注意網址中 `?` 與 `&` 的用法
 */
app.get('/step5', (req, res) => {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})
```

## Step 6: input from form instead of url

In practice, websites need to provide html forms, since no users will input via editing url. Insert the following code to `./dist/exercise.html` and follow instructions beginning with `Step 6`.

實際上，網頁需要提供表單，畢竟沒有使用者會透過網址來輸入資料。將底下的程式碼插入 `./dist/exercise.html`，然後照著 `Step 6` 開頭的提示操作。

```
<!-- Step 6:
 * edit [field name]s to appropriate values
 * `action` specifies the url to receive the form data
 * here the server code developed in the last step is used
 * `method="get"` indicates encoding form data in the url, see the next step for more
 * `type="submit"` indicates that clicking the button will trigger the action
 * open `[host]:[port]/exercise.html` in a browser, fill the form, click the submit button and see the result
 * notice the url
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

For complex data and/or security issue, sometimes we need to store form data to somewhere not in the url. Insert the following code to `./ser.js` and follow instructions beginning with `Step 7`.

為了複雜資料或是安全等因素，有時需要將資料存放在網址以外。將底下的程式碼插入 `./ser.js`，然後照著 `Step 7` 開頭的提示操作。

```
/* Step 7:
 * edit [property name]s to appropriate values
 * google `express body-parser` for more
 * notice `app.post()` is used instead of `app.get()`
 * server can return different results for get and post requests of the same url
 * 將 [property name] 修改成合適的值
 * 搜尋 `express body-parser` 了解更多
 * 注意這裡用的是 `app.post()` 而非 `app.get()`
 * 伺服器可以依 get 或是 post，針對同樣網址回傳不同結果
 */

// include `body-parser`
// 載入 `body-parser`
const bodyParser = require('body-parser')

// setup `body-parser`
// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  // `bady-parser` stores parsed data in `req.body`
  // `bady-parser` 將解析好的資料存放在 `req.body`
  res.send(`<h1>Hello, ${req.[property name].fname} ${req.[property name].lname}</h1>`)
})
```

Insert the following code to `./dist/exercise.html` and follow instructions beginning with `Step 7`.

將底下的程式碼插入 `./dist/exercise.html`，然後照著 `Step 7` 開頭的提示操作。

```
<!-- Step 7:
 * edit [field name]s to appropriate values
 * the biggest difference to the last step is `method="post"`
 * open `[host]:[port]/exercise.html` in a browser, fill the form, click the submit button and see the result
 * notice the url
 * try reload the page
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

In above steps, servers return a whole new page for each request, which is not a modern web design. Follow instructions beginning with `Step 8`.

在之前的步驟，伺服器每次收到request都回傳一整個新頁面，而這並不是網頁設計的主流用法。照著 `Step 8` 開頭的提示操作。

```
<!-- Step 8:
 * insert this code snippet to `./dist/exercise.html`
 * set form `id` to help jquery selection
 * `type="submit"` is not necessary, see the step 8 instructions in `./dist/exercise.js`
 * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
 * click the ajax submit button and see the request
 * notice the url
 * 將這個程式碼片段插入 `./dist/exercise.html`
 * 設定 form 的 id 讓 jquery 的選取
 * `type="submit"` 不是必須的，查看 `./dist/exercise.js` 在第八步的指示
 * 在瀏覽器中開啟 `[host]:[port]/exercise.html` 以及開發者工具
 * 點擊 ajax 提交按鈕並查看 request 並注意網址
-->
<form id="ajax-form">
  first name: <input type="text" name="fName"><br>
  last name: <input type="text" name="lName"><br>
  <button type="submit">submit via ajax</button>
</form>
```

## Step 9: send data in ajax requests

Do you notice that browser did not send form data in the ajax request? In ajax, developers need to pack the data explicitly via js code. Follow instructions beginning with `Step 9`.

你有注意到瀏覽器沒有透過 ajax request 傳送資料嗎? 使用 ajax 時，開發者需要使用 javascript 妥善地包裝資料。請跟著底下 `Step 9` 的指令作
```
/* Step 9:
 * edit the `$.get()` in the last code snippet with this code snippet
 * edit [element selector]s to appropriate values
 * the second argument of `$.get()` specifies the data sent to server
 * notice the link from html `fName` to server `fname`
 *  `fName` in `./dist/exercise.html` vs. `fname` in `./ser.js`
 *  packing data explicitly is troublesome, but it brings flexibility
 * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
 * click the ajax submit button and see the request
 * 修改上一個程式碼片段的 `$.get()` ，加上下面的程式碼的內容
 * 修改 `element selector` 成適合的值
 *  `$.get()` 的第二個參數，用來將資料送給伺服器
 * 特別注意 html 中的 `fName` 和伺服器端的 `fname` 兩者之間的連結
 *  `./dist/exercise.html` 中的 `fName` vs. `./ser.js` 中的 `fname`
 *  明確的打包資料確實很麻煩，但是他能夠帶來更大的延展性
 * 在瀏覽器中打開 `[host]:[port]/exercise.html` ，開啟開發者工具（F12）並切到 network 的分頁，觀察開發者日誌
 * 點擊 ajax 的提交按鈕，並且觀察 request
 */
$.get('./step5', {
  fname: $([element selector]).val(),
  lname: $([element selector]).val(),
})
```

## Step 10: show ajax results

In the last two steps, the ajax results can only be observed in developer console. In ajax, developers need to show the results explicitly via js code. Follow instructions beginning with `Step 10`.

在最後的兩個步驟中， ajax 的結果只能在開發者工具中觀察到。使用 ajax 時，開發者需要使用 javascript 妥善地呈現結果。請跟著底下 `Step 10` 的指令作

```
<!-- Step 10:
 * insert this code snippet to `./dist/exercise.html`
 * this div is used to display the result
 * give it an id, `ajax-output`, to help jquery seleciton
 * 將這段程式碼插入 `./dist/exercise.html`
 * 這個 div 是用來顯示結果的
 * 給他一個 id , `ajax-output`, 讓 jquery 可以選到他
-->
<h1 id="ajax-output"></h1>
```

```
/* Step 10:
 * edit the `$.get()` in the code snippet of step 9 with this code snippet
 * the third argument of `$.get()` is a callback function, which is called whenever server responses
 * the first argument of the callback function is the data retruned by server
 * edit [show data in div#ajax-output] to an appropriate
 * open `[host]:[port]/exercise.html` in a browser, click the ajax submit button and see the result
 */
$.get('./step5', {
  fname: $('#ajax-form input[name=fName]').val(),
  lname: $('#ajax-form input[name=lName]').val(),
}, (data) => {
  [show data in div#ajax-output]
})
```

## Step 11: experience "asyncronous"

Ajax means "asynchronous js and xml". So, what's asyncronous? Follow instructions beginning with `Step 11`.

Ajax 代表「非同步 javascript 以及 xml」。所以什麼是非同步?請跟著底下 `Step 11` 的指令作
 
```
/* Step 11:
 * edit [timeout] to an appropriate value
 * if you don't know which code snippet (last or this) update `div#ajax-output` first, that is asyncronous
 */
setTimeout(() => {
  $('#ajax-output').html('loading')
}, [timeout])
```

## Step 12: more

There are more examples included in this unit. No step-by-step instructions for them. But maybe you can learn something from the source code.

以下有更多這個單元的範例。但沒有手把手的教學，但希望你們能夠從原始碼中學到一些東西。

  * `./php/` provides a php version of this exercise. php is a classic server side language. Unlike nodejs will create a web server, you need a web server, such as Apache, to run php.
  * `./chat/` provide a chat room example, where you can learn how to save server data "permanently". That is, the data is stored in file, which does not disappear even if server restarts.
  * `./parcel/` uses `parcel` to bulid static files.

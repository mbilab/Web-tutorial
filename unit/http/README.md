# http & ajax 練習

## Step 0: steup

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
 * 將 [port] 改成合適的值
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
 * 將 [path] 改成合適的值
 * 注意靜態檔案放在 `./dist` 目錄下
 * `express.static()` 專門用來處理靜態檔案，搜尋 `express static` 了解更多
 * `__dirname` 是 node.js 的環境變數，搜尋 `nodejs _-dirname` 了解更多
 */

app.use(express.static(`${__dirname}/[path]`))
```

Re-execute server and open `[host]:[port]/step3.html` in a browser to see the result. Do you know where `step3.html` is?

重新執行啟伺器，然後用瀏覽器打開 `[host]:[port]/step3.html` 看結果。你知道 `step3.html` 在哪嗎？

step 4: then why server side code? “dynamic results”, even with the same url
## Step 4: 伺服器端操作，動態顯示資料

step 5: usually the results are related to user input
## Step 5: 利用url去操作get方法

#### Step 5.1
You can use the url to send data to the server side. Insert the following code into `./ser.js`, and follow instructions beginning with `Step 5`. Open [host]:[port] in a browser to see the result.
透過修改網址，將資料傳回去伺服器端。</br>
將底下的程式碼貼進`./ser.js`裡面，然後跟著`Step 5`的提示做下去。</br>
然後用瀏覽器打開 [host]:[port] 去看看結果。

```
/* Step 5.1:
 * data are included in req, and we can find them in req.query
 */
/* Step 5.1:
 * req裡面會包含前端傳進來的資料，我們可以從req.query取得他們
 */

app.get('/get-data', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})
```

#### Step 5.2
Add the following string `/get-data?fname=[姓]&lname=[名]` to the end of the url. You can see the result after submitting.
送出後，觀察結果。
在網址的後面加上`/get-data?fname=[姓]&lname=[名]`，並自行將姓名改掉。</br>
送出後，觀察結果。


step 4: then why server side code? “dynamic results”, even with the same url
res.send(++nRequests)
step 5: usually the results are related to user input
handle get, test with url
step 6: input from from instead of url
<form method=“get”>
step 7: how to upload file?
<form method=“post”>
step 8: a whole new page for each request, not a modern design
jQuery.get()
step 9: you need to pack input by yourself
jQuery(…).value()
step 10: you need to render the output by yourself
jQuery(…).html()
step 11: experience “async”
try modify timeout
step 11+: more examples
php: classic
chat: file
parcel

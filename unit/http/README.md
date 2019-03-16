# http & ajax 練習

## Step 0: steup
## Step 0: 建環境

You can install packages from scratch.
從零開始安裝需要用到的套件。

```
$ yarn init -y
$ yarn add express jquery
```

If you don't have yarn, here is `npm` commands.
Notice that only one of the following two commands is required.
如果你的電腦沒有安裝`yarn`，底下是`npm`的指令。
需要注意的是，兩個擇其一使用即可。

```
$ npm init -y
$ npm i express jquery --save
```

Or, simply use our `package.json`, which specifies dependent packages for you. 
Use `yarn` to setup with our `package.json`, which specifies dependent packages for you.
或者，`package.json`會記錄過去安裝過的套件，有他就能夠快速裝好環境。</br>
用`yarn`能夠依照`package.json`中的設定，去安裝好相關套件。

```
$ yarn
```

If you don't have yarn, try `npm`.
如果沒有`yarn`，可以使用`npm`。

```
$ npm i
```


## Step 1: create an express to listen requests, return “hello world”
## Step 1: 用express去新增一個路由

[Express](https://expressjs.com/) is a lightweight web server for [Node.js](https://nodejs.org/). Try use it to create a web server in ten lines. Insert the following code into `./ser.js` and follow instructions beginning with `Step 1`. Open [host]:[port] in a browser to see the result.
[Express](https://expressjs.com/) 是一個輕量的網頁伺服器，使用的語言是 [Node.js](https://nodejs.org/). </br>
試著在十行程式碼內建造一個網頁伺服器(web server)，他會去監聽`./`這個路徑，並且在有request的時候回應`hello world`。</br>
將底下的程式碼貼進`./ser.js`裡面，然後跟著`Step 1`的提示做下去。</br>
然後用瀏覽器打開 [host]:[port] 去看看結果。

```
/* Step 1:
 * replace [port] to an appropriate value
 * storing config to variables is a good practice, such as `port`
 * watch out the string interpolation in js, such as `${port}`
 */
/* Step 1:
 * 把[port]改成適合的值
 * 像是`port`這種設定，比較好的作法是將他存成變數。
 * js裡面的string interpolation，像是`${port}`，是一種很方便的寫法。
 */
const express = require('express') // include `express`
const app = express() // create an express, aka web server, instance
const port = [port]

// handle `/` url
app.get('/', (req, res) => {
  // response a string
  res.send('hello world')
})

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
```

## Step 2: html code is okay
## Step 2: 用網頁伺服器(web server)，傳送html的內容

One can response html code. Try modify `./ser.js` to response `hello world` in a `<h1>`. Use browser developer console to see server response and page source.
網頁伺服器(web server)，可以用來回傳html。試著修改`.ser.js`的response，將"hello world"加上`<h1>`的標籤。</br>
使用瀏覽器的開發者工具，去看看伺服器的回應和網頁資源。

## Step 3: use static files instead typing html code in js. Insert the following code to `./ser.js` set the directory where we will put the static files.
## Step 3: 讀取靜態檔案

不要在js裡面打html的程式碼了，express就能夠直接讀取靜態檔案。將底下的程式碼貼到`./ser.js`去設定靜態檔案的路徑。

```
/* Step 3:
 * hide the 'get function' in Step 1, to ensure you can see the result of this step 
 * 'dist' here is like public_html
 * you can create a new folder named 'dist', then put some static files like html, css, js, images, etc.
 * notice the '__dirname' is pointing to the directory where we put the script, 'ser.js' here.
 */
/* Step 3:
 * 將Step 1的app.get那個函式先註解起來，確保你能夠看到這個步驟的結果。
 * 你需要自己在http路徑下中新增一個'dist'資料夾，然後裡面就能放入想要瀏覽的靜態檔案（html, css, js , 圖片等等）。
 * 這邊'dist'資料夾，其實就像是'public_html'
 * 注意這邊'__dirname'指的就是該script檔案（這次是ser.js這支）存放的路徑。
 */

app.use(express.static(`${__dirname}/dist`))
```

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

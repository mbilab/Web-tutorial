# database

## Step 0: setup

Install packages.

安裝套件。

```
npm install mysql --save
yarn add mysql # if you have it
```

Try to read the [official document](https://www.npmjs.com/package/mysql), maybe you don't need our tutorial.

練習閱讀[官方文件](https://www.npmjs.com/package/mysql)，也許你並不需要我們的教學。

## Step 1: config and connect

Copy `config.default.js` to `config.js` and edit it.  When using git, this is a common design.

將 `config.default.js` 複製到 `config.js` 並修改其內容。在使用 git 時，這是一個常見的設計。

```
cp config.default.js config.js
vi config.js
```

## Step 2: create table 

Insert the following code to `./mysql.js` and follow the instructions beginning with `Step 2`.

將底下的程式碼插入 `./mysql.js`，然後照著 `Step 2` 開頭的提示操作。

```
/* Step 2:
 * edit [some query] to an appropriate value
 * you can google the syntax easily
 * 將 [some query] 修改成合適的值
 * 你可以輕鬆在網路上找到語法
 */
// create tables
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score (id VARCHAR(10), score VARCHAR(10))')

// list tables
connection.query('[some query] TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})
```

Execte the program.

執行程式。

```
node mysql.js
```

## Step 3: insert data

Insert the following code to `./mysql.js` and follow the instructions beginning with `Step 3`.

將底下的程式碼插入 `./mysql.js`，然後照著 `Step 3` 開頭的提示操作。

```
/* Step 3:
 * edit [your id], [your name], [your course] and [your score] to appropriate values
 * once succeeded, remember to commet this code snippet to prevent multiple insertions
 * 將 [your id], [your name], [your course] 以及 [your score] 修改成合適的值
 * 成功後，成功之後，可以將這一段註解掉，避免重複插入資料
 */
connection.query('INSERT INTO student (id, name, cid) VALUES ([your id], [your name], "W0001"), ("A12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning"), [your course]', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO score (id, score) VALUES ([your id], [your score]), ("A123456789", 90)', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
```

Use phpMyAdmin to see the database.

使用 phpMyAdmin 觀看資料庫內容。

## Step 4: query data

Insert the following code to `./mysql.js` and follow the instructions beginning with `Step 4`.

將底下的程式碼插入 `./mysql.js`，然後照著 `Step 4` 開頭的提示操作。

```
/* Step 4:
 * edit [some query] and [your name] to appropriate values
 * 將 [some query] 以及 [your name] 修改成合適的值
 */
connection.query('[some query] id FROM student WHERE name LIKE [your name]', function (error, results, fields) {
  if (error) throw error
  console.log('My id is: ', results)
})
```

## Step 5: query data that spread across tables

Insert the following code to `./mysql.js` and follow the instructions beginning with `Step 5`.

將底下的程式碼插入 `./mysql.js`，然後照著 `Step 5` 開頭的提示操作。

```
/* Step 5:
 * edit [some query]s to appropriate values, which are different
 * hint: try google 'join'
 * 將 [some query]s 修改成合適的值，注意兩個要填的東西是不一樣的
 * 提供：試試搜尋 'join'
 */
const sql = `
  SELECT student.id, student.name FROM student
  [some query] course [some query] course.id = student.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})
```

## Quiz

Query your score via your name.

使用你的名字查詢你的成績。

## mongodb

This tutorial includes a demo code of using MongoDB without a step-by-step README.  Try to trace `mongodb.js` by youself.  Following are steps to setup a GUI environment for MongoDB.

這份教材有提供使用 MongoDB 的範例程式，但是沒有一步一步的教學。可以試著靠自己了解 `mondb.js` 的程式。下面是為 MongoDB 設置 GUI 環境的教學。


```
// clong 'mongo-express'
git clone https://github.com/mongo-express/mongo-express.git
cd mongo-express
npm install
yarn # if you have it
cp config.default.js config.js
```

Find and edit the following code snippet in `config.js`.

在 `config.js` 裡找到以下地方並修改。

```
mongo = {
  connectionString: process.env.ME_CONFIG_MONGODB_SERVER ? '' : process.env.ME_CONFIG_MONGODB_URL,
  db: [database name],
  username: [user name],
  password: [password],
};

...

  site: {
    baseUrl: process.env.ME_CONFIG_SITE_BASEURL || '/',
    cookieKeyName: 'mongo-express',
    cookieSecret: process.env.ME_CONFIG_SITE_COOKIESECRET || 'cookiesecret',
    host: process.env.VCAP_APP_HOST || 'luffy.ee.ncku.edu.tw',
    port: process.env.VCAP_APP_PORT || [port],

...

  basicAuth: {
    username: getFileEnv(basicAuthUsername) || [user name you want for the GUI],
    password: getFileEnv(basicAuthPassword) || [password your want for the GUI],
  },
```

Execute:

執行：

```
node app.js
```

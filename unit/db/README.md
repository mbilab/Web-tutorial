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

Copy `config.js.sample` to `config.js` and edit it.  When using git, this is a common design.

將 `config.js.sample` 複製到 `config.js` 並修改其內容。在使用 git 時，這是一個常見的設計。

```
cp config.js.sample config.js
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

加入學生資料 課程資料及成績，並保持 `[your id]` 一致
成功之後，可以將這一段註解掉( /* 內容 */ )，避免重複插入資料！

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

使用 phpMyAdmin 觀看資料庫內容.

## Step 4: query data

Insert the following code to `./mysql.js` and follow the instructions beginning with `Step 4`.

將底下的程式碼插入 `./mysql.js`，然後照著 `Step 4` 開頭的提示操作。

```
/* Step 4:
 * edit [some query] and [your name] to appropriate values
 * 將 [some query] 以及 [your name] 修改成合適的值
 */
connection.query('[some query] id FROM student WHERE name LIKE [your name]', function (error, results, fields) {
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

## mongo-express

從github下載mongo-express

```
$ git clone https://github.com/mongo-express/mongo-express.git
$ cd mongo-express
$ npm install
$ cp config.default.js config.js
```

在config.js裡找到以下地方並修改

```
mongo = {
  connectionString: process.env.ME_CONFIG_MONGODB_SERVER ? '' : process.env.ME_CONFIG_MONGODB_URL,
  db: '你們那組 database name',
  username: '你們那組 mongodb user name',
  password: '你們那組 mongodb password',
};

......

  site: {
    baseUrl: process.env.ME_CONFIG_SITE_BASEURL || '/',
    cookieKeyName: 'mongo-express',    cookieSecret:     process.env.ME_CONFIG_SITE_COOKIESECRET  || 'cookiesecret',
    host:             process.env.VCAP_APP_HOST                || 'luffy.ee.ncku.edu.tw',
    port:             process.env.VCAP_APP_PORT                 || '你們MongoDB UI要用的port',
    requestSizeLimit: process.env.ME_CONFIG_REQUEST_SIZE        || '50mb',
    sessionSecret:    process.env.ME_CONFIG_SITE_SESSIONSECRET  || 'sessionsecret',
    sslCert:          process.env.ME_CONFIG_SITE_SSL_CRT_PATH   || '',
    sslEnabled:       process.env.ME_CONFIG_SITE_SSL_ENABLED    || false,
    sslKey:           process.env.ME_CONFIG_SITE_SSL_KEY_PATH   || '',
  }

  basicAuth: {
    username: process.env.ME_CONFIG_BASICAUTH_USERNAME || '你想要登入MongoDB UI的帳號',
    password: process.env.ME_CONFIG_BASICAUTH_PASSWORD || '你想要登入MongoDB UI的密碼',
  },
```

執行

`$ node app.js`

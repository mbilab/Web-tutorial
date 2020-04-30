# Basic database

## Step 0: setup
使用 npm 或 yarn 安裝 mysql 相關套件
`npm install mysql --save`
or
`yarn add mysql`

查看[官方檔案](https://www.npmjs.com/package/mysql)的說明

## Step 1: config and connect
將 config.default.js 改成 config.js

`$ cp config.default.js config.js`

並完成設置
`$ vi config.js`

## Step 2: create table 
加入 student, course, score 3個 table 

```
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score (id VARCHAR(10), score VARCHAR(10))')
```

查看所有 table，上網查找列出 table 的語法
```
connection.query('[some query] TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})
```

## Step 3: insert data
加入學生資料 課程資料及成績，並保持 `[your id]` 一致
成功之後，可以將這一段註解掉( /* 內容 */ )，避免重複插入資料！

```
connection.query('INSERT INTO student (id, name, cid) VALUES ([your id], [your name], "W0001"), ("A12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning"), [your class]', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO score (id, score) VALUES ([your id], [your score]), ("A123456789", 90)', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
```

找出語法查看 student 中你的 id
```
connection.query('[some query] id FROM student WHERE name LIKE [your name]', function (error, results, fields) {
  if (error) throw error
  console.log('My id is: ', results)
})
```

## Step 4: combine tables
結合兩個 table 並查詢相關資訊
找出語法結合兩個 table
```
const sql = `
  SELECT student.id, student.name FROM student
  [some query] course [some query] course.id = student.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})
```

hint: join

## Quiz:
使用你的名字找出你的成績

## MongoDB UI
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

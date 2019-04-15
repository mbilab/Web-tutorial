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
加入 student 跟 course 兩個 table 

```
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score (id VARCHAR(10), score VARCHAR(10))')
```

查看所有 TABLE
```
connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})
```
## Step 3: insert data


```
connection.query('INSERT INTO student (id, name, cid) VALUES ("F12345678", "StudentA", "W0001"), ("P12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
```


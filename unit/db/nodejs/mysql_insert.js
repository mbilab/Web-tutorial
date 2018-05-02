#!/usr/bin/env node
const config = require('./config');
const mysql = require('mysql');

console.log(config.mysql.host)

const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.passwd,
  database: config.mysql.dbname
})

connection.connect((err) => {
  if (err) {
    console.log('MySQL connection failed', err)
    process.exit()
  }
})

connection.query(`CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30));`);
connection.query(`CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30));`);
connection.query(`CREATE TABLE IF NOT EXISTS student_course (sid VARCHAR(10), cid VARCHAR(10));`);

connection.query(`INSERT INTO student (id, name) VALUES ("F12345678", "Student A"), ("P12345679", "StudentB")`, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

connection.query(`INSERT INTO course (id, name) VALUES ("B0001", "Web Programming"), ("M0001", "Machine Learning")`, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

connection.query(`INSERT INTO student_course (sid, cid) VALUES ("F12345678", "B0001"), ("F12345678", "M0001"), ("P12345679", "B0001")`, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

setTimeout(() => {
  process.exit();
}, 2000);

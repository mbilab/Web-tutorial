#!/usr/bin/env node

const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log('fail to connect:', err)
    process.exit()
  }
})

// create table if necessary
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')

// insert
connection.query('INSERT INTO student (id, name, cid) VALUES ("F12345678", "StudentA", "W0001"), ("P12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})

// query
const sql = `
  SELECT student.id, student.name FROM student
  JOIN course ON course.id = student.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})

connection.end()

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
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS student_course (sid VARCHAR(10), cid VARCHAR(10))')

// insert
connection.query('INSERT INTO student (id, name) VALUES ("F12345678", "Student A"), ("P12345679", "StudentB")', (err, result) => {
  if (err) console.log('fail to insert:', err)
  else console.log(result)
})

// query
const sql = `
  SELECT student.id, student.name FROM student
  JOIN student_course ON student_course.sid = student.id
  JOIN course ON course.id = student_course.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})

connection.end()

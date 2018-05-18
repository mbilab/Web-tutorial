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

connection.query('CREATE TABLE IF NOT EXISTS big_table (id INT, score INT)')

for (let i = 1; i < 100000; i++)
  connection.query(`INSERT INTO big_table (id, score) VALUES (${i}, ${Math.floor(Math.random() * 100)})`)

connection.end()

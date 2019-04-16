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

// Step 2
// create table if necessary


// show table


// Step 3
// insert data


// search data


// Step 4
// combine tables

connection.end()

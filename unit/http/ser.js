#!/usr/bin/env node


// Step 1 code goes here

const express = require('express')
const app = express()
const port = [port] // change the port number

// handle `/` url
app.get('[url]', (req, res) => {
  // response a string
  res.send('hello world')
})

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

// Step 4 code goes here
let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

// Step 3 code goes here
app.use(express.static(`${__dirname}/[path]`))

// Step 5 code goes here
app.get('/step5', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

// Step 6 code goes here
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  // `bady-parser` stores parsed data in `req.body`
  // `bady-parser` 將解析好的資料存放在 `req.body`
  res.send(`<h1>Hello, ${req.[property name].fname} ${req.[property name].lname}</h1>`)
})


/*
app.get('/get-data', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

app.post('/post-data', function(req, res) {
  res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
})

app.get('/ajax-data', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
*/

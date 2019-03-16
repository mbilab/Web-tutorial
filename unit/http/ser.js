#!/usr/bin/env node


// Step 1 code goes here

const express = require('express')
const app = express()
const port = 30000 // change the port number

/*
// handle `/` url
app.get('/', (req, res) => {
  // response a string
  res.send('hello world')
})
*/

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


// Step 3 code goes here
// serve other urls
app.use(express.static(`${__dirname}/dist`))


// Step 5.1 code goes here
// serve `/get` url
app.get('/get-data', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

/*
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve `/get` url
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

#!/usr/bin/env node

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 10000 // change the port number

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

// serve other urls
app.use(express.static(`${__dirname}/dist`))

// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

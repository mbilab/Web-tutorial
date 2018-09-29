#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 10000 // change the port number

// serve `/get` url
app.get('/get', function(req, res) {
  res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})

// serve other urls
app.use(express.static(`${__dirname}/public`))

// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

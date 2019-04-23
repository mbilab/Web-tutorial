#!/usr/bin/env node

const express = require('express')
const app = express()
const fs = require('fs')
const config= require('./config')
const port = config.port

app.use(express.static(`${__dirname}/dist`))

app.get('/hello', (req, res) => {
  msg = 'hello'
  setTimeout(()=>res.send(msg) , 500);
})

//  remove here in Step 1 //
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
//  remove here in Step 1 //

// Step 1 code here //

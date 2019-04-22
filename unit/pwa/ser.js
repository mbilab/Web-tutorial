#!/usr/bin/env node

const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const config= require('./config')
const port = config.port

const options = {
  ca : fs.readFileSync(config.ssl.ca),
  key: fs.readFileSync(config.ssl.key),
  cert:fs.readFileSync(config.ssl.cert)
}

app.use(express.static(`${__dirname}/dist`))

app.get('/version', (req, res) => {
  version = 'v2'
  res.send(version)
})

https.createServer(options, app).listen(port,()=>{
    console.log(`listen on port:${port}`)
})


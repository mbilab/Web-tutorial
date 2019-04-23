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

// app.listen(port, () => {
//     console.log(`listening on port: ${port}`)
// })

const https = require('https')

const options = {
  ca : fs.readFileSync(config.ssl.ca),
  key: fs.readFileSync(config.ssl.key),
  cert:fs.readFileSync(config.ssl.cert)
}

https.createServer(options, app).listen(port,()=>{
  console.log(`listen on port:${port}`)
})

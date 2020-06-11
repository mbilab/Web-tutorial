const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')
const request = require('request')

const app = express()
app.use(express.static(path.join(__dirname, 'howhow')))
const server = https.createServer({
  cert: fs.readFileSync('./ssl/certificate.crt'),
  key: fs.readFileSync('./ssl/private.key'),
}, app)

port = 1299

app.get('/test', (req, res)=>{
  url = encodeURI(`https://lab.howgersay.aotter.net/api/getposition?q=${req.query.word}`)
  request(url, (error, response, body) => {
    res.send(body)
  })
})

server.listen(port, function() {
  console.log('runing Web Server in ' + port + ' port...')
})

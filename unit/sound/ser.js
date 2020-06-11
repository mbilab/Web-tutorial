const express = require('express');
const app = express();
const fs = require('fs')
const https = require('https');
const path = require('path');
const request = require('request')

app.use(express.static(path.join(__dirname, 'howhow')))
const server = https.createServer({
	key: fs.readFileSync('./ssl/private.key'),
  cert: fs.readFileSync('./ssl/certificate.crt') 
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


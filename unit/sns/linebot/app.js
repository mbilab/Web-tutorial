const fs = require('fs')
const https = require('https')
const express = require('express')
const app = express()
const line = require('@line/bot-sdk')
const config = require('./config.js')

const lineConfig = {
  channelAccessToken: config.accessToken,
  channelSecret: config.secret
}

const sslOptions = {
  key: fs.readFileSync(config.key_path),
  ca: fs.readFileSync(config.ca_path),
  cert: fs.readFileSync(config.cert_path)
}

app.post('/webhook', line.middleware(lineConfig), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
})

const client = new line.Client(lineConfig)
function handleEvent(event) {
  console.log(event)
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }

  if (event.message.id == '100001') return 200 // to deal with verify dummy data

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text
  })
}

const server = https.createServer(sslOptions, app)

server.listen(config.port, () => {
	console.log(`listen on port ${config.port}`)
})

const express = require('express')
// const bodyParser = require("body-parser");
const app = express()
const port = 50000 // modify this if necessary

app.listen(port)
console.log(`listening port: ${port}`)

app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.json())

app.post("/ajax_data", function(req, res) {
  res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})

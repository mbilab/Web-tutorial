const express = require('express')
const app = express()
const port = 50000 // modify this if necessary

app.listen(port)
console.log(`listening port: ${port}`)

const fs = require('fs')
const students = JSON.parse(fs.readFileSync('./students.json'))

app.use(express.static(__dirname + '/public'))

app.get('/ajax', (req, res) => {
  const json = JSON.stringify(students[req.query.id1]) + JSON.stringify(students[req.query.id2])
  res.send(json)
})

// vi:nu

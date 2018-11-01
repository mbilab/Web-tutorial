const express = require('express')
const app = express()
const port = 50000 // modify this if necessary

app.listen(port)
console.log(`listening port: ${port}`)

var fs = require('fs')
const students = JSON.parse(fs.readFileSync('./students.json'))

app.use(express.static(__dirname + '/public'))

app.get('/ajax', (req, res) => {
  const id1 = req.query.id1
  const id2 = req.query.id2
  if (students[id1])
    res.send(students[id1])
  if (students[id2])
    res.send(students[id2])
})

// vi:et:sw=2:ts=2

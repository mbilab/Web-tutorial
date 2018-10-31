const express = require("express")
const app = express()
const port = 50000 // modify this if necessary

var fs = require("fs");
var content = fs.readFileSync("./students.json");
var jsonfile = JSON.parse(content);

app.listen(port)
console.log(`listening port: ${port}`)

app.use(express.static(__dirname + "/public"))

app.get("/ajax_list", function(req, res) {
  content = JSON.stringify(jsonfile['class1']) + JSON.stringify(jsonfile['class2'])
  res.send(`${content}`)
})

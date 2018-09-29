const express = require("express")
const app = express()
const port = 50000 // 請改成其他你喜歡的數字
const bodyParser = require("body-parser");

var fs = require("fs");
var content = fs.readFileSync("./students.json");
var jsonfile = JSON.parse(content);
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(port)
app.use(express.static(__dirname + "/public"))

app.get("/ajax_list", function(req, res) {
  content = JSON.stringify(jsonfile).replace(/(,|{|})/g, "<br/>").replace(/"/g, "").replace(/:/g, " : ")
  res.send(`${content}`)
})

app.get("/ajax_search", function(req, res) {
  id = req.query.id
  res.send(`Hello, ${jsonfile[id]}`)
})

const express = require('express')
const app = express()
const port = 10000 // change the number of you want

app.use(express.static(__dirname + '/public'))
app.get('/get', function(req, res) {
    res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

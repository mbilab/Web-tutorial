
const express = require('express')
const app = express()
const port = 30000 // change the port number
const bodyParser = require('body-parser')
var fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/chat_text', function(req, res){
    if(req.body.text){
        req.body.text += '</br>'
        fs.appendFile(`${__dirname}/chat.txt`, req.body.text, (err)=>{
            if(err) console.log(err)
        })
    }
    fs.readFile(`${__dirname}/chat.txt`, (err, data)=>{
        if (err) console.log(err)
        else res.send(data)
    })
})


app.use(express.static(`${__dirname}/dist`))
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


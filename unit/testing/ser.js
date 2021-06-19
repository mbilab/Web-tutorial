const express = require('express')
const app = express()
// Step 3.1 code goest here

app.listen(port, function() {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/dist`))

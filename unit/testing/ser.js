const express = require('express')
const app = express()
const port = [port] /* Step 3.1 */

app.listen(port, function() {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/dist`))

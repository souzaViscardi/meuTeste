const express = require('express')
const app = express()
const server = require('./server')

server(app)
app.listen(3000, () => {
  console.log('Example app listening on  http://127.0.0.1:3000!')
})


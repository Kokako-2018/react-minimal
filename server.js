const path = require('path')
const express = require('express')
const bodyParser = require('body-parser') 

const routes = require('./server/routes')

const PORT = process.env.PORT || 3000

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1/', routes)


server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

module.exports = server
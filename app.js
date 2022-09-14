const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(response)
})

server.listen(process.env.PORT || 5000)

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(response)
})

let port = process.env.PORT || 5000;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);

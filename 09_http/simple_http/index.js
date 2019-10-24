const http = require('http')

// http
//   .createServer(function(req, res) {
//     if (req.url == '/favicon.ico') {
//       res.writeHead(200)
//       res.end()
//       return
//     }
//     console.log(req.url)
//     res.writeHead(200)
//     res.end('hello')
//   })
//   .listen(3000)

const fs = require('fs')
// 返回简单的html
http
  .createServer(function(req, resp) {
    if (req.url == '/favicon.ico') {
      resp.writeHead(200)
      resp.end()
      return
    }

    resp.writeHead(200)
    fs.createReadStream(__dirname + '/index.html')
      .pipe(resp)
  })
  .listen(3000)

// npm httpserver模块




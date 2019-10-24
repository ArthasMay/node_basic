const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const game = require('./game.js')

let playerwon = 0
let lastAction = null
let sameCount
http
  .createServer(function(req, res) {
    const parseUrl = url.parse(req.url)
    
    if (parseUrl.pathname == '/favicon.ico') {
      res.writeHead(200)
      res.end()
      return
    }

    if (parseUrl.pathname == '/game') {
      const query = querystring.parse(parseUrl.query)
      const playAction = query.action
      const gameResult = game(playAction)

      if (playerwon >= 3 || sameCount == 9) {
        res.writeHead(500)
        res.end('我再也不和你玩了')
        return
      }

      if (lastAction && playAction == lastAction) {
        sameCount++
      } else {
        sameCount = 0
      }
      lastAction = playAction

      if (sameCount >= 3) {
        res.writeHead(400)
        res.end('你作弊')
        sameCount = 9
        return
      }

      res.writeHead(200)
      
      if (gameResult == -1) {
        res.end('你输了')
      } else if (gameResult == 1) {
        res.end('你赢了')
        playerwon++
      } else {
        res.end('平局')
      }
    }

    if (parseUrl.pathname == '/') {
      fs.createReadStream(__dirname + '/index.html')
        .pipe(res)
    }
  })
  .listen(3000)
const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const game = require('./game.js')
const express = require('express')

let playerwon = 0
let lastAction = null
let sameCount = 0

const app = express()

app.get('/favicon.ico', function (req, res) {
  res.status(200)
  return
})

// 未使用express的洋葱模型
app.get('/game', 
  function(req, res, next) {
    if (playerwon >= 3 || sameCount == 9) {
      res.status(500)
      res.send('我不会再玩了')
      return
    }
    
    // 通过next执行后续中间件
    next()
  },

  function(req, res, next) {
    const query = req.query
    const playerAction = query.action
    
    if (!playerAction) {
      res.status(400)
      res.send()
      return
    }

    if (lastAction == playerAction) {
      sameCount++
      if (sameCount >= 3) {
        res.status(400)
        res.send('你作弊！我再也不玩了')
        sameCount = 9
        return
      } 
    } else {
      sameCount = 0
    }
    lastAction = playerAction

    // 把用户操作挂在response上传递给下一个中间件
    res.playerAction = playerAction
    next()
  },

  function(req, res) {
    const playerAction = res.playerAction
    const result = game(playerAction)

    res.status(200)
    if (result == 0) {
      res.send('平局')

    } else if (result == -1) {
      res.send('你输了')

    } else {
      res.send('你赢了')
      res.playerWon = true;
    }
    
    if (res.playerWon) {
      playerwon++;
    }
  }
)

app.get('/', function (req, res) {
  res.status(200).send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.listen(5000)
const koa = require('koa')
const mount = require('koa-mount')
const fs = require('fs')
const game = require('./game.js')

let playerwon = 0
let lastAction = null
let sameCount = 0

const app = new koa()



app.use(
  mount('/favicon.ico', function(ctx) {
    ctx.status = 200
  })
)

// 这里要接受许多中间件的话，不是像express一样的书写方式，app.use()只接受一个中间件or另一个koa实例
const gamekoa = new koa()

gamekoa.use(
  async function (ctx, next) {
    if (playerwon >= 3) {
      ctx.status = 500
      ctx.body = '我不会再玩了'
      return
    }

    await next()

    // 就能获得一个准确的洋葱模型效果
    if (ctx.playerWon) {
      playerwon++;
    }
  }
)

gamekoa.use(
  async function (ctx, next) {
    const query = ctx.query
    const playerAction = query.action

    if (!playerAction) {
      ctx.status = 400
      return
    }

    if (sameCount == 9) {
      ctx.status = 500
      ctx.body = '我不会再玩了'
      return
    }

    lastAction || (lastAction = playerAction)
    if (lastAction == playerAction) {
      sameCount++
      if (sameCount >= 3) {
        ctx.status = 400
        ctx.body = '你作弊！我再也不玩了'
        sameCount = 9
        return
      }
    } else {
      sameCount = 0
    }
    lastAction = playerAction

    // 把用户操作挂在response上传递给下一个中间件
    ctx.playerAction = playerAction
    await next()
  }
)

gamekoa.use(
  async function (ctx) {
    const playerAction = ctx.playerAction
    const result = game(playerAction)

    await new Promise(resolve => {
      setTimeout(() => {
        ctx.status = 200
        if (result == 0) {
          ctx.body = '平局'
        } else if (result == -1) {
          ctx.body = '你输了'
        } else {
          ctx.body = '你赢了'
          ctx.playerWon = true;
        }
        resolve()
      }, 500)
    })
  }
)

app.use(
  mount(
    '/game',
    gamekoa)
) 

app.use(
  mount('/', function (ctx) {
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
  })
)

app.listen(5000)
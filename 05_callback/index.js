// 抛出全局错误
// try {
//   interview(function() {
//     console.log('smile');
//   })
// } catch (e) {
//   console.log('cry', e);
// }

// node.js 回调函数error-first规范
// function interview(callback) {
//   setTimeout(() => {
//     if (Math.random() < 0.1) {
//       callback('success')
//     } else {
//       throw new Error('fail')
//     }
//   }, 500);
// }

// interview(function(res) {
//   if (res instanceof Error) {
//     return console.log('cry');
//   }
//   console.log('smile');
// })

// callback异步流程控制问题：回调地狱
// interview(function(err) {
//   if (err) {
//     return console.log('cry at 1st round');
//   }
  
//   interview(function(err) {
//     if (err) {
//       return console.log('cry at 2st round');
//     }

//     interview(function (err) {
//       if (err) {
//         return console.log('cry at 3st round');
//       }

//       console.log('smile');
//     })
//   })
// })


var count = 0
interview(function(err) {
  if (err) {
    return console.log('cry')
  }
  count ++

  if (count === 2) {
    console.log('smile')
  }
})

interview(function(err) {
  if (err) {
    return console.log('cry')
  }
  count++
  if (count === 2) {
    console.log('smile')
  }
})

function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback(null, 'success')
    } else {
      callback(new Error('fail'))
    }
  }, 500);
}


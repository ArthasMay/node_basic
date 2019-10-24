// (function(){
//   var promise = new Promise((resolve, reject) => {
//     setTimeout(_ => {
//       reject(new Error())
//     }, 500)
//   })
  
//   console.log(promise)

//   setTimeout(() => {
//     console.log(promise)
//   }, 800)
// })()

// (function() {
//   var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 300)
//     setTimeout(() => {
//       reject()
//     }, 500)
//   })

//   console.log(promise)

//   setTimeout(() => {
//     console.log(promise)
//   }, 800)
// })()

// (function() {
//   var promise = interview()
//   var promise2 = promise
//     .then((res) => {
//       throw new Error('refuse')
//     })

//   setTimeout(() => {
//     console.log(promise);
//     console.log(promise2)
//   }, 800);
// })();

// (function() {
//   var promise = interview();
//   var promise2 = promise
//     .then(res => {
//       return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//           resolve('accept')
//         }, 400);
//       })
//     });

//   setTimeout(() => {
//     console.log(promise);
//     console.log(promise2);
//   }, 800);
//   setTimeout(() => {
//     console.log(promise);
//     console.log(promise2);
//   }, 1000);
// })();

// function interview() {
//   return new Promise((resolve, reject) => {
//     setTimeout(_ => {
//       if (Math.random() > 0) {
//         resolve('success')
//       } else {
//         reject(new Error('fail'))
//       }
//     }, 500)
//   })
// }

// (function() {
//   var promise = interview(1)
//     .then(() => {
//       return interview(2)
//     })
//     .then(() => {
//       return interview(3)
//     })
//     .then(() => {
//       console.log('smile');
//     })
//     .catch((e) => {
//       console.log('cry at ' + e.round + ' round');
//     })
// })();
(function() {
  Promise
    .all([
      interview('ali'),
      interview('tecent')
    ])
    .then(_ => {
      console.log('smile');
    })
    .catch(e => {
      // 捕获第一个rejected的Promise
      console.log('cry for ' + e.name);
    })
})();
// 如果要知道所有并发的promise状态，只能先存下来
// var promise1 = new Promise(function(resolve, reject) {});
// var promise2 = new Promise(function(resolve, reject) {});

function interview(name) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      if (Math.random() > 0.2) {
        resolve("success");
      } else {
        var error = new Error('fail')
        error.name = name
        reject(error);
      }
    }, 500);
  });
}
// console.log(async function() {
//   return 4
// }());

// console.log(function() {
//   return new Promise(resolve => {
//     resolve(4)
//   })
// }())


// (function() {
//   const result = async function () {
//     try {
//       var content = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject(new Error('8'))
//         }, 500)
//       })
//     } catch (error) {
//       console.log('error', error.message)
//     }

//     console.log(content)
//     return 4
//   }()
//   setTimeout(() => {
//     console.log(result);
//   }, 800)
// })()

(async function() {
    try {
      await interview(1)
      await interview(2)
      await interview(3)
    } catch (e) {
      return console.log('cry at'  + e.round);
      
    }
})();


function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve('success')
      } else {
        reject(new Error('fail'))
      }
    }, 500);
  })
}
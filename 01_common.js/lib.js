console.log('hello, geekbang')

exports.hello = 'world'

exports.add = function(a, b) {
  return a + b
}

exports.geekbang = { hello: 'world' }

module.exports = function minus(a, b) {
  
}

let timeId = setTimeout(() => {
  console.log(exports)
}, 2000)

console.log(timeId)
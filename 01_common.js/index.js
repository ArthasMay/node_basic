console.log('srart require')
// var lib = require('./lib.js') require默认是{}
var lib = require('./lib.js')

console.log('end require', lib)

lib.additional = 'test'
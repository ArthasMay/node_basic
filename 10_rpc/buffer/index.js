// const buffer1 = Buffer.from('geekbang')
// const buffer2 = Buffer.from([1, 2, 3, 4])

// const buffer3 = Buffer.alloc(20)

// console.log(buffer1)
// console.log(buffer2)
// console.log(buffer3)

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log(schema)
// console.log(schema.toJSON)

const buffer = schema.Column.encode({
  id: 1,
  name: "Node.js",
  price: 80.4
})

console.log(schema.Column.decode(buffer))

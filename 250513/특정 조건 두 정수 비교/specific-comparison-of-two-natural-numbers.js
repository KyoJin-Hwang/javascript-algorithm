const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a,b] = input
const first = a < b ? 1 : 0
const second = a == b ? 1 : 0
console.log(first, second)

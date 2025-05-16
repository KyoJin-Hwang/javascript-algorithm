const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ')

let [a, b] = num

const q = ~~a+8
const w = ~~b*3
const e = q*w

console.log(q)
console.log(w)
console.log(e)

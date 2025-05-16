const fs = require('fs').readFileSync(0).toString().trim().split('-')

const [a, b, c] = fs
const arr = [a, c, b]
console.log(arr.join('-'))





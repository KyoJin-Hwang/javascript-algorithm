const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a, b] = input
const sum = a+b
console.log(sum, (sum/input.length).toFixed(1))
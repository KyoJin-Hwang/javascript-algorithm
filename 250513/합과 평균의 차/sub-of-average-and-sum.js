const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a, b, c] = input

const sum = a+b+c
const average = sum/input.length

console.log(sum)
console.log(average)
console.log(sum-average)
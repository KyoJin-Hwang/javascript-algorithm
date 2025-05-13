const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)

console.log(arr.map(el=>el**2).join(' '))
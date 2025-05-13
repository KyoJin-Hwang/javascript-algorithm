const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(el => Number(el))

console.log(input.sort((a,b)=> a-b)[1])




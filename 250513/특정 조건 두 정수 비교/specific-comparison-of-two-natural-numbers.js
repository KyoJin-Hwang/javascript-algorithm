const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a,b] = input

if(a < b) console.log(1, 0)
else console.log(0, 1)
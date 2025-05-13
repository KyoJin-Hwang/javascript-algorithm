const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())

let sum = 0 
let stack = 0

for(let i = 1; i<=100; i++){
    sum += i
    stack++
    if(sum >= input) break;
}

console.log(stack)
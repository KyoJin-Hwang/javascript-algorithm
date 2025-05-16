const fs = require('fs')
const num = fs.readFileSync(0).toString().trim()

let sum = 0
for(let i = ~~num; i<= 100; i++){
    sum += i
}

console.log(sum)
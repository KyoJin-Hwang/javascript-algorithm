const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = ~~input[0]

let sum = 0

for(let i = 1; i <= n; i++){
    let x = ~~input[i]
    if(x % 2 === 1 && x % 3 === 0){
        sum += x
    }
}

console.log(sum)
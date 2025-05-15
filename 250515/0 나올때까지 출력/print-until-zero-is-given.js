const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let idx = 0
while(input[idx] !== 0){
    console.log(input[idx])
    idx++
}
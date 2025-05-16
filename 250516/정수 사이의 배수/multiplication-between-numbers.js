const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [a, b] = num

let sum = 0 
let average = 0
for(let i = a; i <= b; i++){
    if(i % 5 === 0 || i % 7 === 0) {
        sum += i
        average++
    }
}

console.log(sum, (sum/average).toFixed(1))




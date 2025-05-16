const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [a,b] = num
let sum = 0
for(let i = a; i<=b; i++){
    if(i % 2 === 0) sum += i
}
console.log(sum)
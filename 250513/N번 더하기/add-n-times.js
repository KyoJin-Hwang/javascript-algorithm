const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a, n] = num
let sum = a+n 

for(let i = 0; i < n; i++){
    console.log(sum)
    sum += n
}

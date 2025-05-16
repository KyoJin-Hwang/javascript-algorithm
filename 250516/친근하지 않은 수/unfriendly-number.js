const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

const a = ~~input
let sum = 0
for(let i = 1; i <= a; i++){
    if(i % 2===0 || i % 3 === 0 || i % 5 === 0) continue
    sum++
}
console.log(sum)
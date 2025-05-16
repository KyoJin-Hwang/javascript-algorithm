const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a,b] = input
let prod = 1

for(let i = 1; i <= b; i++){
    if(i % a === 0) prod *= i
}

console.log(prod)
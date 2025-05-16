const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a,b] = input

let prod = 1
for(let i = a; i <= b; i++){
    prod *= i
}
console.log(prod)
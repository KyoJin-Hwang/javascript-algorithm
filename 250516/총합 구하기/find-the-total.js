const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a,b] = input
let sum = 0

// 6배수 o 8배수 x
for(let i = a; i <= b; i++){
    if(i % 6 === 0 && i % 8 !== 0) sum+=i
}
console.log(sum)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

const arr = []
const arr2 = []

for(let i = 0; i <= n; i++){
    if(n % i === 0) arr.push(i)
}
for(let i = 0; i <= m; i++){
    if(m % i === 0) arr2.push(i)
}

const common = arr2.filter(el => arr.includes(el));
const max = Math.max(...common)

console.log(max);

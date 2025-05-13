const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a,b] = input

let total = 0

for(let i = a; i<=b; i++){
    if(i % 2 === 0) total += i
    else continue
}

console.log(total)

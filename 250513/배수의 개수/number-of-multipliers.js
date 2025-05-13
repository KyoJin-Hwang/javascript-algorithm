const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let total3 = 0
let total5 = 0

for(let num of input){
    if(num % 3 === 0) total3++
    if(num % 5 === 0) total5++
}

console.log(total3, total5)


const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

function answer(q, w, e){
   return q >= w ? w : q >= e ? e : q
}

console.log(answer(a,b,c))
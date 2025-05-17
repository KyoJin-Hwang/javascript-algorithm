const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr = input[0].split(" ").map(Number);

function answer(n){
    return console.log(Math.min(...n))
}

answer(arr)
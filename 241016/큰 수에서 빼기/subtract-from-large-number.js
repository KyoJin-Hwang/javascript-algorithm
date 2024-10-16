const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let [num0, num1] = input.split(" ")

const max = Math.max(+num0, +num1)
const min = Math.min(+num0, +num1)

console.log(max-min)
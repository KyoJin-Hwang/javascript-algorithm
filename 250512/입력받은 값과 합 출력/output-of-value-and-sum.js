const input = require('fs').readFileSync(0).toString().trim().split(" ").map(el=>Number(el))
const [a, b] = input
console.log(a, b, a+b)
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(el=>Number(el));
const [a, b] = input
console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(a <= b ? 1 : 0)
console.log(a < b ? 1 : 0)
console.log(a == b ? 1 : 0)
console.log(a != b ? 1 : 0)
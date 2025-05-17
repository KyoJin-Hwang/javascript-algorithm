const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// 유클리드 호제법
const gcd = (a,b) => b === 0 ? a : gcd(b, a % b)
const lcm = (a,b) => (a * b) / gcd(a, b)

console.log(lcm(n,m))
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

const gcd = (a,b) => b === 0 ? a : gcd(b, b%a)
const lcm = (a,b) => (a * b) / gcd(a, b)

console.log(lcm(n,m))
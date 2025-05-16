const fs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

const [a,b] = fs

const c = a+b
const d = a-b 

console.log((c/d).toFixed(2))
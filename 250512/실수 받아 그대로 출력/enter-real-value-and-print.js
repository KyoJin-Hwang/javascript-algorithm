const fs = require('fs')
const a = fs.readFileSync(0).toString().trim()

console.log(Number(a).toFixed(2))
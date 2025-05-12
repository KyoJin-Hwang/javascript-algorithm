const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(el=>Number(el))

const [a, b] = num

if(a > b) console.log(a*b)
else console.log(~~(b/a))

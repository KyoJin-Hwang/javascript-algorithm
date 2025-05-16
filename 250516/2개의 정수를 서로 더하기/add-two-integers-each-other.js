const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ')

const [a, b] = num 

const c = ~~a+~~b

console.log(`${c} ${c+~~b}`)
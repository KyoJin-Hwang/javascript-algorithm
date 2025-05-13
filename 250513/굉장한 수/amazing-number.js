const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())

const odd = (input % 2 === 0 && input % 5 === 0)
const even = (input % 2 !== 0 && input % 3 === 0)
if(odd || even) console.log(true)
else console.log(false)
const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

if(num >= 80) console.log('pass')
else console.log(`${80-num} more score`)
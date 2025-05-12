const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

if(num < 0) console.log('ice')
else if(num < 100) console.log('water')
else console.log('vapor')
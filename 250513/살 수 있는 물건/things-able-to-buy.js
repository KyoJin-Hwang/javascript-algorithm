const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

if(3000 <= num) console.log('book')
else if(1000 <= num && 3000 > num) console.log('mask')
else console.log('no')
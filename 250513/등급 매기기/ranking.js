const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

if(num >= 90) console.log('A')
else if(num >= 80) console.log('B')
else if(num >= 70) console.log('C')
else if(num >= 60) console.log('D')
else console.log('F')
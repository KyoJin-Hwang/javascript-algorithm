const fs = require('fs')
const str = fs.readFileSync(0).toString().trim().split(' ')
const [a, b] = str

if(a.length > b.length) console.log(`${a} ${a.length}`)
else if(a.length < b.length) console.log(`${b} ${b.length}`)
else console.log('same')
const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

for(let i = 0; i < num; i++){
    console.log('LeebrosCode')
}
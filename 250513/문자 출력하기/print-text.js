const fs = require('fs')
const str = fs.readFileSync(0).toString().trim()


for(let i = 1; i <= 8; i++){
    if(i === 8) console.log(str.repeat(i))
}



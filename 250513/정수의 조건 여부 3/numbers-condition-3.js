const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())

if(input%13 === 0 || input%19 === 0){
    console.log('True')
}else{
    console.log('False')
}


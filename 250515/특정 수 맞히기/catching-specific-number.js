const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').mpa(Number)

let idx = 0 

while(input[idx] !== 25){
    if(input[idx] < 25) console.log('Higher')
    else if(input[idx] > 25) console.log('Lower')
}


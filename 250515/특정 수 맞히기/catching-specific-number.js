const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let idx = 0 

while(input[idx]){
    if(input[idx] < 25) console.log('Higher')
    else if(input[idx] > 25) console.log('Lower')
    else {
        console.log('Good')
        break;
    }
    idx++
}


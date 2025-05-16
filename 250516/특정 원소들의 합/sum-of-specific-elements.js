const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split('\n').map(el=> el.split(' ').map(Number))

let count = 0 

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j <= i; j++){
        count += arr[i][j]
    }
}

console.log(count)
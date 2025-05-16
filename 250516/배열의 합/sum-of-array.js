const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const arr = input.map(el=> el.split(' ').map(Number))

for(let i = 0; i < arr.length; i++){
    let answer = 0
    for(let j = 0; j < arr.length; j++){
        answer += arr[i][j]
    }
    console.log(answer)
}
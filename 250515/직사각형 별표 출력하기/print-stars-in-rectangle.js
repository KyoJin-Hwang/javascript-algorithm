const fs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

const [a, b] = fs

for(let i = 0; i < a; i++){
    let answer = ''
    for(let j = 0; j < b; j++){
        answer += "* "
    }
    console.log(answer)
}
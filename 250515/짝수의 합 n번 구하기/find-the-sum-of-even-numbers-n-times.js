const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = input[0]

for(let i = 1; i<=n; i++){
    let answer = 0
    const [a, b] = input[i].split(' ').map(Number)
    for(let j = a; j <= b; j++){
        if(j % 2 !== 0) continue
        answer += j
    }
    console.log(answer)
}
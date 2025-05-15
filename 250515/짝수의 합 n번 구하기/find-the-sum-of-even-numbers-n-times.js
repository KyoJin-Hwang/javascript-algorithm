const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = input[0]

for(let i = 1; i<=n; i++){
    let answer = 0
    const [a, b] = input[i].split(' ').map(Number)
    for(let j = a+1; j <= b; j+=2){
        answer += j
    }
    console.log(answer)
}
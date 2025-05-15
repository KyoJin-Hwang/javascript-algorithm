const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [a, b] = num
let answer = 0
for(let i = a; i <= b; i++){
    let arr = []
    for(let j = 1; j <= i; j++){
        if(i % j === 0) {
            arr.push(j)
        }
    }
    if(arr.length === 3) answer++
}

console.log(answer)
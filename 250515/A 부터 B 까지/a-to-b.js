const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [a, b] = input

let idx = a
const answer = []

while(b >= idx){
    answer.push(idx) 
    if(idx % 2 === 0) idx += 3
    else idx *= 2
}

console.log(answer.join(' '))
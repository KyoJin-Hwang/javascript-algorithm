const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number)

let answer = []

for(let i of arr){
    if(i % 2 === 0) answer.push(i)
}

console.log(answer.reverse().join(' '))

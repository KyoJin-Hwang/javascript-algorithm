const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let count = 0

for(let i = 1; i <= input; i++){
    let answer = ''
    for(let j = 1; j <= i; j++){
        count++
        answer += `${count} `
    }
    console.log(answer)
}
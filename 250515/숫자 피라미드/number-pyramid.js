const fs = require('fs')
const num = fs.readFileSync(0).toString().trim()

for(let i = 1; i <= ~~num; i++){
    let answer = ""
    for(let j = 0; j < i; j++){
        answer += `${i} `
    }
    console.log(answer)
}
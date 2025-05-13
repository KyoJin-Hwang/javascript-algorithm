const fs = require('fs')
const num = Number(fs.readFileSync(0).toString().trim())

let answer = ""
for(let i = num; i <= 100; i++){
    if(i >= 90) answer += 'A '
    else if(i >= 80) answer += 'B '
    else if(i >= 70) answer += 'C '
    else if(i >= 60) answer += 'D '
    else answer += 'F '
}
console.log(answer)
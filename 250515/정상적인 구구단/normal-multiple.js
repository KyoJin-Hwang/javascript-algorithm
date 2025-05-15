const fs = require('fs')
const num = fs.readFileSync(0).toString().trim()

for(let i = 1; i <= ~~num; i++){
    let answer = ''
    for(let j = 1; j <= ~~num; j++){
        if(j === ~~num) answer += `${i} * ${j} = ${i*j}`
        else answer += `${i} * ${j} = ${i*j}, `
    }
    console.log(answer)
}
    
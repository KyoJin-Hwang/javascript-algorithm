const fs = require('fs')
const num = ~~(fs.readFileSync(0).toString().trim())

let answer = ''
for(let i = num; i <= num*5; i+=num){
    answer += i + ' '
}
console.log(answer)
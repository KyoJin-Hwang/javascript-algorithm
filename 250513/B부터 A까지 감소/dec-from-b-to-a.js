const fs = require('fs')
const num = fs.readFileSync(0).toString().trim().split(' ').map(el=> Number(el))

const [a,b] = num
let answer = ''


for(let i = b; i >= a ; i--){
    answer += i + ' '
}
console.log(answer)
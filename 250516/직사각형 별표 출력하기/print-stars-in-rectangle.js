const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a,b] = input

for(let i = 0; i < a; i++){
    let answer = ""
    for(let j = 0; j < b; j++){
        answer += "* "
    }
    console.log(answer)
}
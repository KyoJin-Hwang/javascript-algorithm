const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [gender, age] = input
let answer = ''

if(age >= 19){
    answer = Number(gender) === 0 ? 'MAN' : 'WOMAN'
}else{
    answer = Number(gender) === 0 ? 'BOY': 'GIRL'
}

console.log(answer)
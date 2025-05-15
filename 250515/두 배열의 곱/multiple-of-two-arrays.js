const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input
  .filter(line => line.trim() !== '')
  .map(line => line.split(' ').map(Number)); 

for(let i = 0; i <= 2; i++){
    let answer = ''
    for(let j = 0; j<=2; j++){
        answer += `${arr[i][j] * arr[i+3][j]} `
    }
    console.log(answer)
}


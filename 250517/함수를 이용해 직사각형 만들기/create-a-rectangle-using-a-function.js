const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);


for(let i = 0; i < n; i++){
    let answer = ''
    for(let j = 0; j < m; j++){
        answer += '1'
    }
    console.log(answer)
}
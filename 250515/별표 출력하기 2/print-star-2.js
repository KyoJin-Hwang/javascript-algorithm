const fs = Number(require('fs').readFileSync(0).toString().trim())

for(let i = fs; i >= 1; i--){
    let answer = ''
    for(let j = i; j >= 1; j--){
        answer += "* "
    }
    console.log(answer)
}
const fs = require('fs').readFileSync(0).toString().trim()

for(let i = 1; i <= ~~fs; i++){
    let arr = []
    for(let j = 1; j <= ~~fs; j++){
        arr.push(j)
    }
    if(i % 2 === 0) arr.reverse()
    console.log(arr.join(''))
}
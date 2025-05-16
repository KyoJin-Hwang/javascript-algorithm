const fs = require("fs");
const n = ~~fs.readFileSync(0).toString().trim();

const arr = []

for(let i = 1; i < n; i++){
    if (n % i === 0) {
      arr.push(i)
    }
}

let sum = arr.reduce((acc,cur)=> acc+cur,0)

console.log(sum === n ? 'P': 'N')




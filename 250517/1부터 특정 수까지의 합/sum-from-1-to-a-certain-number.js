const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function answer(a){
    const result = [...new Array(a)].map((_,i)=> i+1).reduce((acc,cur)=>{
        return acc+cur
    },0)

    return Math.floor(result/10)
}

console.log(answer(n))

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(" ")
const c = Math.floor(10000*b/(a*a))

if(c >= 25){
    console.log(c)
    console.log('Obesity')
}else{
    console.log(c)
}
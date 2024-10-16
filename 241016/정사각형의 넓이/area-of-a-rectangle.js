const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const num = +input

if(num < 5){
    console.log(num*num)
    console.log('tiny')
}else{
    console.log(num*num)
}
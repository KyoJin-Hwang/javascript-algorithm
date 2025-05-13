const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');


const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

if(a > c && b > d) console.log(1)
else console.log(0)
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const count = input[0];              
const numbers = input.slice(1);      

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

const avg = sum / count;

console.log(`${sum} ${avg.toFixed(1)}`);
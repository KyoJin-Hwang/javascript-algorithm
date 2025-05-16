const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split('\n').map(el=> el.split(' ').map(Number))

let count = 0;

arr.forEach(row => {
  count += row.reduce((acc, num) => acc + (num % 5 === 0 ? 1 : 0), 0);
});

console.log(count);
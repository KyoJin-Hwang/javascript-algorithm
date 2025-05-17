const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let num = 1;

for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    row += num + ' ';
    num++;
    if (num > 9) num = 1; 
  }
  console.log(row);
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = ["apple", "banana", "grape", "blueberry", "orange"];

let count = 0;

arr.forEach(word => {
  if (word[2] === input || word[3] === input) {
    console.log(word);
    count++;
  }
});

console.log(count);
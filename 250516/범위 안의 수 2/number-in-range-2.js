const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const { sum, count } = input.reduce(
  (acc, cur) => {
    if (cur >= 0 && cur <= 200) {
      acc.sum += cur;
      acc.count += 1;
    }
    return acc;
  },
  { sum: 0, count: 0 }
);

console.log(sum, (sum / count).toFixed(1));
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const first = input.slice(1, 1 + N).map(line => line.split(' ').map(Number));
const second = input.slice(1 + N).map(line => line.split(' ').map(Number));
const result = [];

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(first[i][j] === second[i][j] ? 0 : 1);
  }
  result.push(row);
}

// 출력
result.forEach(row => console.log(row.join(' ')));
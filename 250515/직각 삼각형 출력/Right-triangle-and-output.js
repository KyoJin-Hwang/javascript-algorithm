const N = ~~require('fs').readFileSync(0).toString().trim()

for (let i = 1; i <= N; i++) {
  let line = '';
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += '*';
  }
  console.log(line);
}
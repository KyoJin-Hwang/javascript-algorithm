const n = Number(require('fs').readFileSync(0).toString().trim());

let result = [];

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
        const val = j % 2 === 0 ? i + 1 : n - i;
        row += val;
    }
    result.push(row);
}

console.log(result.join('\n'));
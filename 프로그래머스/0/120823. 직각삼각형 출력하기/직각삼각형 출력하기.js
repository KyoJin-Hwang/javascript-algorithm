const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    let logStr = ''
    for(let i = 0 ; i < num; i++) {
        for(let j = 0 ; j <= i; j++) {
            logStr+='*'
        }
        logStr+='\n'
    }
    console.log(logStr)
});

// 설명 
// num 이라는 변수생성 => input 0번째 배열을 Number로 변환 
// 1. logStr = "" 빈글자 변수 생성 ( 값은 변경되니 let )
// 2. 바깥쪽 반복문은 입력받은 숫자만큼 반복한다 줄반복을 위하여 
// 3. 안쪽 반복문 0, 1, 2 까지 해서 별을 추가해준다 

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

// 값을 더해준다 
// split 하여 1의만 뽑아준다.
// arr에 푸쉬한다 
for(let i = 2; i < 10; i++){
    let sum = input[i-2] + input[i-1]
    
    if(sum > 9) {
        input.push(~~(sum.toString().split('')[1]))
    }else{
        input.push(sum) 
    }
}

console.log(input.join(" "))
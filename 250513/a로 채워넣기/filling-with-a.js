const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

// slice 방식
// console.log(input.slice(0,1)+'a'+input.slice(2,input.length-2)+'a'+input.slice(input.length-1))

// 배열 방식 
let answer = input.split('')
answer[1] = 'a'
answer[answer.length-2] = 'a'
console.log(answer.join(''))



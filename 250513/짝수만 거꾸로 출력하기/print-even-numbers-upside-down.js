const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number)

// filter 
console.log(arr.filter(el=> el % 2 === 0).reverse().join(' '))

// 방법 1
// let answer = []

// for(let i of arr){
//     if(i % 2 === 0) answer.push(i)
// }

// console.log(answer.reverse().join(' '))

const fs = require('fs')

const arr = fs.readFileSync(0).toString().trim().split('\n')

// for문 사용
// for(let i = 0; i < arr.length; i++){
//     let answer = ''
//     const list = arr[i].split(' ').map(Number)
//     for(let j = 0; j < list.length; j++){
//         answer += `${list[j] * 3} `
//     }
//     console.log(answer)
// }



// map 
const answer = arr.map((el)=>{
    return el.split(' ').map((el2)=> ~~el2 * 3)
})

answer.map((el)=> console.log(el.join(' ')))

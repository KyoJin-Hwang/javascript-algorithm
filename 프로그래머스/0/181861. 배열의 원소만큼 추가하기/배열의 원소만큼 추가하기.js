// function solution(arr) {
//     let answer = [];

//     arr.map((el)=>{
//         for(let i = 0; i<el; i++){
//             answer.push(el)
//         }
//     })

//     return answer;
// }


function solution(arr) {
    return arr.reduce((list, num) => [...list, ...Array(num).fill(num)], []);
}
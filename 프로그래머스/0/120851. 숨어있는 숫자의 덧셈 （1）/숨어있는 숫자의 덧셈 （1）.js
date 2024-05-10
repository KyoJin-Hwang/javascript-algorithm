function solution(my_string) {
    let answer = 0;
    my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)
    return answer;
}

// 전개연산자
// function solution(my_string) {
//     return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
// }

// 정규식 방법 
// function solution(my_string) {
//     const answer = my_string.replace(/[^0-9]/g, '')
//                             .split('')
//                             .reduce((acc, curr) => acc + Number(curr), 0);
//     return answer;
// }
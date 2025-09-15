// 내 풀이
// function solution(s1, s2) {
//     let answer = 0    
//     for(let i = 0; i < s1.length; i++){
//         if(s2.includes(s1[i])){
//             answer++
//         }
//     }
//     return answer
// }


3
4
5
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

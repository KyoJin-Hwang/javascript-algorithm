// 내 풀이
// function solution(my_string, letter) {
//     let answer = [...my_string].filter((el)=> el !== letter).join('')
//     return answer;
// }

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
function solution(my_string) {
    let answer = 0;
    my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)
    return answer;
}

// 전개연산자
// function solution(my_string) {
//     return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
// }

// 설명 
// 1. my_string 을 split 으로 각 배열로 쪼갠다. 
// 2. map 함수를 이용하여 순회한다. 
// 3. 순회 도중 isNaN을 활용하여 숫자인지 글자인지 판별 후 answer에 누적하여 return 해준다. 
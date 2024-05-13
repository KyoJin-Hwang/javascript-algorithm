function solution(array) {
    let answer = [];
    let num = 0;
    for(let i of array){
        num = num > i ? num : i
    }
    answer.push(num)
    answer.push(array.indexOf(num,0))
    return answer
}

// 이게 조금 더 이쁜 코드^
// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.indexOf(max)];
// }
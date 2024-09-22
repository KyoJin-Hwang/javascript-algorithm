function solution(array) {
    let answer = [];
    let num = 0;
    for(let i of array){
        num = num > i ? num : i
    }
    answer.push(num)
    answer.push(array.indexOf(num))
    return answer
}

// 설명
// answer 빈배열 변수 및 num 0 변수 생성
// 1. for of 문으로 array 를 순회한다. 
// 2. 큰값 끼리 비교하여 num 에 계속 추가해주고 마지막에 가장 큰값을 answer 에 push 한다. 
// 3. 그리고 가장 큰값의 num 은 array.indexOf 를 활용하여 인덱스 위치를 찾는다. 

// 배열에 요소가 너무 많은면 실패하거나 잘못된 결과를 가져올 수 있다. 
// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.indexOf(max)];
// }
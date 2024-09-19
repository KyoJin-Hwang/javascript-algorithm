function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

// 설명
// 1. slice 배열함수를 사용하여 num1 부터 num2+1 의 이전 값 전까지 배열을 잘라준다. 
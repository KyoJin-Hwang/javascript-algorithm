function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// 설명
// 1. Math.sqrt 함수를 이용하여 n의 제곱을 구해준다. 
// 2. 삼항연산자를 사용하여 1에서 구한 제곱을 % 1 하여 나머지가 0이 되면 1 아니면 2로 return 해준다.
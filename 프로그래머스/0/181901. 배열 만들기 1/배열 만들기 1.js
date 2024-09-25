function solution(n, k) {
    let answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    // answer = Array.from(Array(Math.floor(n/k)), (el,idx)=> k * (idx+1) )
    return answer;
}

// for 문 설명 
// 1. i 는 k의 배수 숫자 로 시작되고 
// 2. i 는 n보다 작거나 같아야한다 또한 i의 증감은 +=k 로 k의 배수만큼 숫자가 증가하게 만든다.
// 3. answer 에 push 해준다. 

// Array from 화살표함수 
// 1. Array.from 배열초기화 및 Array(Math.floor(n/k))로 배열 length를 정해준다. 
// 2. idx 를 사용하여 k (배수) * idx+1 을 곱하여 배수가 증가 할 수 있게 만들어준다.
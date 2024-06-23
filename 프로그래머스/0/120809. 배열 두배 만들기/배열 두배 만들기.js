// 1
function solution(numbers) {
    const answer = numbers.map(x=>x*2);
    return answer;
}

// 2
// function solution(numbers) {
//    return numbers.reduce((a, b) => [...a, b * 2], []);
// }


// 첫번째 설명
// 1. numbers 배열을 map함수로 곱하기 2 하여 두배로 만든 새로운 배열을 만들어서 리턴한다. 

// 첫번째 Method 
// 1. Array.map : 배열을 순회해서 각 요소를 콜백함수로 적용해서 처리해 모은 새로운 배열을 반환한다. 
// 콜백함수 : 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것이다. 

// 두번째 설명
// 1. reduce 를 사용하여 현재값에 * 2 를 하면서 순회한다.  
// 2. 누적된결과값을 , 초기값인 빈배열에 넣어준후 리턴한다. 

// 두번째 Method
// 1. Array.reduce : 배열의 각 요소를 순회하며 콜백함수의 실행 값을 누적하여 하나의 결과값을 반환한다.

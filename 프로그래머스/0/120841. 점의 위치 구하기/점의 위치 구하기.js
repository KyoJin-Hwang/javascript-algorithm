function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

// 설명 
// 1. num, num2 구조분해할당
// 2. check는 음수 양수 체크를 위한 변수 
// 3. num 삼항연산자 기준으로 x 의 양수 음수를 나눠준다. 
//    x 양수 : 1,4  x 음수 : 3, 2 
// 4. check 삼항연산자 true 일때 양수 false 일때 음수  
const solution = (num1,num2)=> Math.trunc((num1/num2)*1000)

// 설명
// 1. 나누기로 인한 소수점이 생긴다
// 2. Math.trunc로 num1 과 num2를 나눠준다 
// 3. 나눠준 값에 1000을 곱해준다. 

// Method 
// 1. Math.trunc : 소수점을 제거하고 정수만 반환한다.

function solution(n, k) {
    
    return n*12000 + k*2000 - parseInt(n/10)*2000
}

// 설명
// 1. 양꼬치 인분수와 가격을 곱한다 
// 2. 콜라의 갯수와 가격을 곱한다
// 3. 양꼬치와 콜라의 가격을 더하고 마지막으로 서비스콜라 금액만큼 빼서 총 결제금액을 return 한다 

// Method
// 1. parseInt : 소수점은 정수만 사용하고, String을 Number로 받기위해서 사용 

// ~~ 사용 가능 
// 장점은 성능이 좋아진다.
// 단점은 코드가 길어질때 협업이 힘들다 

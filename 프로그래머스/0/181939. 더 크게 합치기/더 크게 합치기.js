function solution(a, b) {
    const num1 = parseInt(a+""+b)
    const num2 = parseInt(b+""+a)
    
    return num1 >= num2 ? num1 : num2;
}

// 설명 
// parseInt 로 a b, b a 를 합쳐준다.  "" 빈값은 서로 더해지는 오류를 해결하기위함 
// 삼항연사자로 더 높은것을 return 
function solution(a, b) {
    let num1 = parseInt(a+""+b);
    console.log(parseInt(a+b))
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}

// 설명
// parseInt 로 정수만 반환하고 빈값을 추가한 이유는 a+b 가 되어 93이 나올수 있기떄문에 
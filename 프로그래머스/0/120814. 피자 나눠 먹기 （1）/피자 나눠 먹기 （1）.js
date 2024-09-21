function solution(n) {
    return n % 7 === 0 ? Math.floor(n/7) : Math.floor(n/7) + 1
}

// 설명 
// 삼항연산자로 첫번째는 피자 7조각에 딱 나눠서 나머지가없을때 
// 두번째는 나머지가 있을때 floor 함수로 버림을 해주고 +1 을해준다. 
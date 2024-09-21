function solution(money) {
    const americano = 5500; 
    const glass = Math.floor(money / americano);
    const change = money % americano;
    const answer = [glass, change];
    return answer;
}

// 설명
// 1. americano 5500원 변수생성 
// 2. glass 변수생성 => 전체 Money에서 americano 값을 나누고 소수점이 생길수 있으므로 floor 함수사용
// 3. change 변수생성 => 전체 Money 에서 americano 를 나눈 나머지 값을 저장 
// 4. answer 빈배열 안에 glass, change를 넣어준 이후 return 한다. 
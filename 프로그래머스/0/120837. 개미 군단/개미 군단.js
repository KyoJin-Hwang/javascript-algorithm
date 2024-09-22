function solution(hp) {
    const general = 5
    const soldier = 3 
    const work = 1 
    let answer = 0 
    
    answer = Math.floor(hp / general)
    hp = hp % general 
    
    answer += Math.floor(hp / soldier)
    hp = hp % soldier 
    
    answer += hp / work 
    
    return answer;
}

// 설명 
// 1. 장군개미, 병정개미, 일개미를 변수로 저장한다.
// 2. result 값을 0으로 하여 변수저장 
// 3. floor 함수를 이용하여 소수점 제거를 한다. 
// 4. 각 개미 별로 hp 값을 나누기를 하여 answer 값을 축적한다. 
// 5. 이후 hp 는 hp와 공격력이 높은개미로부터 하나씩 나눈 나머지를 넣어준다.
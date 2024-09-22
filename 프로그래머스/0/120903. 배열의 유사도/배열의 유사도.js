function solution(s1, s2) {
    let answer = 0;
    answer = s1.filter((e) => s2.includes(e)).length
    return answer;
}

// 설명 
// answer 초기값 0 변수 생성
// s1 배열을 filter 활용하여 배열 순회를 하고 s2.includes에서 s1의 e 값이 같은것만 filter 후 
// filter 된 배열의 길이만큼 answer에 저장 
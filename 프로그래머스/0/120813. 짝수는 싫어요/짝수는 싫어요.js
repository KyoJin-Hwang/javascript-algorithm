function solution(n) {
    const answers = [];
    for (let i = 1; i <= n; i+=2) answers.push(i)
    return answers;
}

// 설명
// 1. 빈배열을 선언 
// 2. 1부터 시작하는 for문으로  +=2 로 홀수 만큼 돌려준다. 그리고 n보다 작거나 같게하여 빈배열에 값추가

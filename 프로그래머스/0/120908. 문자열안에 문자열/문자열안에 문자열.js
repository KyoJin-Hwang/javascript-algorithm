function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

// 설명
// indexOf로 str1을 검수해 str2을 포함한다면 1 포함하지않는다면 2로 삼항연산자 
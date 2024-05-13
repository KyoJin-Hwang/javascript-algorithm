function solution(s1, s2) {
    let answer = 0;
    answer = s1.filter((e) => s2.includes(e)).length
    return answer;
}
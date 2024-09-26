function solution(num, n) {
    let answer = 0;
    answer = num % n === 0 ? 1 : 0
    return answer;
}
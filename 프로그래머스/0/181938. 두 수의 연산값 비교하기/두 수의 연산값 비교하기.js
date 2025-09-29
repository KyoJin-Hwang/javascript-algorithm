function solution(a, b) {
    let answer = 0;
    let str = +`${a}${b}`
    answer = 2 * a * b
    return str > answer ? str : answer;
}
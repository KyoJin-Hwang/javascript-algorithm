function solution(a, b) {
    let answer = 0;
    const ab = ~~[a,b].join("")
    const abDouble = 2 * a * b
    answer = ab >= abDouble ? ab : abDouble 
    return answer;
}
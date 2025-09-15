function solution(money) {
    let answer = [];
    let ice = 5500 
    let a = Math.floor(money/ice)
    let b = money - (ice * a)
    answer.push(a)
    answer.push(b)
    return answer;
}
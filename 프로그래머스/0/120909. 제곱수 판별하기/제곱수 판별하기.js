function solution(n) {
    let sqrt = Math.sqrt(n)
    let answer = n % sqrt === 0 ? 1 : 2    
    return answer;
}
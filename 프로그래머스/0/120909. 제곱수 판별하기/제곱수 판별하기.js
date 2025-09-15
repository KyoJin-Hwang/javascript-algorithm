function solution(n) {
    let sqrt = Math.sqrt(n)
    
    return Number.isInteger(sqrt) ? 1 : 2;
}
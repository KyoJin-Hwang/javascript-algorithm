function solution(a, b) {
    const result1 = String(a)+String(b)
    const result2 = String(b)+String(a)
    
    return result1>=result2 ? Number(result1): Number(result2)
}
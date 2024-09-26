function solution(a, b, flag) {
    const flagB = flag ? -b : b
    return a - flagB;
}
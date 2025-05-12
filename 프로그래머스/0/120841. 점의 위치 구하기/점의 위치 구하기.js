function solution(dot) {
    const [num1, num2] = dot
    const check = num1 * num2 
    return num1 > 0 ? 
        check > 0 ? 1 : 4 
        : check > 0 ? 3 : 2;
}
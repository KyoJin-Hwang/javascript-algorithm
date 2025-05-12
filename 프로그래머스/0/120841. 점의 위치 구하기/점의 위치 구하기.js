function solution(dot) {
    const [num1, num2] = dot
    const check = num1 * num2 > 0 
    return num1 > 0 ? 
        check ? 1 : 4 
        : check ? 3 : 2;
}
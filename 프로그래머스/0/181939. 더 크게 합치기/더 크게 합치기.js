function solution(a, b) {
    const num1 = parseInt(a+""+b)
    const num2 = parseInt(b+""+a)
    
    return num1 >= num2 ? num1 : num2;
}
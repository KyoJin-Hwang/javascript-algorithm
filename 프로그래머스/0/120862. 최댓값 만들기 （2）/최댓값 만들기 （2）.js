function solution(numbers) {
    let size = numbers.length;
    
    numbers.sort((a,b) => a - b);
    
    return Math.max(numbers[0] * numbers[1], numbers[size - 1] * numbers[size- 2]);
}
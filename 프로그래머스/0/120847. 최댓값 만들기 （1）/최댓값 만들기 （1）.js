function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const max = numbers[numbers.length - 1] * numbers[numbers.length - 2]; 
    return max
}
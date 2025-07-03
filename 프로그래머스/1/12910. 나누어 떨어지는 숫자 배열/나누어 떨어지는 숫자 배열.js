function solution(arr, divisor) {
  const result = arr.filter(num => num % divisor === 0);
  
  if (result.length === 0) return [-1];
  
  return result.sort((a, b) => a - b);
}
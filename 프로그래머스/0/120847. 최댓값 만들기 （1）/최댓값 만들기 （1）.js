function solution(numbers) {
  const [first, second] = numbers.sort((a, b) => b - a);
  return first * second;
}
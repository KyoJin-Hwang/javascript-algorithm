function solution(numbers) {
    numbers.sort((a, b) => {
  const ab = a.toString() + b.toString();
  const ba = b.toString() + a.toString();
  return ba - ab;
});
    return +numbers.join('')=== 0? "0": numbers.join('');
}
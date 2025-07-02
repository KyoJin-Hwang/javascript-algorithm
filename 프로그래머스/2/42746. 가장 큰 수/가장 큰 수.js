function solution(numbers) {
let answer = numbers.sort((a, b) => {
  const ab = a.toString() + b.toString();
  const ba = b.toString() + a.toString();
  return ba - ab;
}).join('');
    return answer[0] === '0' ? '0' : answer
}
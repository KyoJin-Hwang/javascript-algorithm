function solution(n) {
  return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

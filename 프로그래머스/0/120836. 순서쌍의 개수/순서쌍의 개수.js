function solution(n) {
  let count = 0;
  const sqrt = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      if (i * i === n) count += 1;   // 제곱수
      else count += 2;               // 비제곱수
    }
  }

  return count;
}
function solution(n) {
  const MOD = 1234567;
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % MOD;
  }

  return fib[n];
}

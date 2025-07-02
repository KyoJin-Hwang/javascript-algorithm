function solution(numbers) {
  const numberArr = numbers.split("");
  const numberSet = new Set();

  // 순열로 가능한 숫자 모두 조합
  function getPermutations(arr, current = "") {
    if (current.length > 0) numberSet.add(Number(current));

    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      getPermutations(rest, current + arr[i]);
    }
  }

  getPermutations(numberArr);

  // 소수 판별 함수
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 소수 개수 카운트
  let count = 0;
  numberSet.forEach(num => {
    if (isPrime(num)) count++;
  });

  return count;
}
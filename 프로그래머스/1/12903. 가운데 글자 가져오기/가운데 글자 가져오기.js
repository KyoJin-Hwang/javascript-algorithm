function solution(s) {
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    // 짝수면 가운데 2글자
    return s.slice(mid - 1, mid + 1);
  } else {
    // 홀수면 가운데 1글자
    return s.charAt(mid);
  }
}
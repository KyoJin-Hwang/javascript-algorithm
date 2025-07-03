function solution(n, arr1, arr2) {
    return arr1.map((a, i) => {
  const line = (a | arr2[i]).toString(2).padStart(n, '0');
  return [...line].map(c => (c === '1' ? '#' : ' ')).join('');
});
}
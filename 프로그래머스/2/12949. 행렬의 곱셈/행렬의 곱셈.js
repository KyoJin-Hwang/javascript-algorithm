function solution(arr1, arr2) {
  const n = arr1.length;         // arr1의 행 개수
  const m = arr2[0].length;      // arr2의 열 개수
  const k = arr2.length;         // arr1의 열 = arr2의 행

  // 결과 행렬 초기화 (n × m, 0으로 채움)
  const result = Array.from({ length: n }, () => Array(m).fill(0));

  // 행렬 곱셈
  for (let i = 0; i < n; i++) {
    for (let x = 0; x < k; x++) {
      for (let j = 0; j < m; j++) {
        result[i][j] += arr1[i][x] * arr2[x][j];
      }
    }
  }

  return result;
}
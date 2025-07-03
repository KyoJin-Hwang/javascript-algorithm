function solution(arr) {
  if (arr.length === 1) return [-1]; // 배열에 하나밖에 없으면 -1 리턴

  const min = Math.min(...arr); // 가장 작은 값 찾기
  return arr.filter((num) => num !== min); // 가장 작은 값 제거
}
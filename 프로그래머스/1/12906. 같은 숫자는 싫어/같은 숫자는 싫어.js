function solution(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== result[result.length - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
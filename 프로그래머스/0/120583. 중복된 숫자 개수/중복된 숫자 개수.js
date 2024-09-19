function solution(array, n) {
  return array.filter(item => item === n).length;
}

// 설명
// 1. filter 로 배열을 순회하여 n과 같은 값만 반환한다. 
// 2. filter로 새롭게 반환한 배열의 길이를 return 해준다. 
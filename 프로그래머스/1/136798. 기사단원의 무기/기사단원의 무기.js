function solution(number, limit, power) {
    // 약수 저장할 배열 ( idx 맞추기위한 +1 )
  const counts = Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      counts[j]++;  // i의 배수에 대해 약수 개수 추가
    }
  }

  let answer = 0;
  
  // 0 번째 인덱스는 0 k는 1부터시작 
  for (let k = 1; k <= number; k++) {
    answer += counts[k] > limit ? power : counts[k];
  }

  return answer;
}
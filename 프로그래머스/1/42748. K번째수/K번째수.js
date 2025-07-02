function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];         // i, j, k 추출
    const sliced = array.slice(start - 1, end);  // i-1부터 j까지 자름
    const sorted = sliced.sort((a, b) => a - b); // 오름차순 정렬
    answer.push(sorted[k - 1]);                  // k번째 값 push
  }

  return answer;
}
function solution(numbers, target) {
  let count = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }

    dfs(index + 1, sum + numbers[index]); // + 선택
    dfs(index + 1, sum - numbers[index]); // - 선택
  }

  dfs(0, 0);
  return count;
}
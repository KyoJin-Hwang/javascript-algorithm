function solution(progresses, speeds) {
  const daysToComplete = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  const result = [];
  let prev = daysToComplete[0];
  let count = 1;

  for (let i = 1; i < daysToComplete.length; i++) {
    const current = daysToComplete[i];

    if (current <= prev) {
      // 이전 기능 배포일보다 빨리 끝났으므로 함께 배포 가능
      count++;
    } else {
      // 새 배포 시작
      result.push(count);
      prev = current;
      count = 1;
    }
  }

  result.push(count); // 마지막 묶음 배포
  return result;
}
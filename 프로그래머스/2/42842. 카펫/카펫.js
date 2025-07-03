function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= total; height++) {
    const width = total / height;

    // 가로 * 세로가 total 이면서, 가로가 정수일 때
    if (Number.isInteger(width)) {
      const innerWidth = width - 2;
      const innerHeight = height - 2;

      if (innerWidth * innerHeight === yellow) {
        return [width, height];
      }
    }
  }
}
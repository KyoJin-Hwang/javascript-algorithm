function solution(participant, completion) {
  const map = new Map();

  // 1) 참가자 이름 세기
  participant.forEach(name => {
    map.set(name, (map.get(name) || 0) + 1);
  });

  // 2) 완주자 이름 빼기
  completion.forEach(name => {
    map.set(name, map.get(name) - 1);
  });

  // 3) 값이 1 남아 있는 사람 찾기
  for (const [name, count] of map) {
    if (count > 0) return name;
  }
}
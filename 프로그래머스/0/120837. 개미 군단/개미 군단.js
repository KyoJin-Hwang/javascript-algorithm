function solution(hp) {
  const generals = Math.floor(hp / 5);
  const soldiers = Math.floor((hp % 5) / 3);
  const workers = (hp % 5) % 3;
  return generals + soldiers + workers;
}
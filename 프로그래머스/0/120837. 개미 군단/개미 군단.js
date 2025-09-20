function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp % 5) / 3);
  const third = (hp % 5) % 3;
  return first + second + third;
}
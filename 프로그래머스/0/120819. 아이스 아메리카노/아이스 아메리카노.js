function solution(money) {
  const coffee = 5500;
  const count = Math.floor(money / coffee);
  const change = money % coffee;
  return [count, change];
}
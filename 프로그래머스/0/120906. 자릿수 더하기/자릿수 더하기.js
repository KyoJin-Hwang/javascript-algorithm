function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 설명 
// 1234 Number type을 string 으로 타입 변환 
// split 으로 배열 나눔 
// reduce 에서 cur 을 Number type으로 변화하여 누적된값을 더해서 return 
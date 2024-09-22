function solution(n, t) {
  for ( let i = 1; i <= t; i++ ) {
    n *= 2
  }
    return n;
}

// 설명 
// let 은 1부터 시작하며 t 까지 반복한다 
// n에다가 *= 2 로 두배만큼 값을 넣어준후 return 

// reduce 활용
// function solution(n, t) {
//   return [...Array(t)].reduce((acc) => acc * 2, n);
// }
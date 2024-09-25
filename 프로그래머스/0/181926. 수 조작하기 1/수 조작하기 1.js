const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => {
    return operations[op](prev); 
  }, n); 
}

// 설명
// 객체를 선언하여 각규칙에 맞는 함수를선언한다 
// reduce 를 사용하여 operations에 맞는 idx (control되는)에 함수를 가져와서 사용하여 더해준다. 
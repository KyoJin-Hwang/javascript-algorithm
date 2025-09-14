function solution(numbers) {    
    let avg = numbers.reduce((acc, cur, idx, arr) => {
    acc += cur; 
    if (idx === arr.length - 1) {
      return acc / arr.length; // 마지막 요소에서 평균 반환
    }
    return acc;
  }, 0);
    
    return avg;
}
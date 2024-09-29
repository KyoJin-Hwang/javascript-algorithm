function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
    
  arr.splice(idx, 1);
    
  return arr
}
function solution(absolutes, signs, answer = 0) {
   return absolutes.reduce((acc, cur, i) => acc + (cur * (signs[i] ? 1 : -1)), 0);
    
}
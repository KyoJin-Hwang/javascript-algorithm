function solution(n, k) {
    let answer = [];
    answer = Array.from(Array(Math.floor(n/k)), (el,idx)=> k * (idx+1) )
    return answer;
}
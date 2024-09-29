function solution(a, b) {
    let answer = 0;
    // for문 활용 ( 가장 빠름 )
    for(let i = 0; i < a.length; i++){
        answer += a[i] * b[i]
    }
    return answer;
    
    // map 활용
    // a.map((el,idx) => answer += el * b[idx] )
    // return answer;
    
    // reduce 활용
    // return a.reduce((acc,cur,idx) => acc + (cur * b[idx]), 0)
}
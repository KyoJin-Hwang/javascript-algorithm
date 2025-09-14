function solution(n) {
    let answer = 0
    
    for(let i = n; i >= 1; i-=7){
        answer++
    }
    return answer;
}
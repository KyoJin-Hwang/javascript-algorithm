function solution(x, n, answer = []) {
    for(let i = 1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}
function solution(n) {
    let answer = 0
    const str = n.toString()
    for(const a of str){
        answer += ~~a;
    }
    return answer;
}
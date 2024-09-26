function solution(my_string, k) {
    let answer = ""
    for(let i of Array(k).fill(0)){
        answer += my_string
    }
    return answer;
}
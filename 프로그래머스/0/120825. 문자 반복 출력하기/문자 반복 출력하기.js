function solution(my_string, n) {
    let answer = ""
    for(const text of my_string.split("")){
        answer += text.repeat(n)
    }
    return answer
}
function solution(my_string, n) {
    let answer = [...my_string].map((el)=> el.repeat(n)).join('')
    return answer;
}
function solution(my_string, letter) {
    let answer = [...my_string].filter((el)=> el !== letter).join('')
    
    return answer;
}
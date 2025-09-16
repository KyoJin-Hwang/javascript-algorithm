function solution(my_string) {
    let answer = my_string.replaceAll(/[aeiou]/gi, '');
    return answer;
}
function solution(numbers, n) {
    let answer = 0;
    answer =  numbers.reduce((acc, cur)=> acc > n ? acc : acc+cur)
    return answer;
}
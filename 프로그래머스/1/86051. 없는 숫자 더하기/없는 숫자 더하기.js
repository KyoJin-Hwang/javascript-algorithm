function solution(numbers, answer = 0) {
    for(let i = 0; i < 10; i++){
        numbers.includes(i)  ? i : answer += i
        
    }
    return answer;
}
function solution(array, height) {
    let answer = 0;
    for(const num of array){
        answer += num > height ? 1 : 0
    }
    return answer;
}
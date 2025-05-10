function solution(num_list) {
    const answer = new Array(2).fill(0)
    console.log(answer)
    for(const num of num_list){
        if(num % 2 === 0) answer[0] += 1
        else answer[1] += 1
    }
    return answer;
}
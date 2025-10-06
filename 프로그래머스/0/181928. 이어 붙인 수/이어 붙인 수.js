function solution(num_list) {
    let answer = 0;
    let odd = ''
    let even = ''
    for(let num of num_list){
        if(num % 2 === 0) even += num
        else odd += num
    }
    answer = +odd + +even
    return answer;
}
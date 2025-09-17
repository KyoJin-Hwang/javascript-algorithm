function solution(num_list) {
    let answer = []
    let even = 0
    let odd = 0 
    

    for(let num of num_list){
        if(num % 2 === 0) even++
        else odd++
    }
    
    answer[0] = even
    answer[1] = odd
    
    return answer;
}
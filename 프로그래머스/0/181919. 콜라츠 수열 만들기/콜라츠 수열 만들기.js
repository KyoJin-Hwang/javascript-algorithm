function solution(n) {
    var answer = [];
    let x = n
    while (x !== 1){
        if (x % 2 === 0){ 
            answer.push(x)
            x = x / 2
        }else{ 
            answer.push(x)
            x = 3 * x + 1
        }   
    }
    answer.push(1)
    return answer
}
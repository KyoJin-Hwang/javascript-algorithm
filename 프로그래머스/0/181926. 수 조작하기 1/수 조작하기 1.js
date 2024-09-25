function solution(n, control) {
    let answer = 0;
    [...control].map((el)=> {
        if(el === 'w'){
            n += 1 
        }else if(el === 's'){
            n -= 1 
        }else if(el === 'd'){
            n += 10
        }else{
            n -= 10
        }
        return answer = n 
    })
    return answer;
}
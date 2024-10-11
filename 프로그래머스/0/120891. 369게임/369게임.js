function solution(order) {
    let answer = 0;
    
    order.toString().split('').map((el)=> {
        if(el === '3' || el === '6' || el === '9' )answer += 1
    })
    return answer;
}
function solution(price) {
    let answer = 0
    const a = 100000
    const b = 300000
    const c = 500000
    
    if(price >= c) {
      answer += price * 0.2  
    } 
    else if(price >= b) {
      answer += price * 0.1  
    } 
    else if(price >= a) {
      answer += price * 0.05  
    } 
    console.log(price , answer, price - answer)
    return ~~(price - answer)
}
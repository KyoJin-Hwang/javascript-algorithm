function solution(price, money, count) {
    let acc = 0
    
    for(let i =1; i <= count; i++){
        acc += price * i 
         
    }
    
    return Math.max(acc - money, 0);
}
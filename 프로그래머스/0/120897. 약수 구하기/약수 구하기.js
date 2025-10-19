function solution(n){
    let arr =[]
    for(divisor=1; divisor<=n; divisor++){
        if(n%divisor===0){
            arr.push(divisor)
        }
    }
    return arr
}
function solution(a, b) {
    let answer = 0;
    if(a < b){
        for(let i= a; i <= b; i++){
            answer += i
        }
    }else if(a > b){
        console.log('b')
        for(let j= b; j <= a; j++){
            answer += j
        }
    }else{
        console.log('c')
        answer = a
    }
    return answer;
}
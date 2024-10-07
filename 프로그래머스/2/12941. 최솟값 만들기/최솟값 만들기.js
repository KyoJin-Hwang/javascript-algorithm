function solution(A,B){
    let answer = 0
    A.sort((a,b)=> a - b)
    B.sort((a,b)=> b - a)

    answer = A.reduce((acc,cur,idx)=> acc+(cur*B[idx]) ,answer)
    
    return answer;
}
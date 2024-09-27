function solution(n, answer = 0){
    
    return +(n+"").split('').reduce((a, c)=> a+ +c, 0)
}
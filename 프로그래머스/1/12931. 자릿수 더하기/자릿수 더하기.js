function solution(n, answer = 0){
    answer = String(n).split('').reduce((a, c)=> a+ +c, 0)
    return +answer;
}
function solution(x) {
    const hasard = x.toString().split('').map(Number).reduce((a,b)=> a+b, 0)
    return x % hasard === 0 ? true: false ;
}
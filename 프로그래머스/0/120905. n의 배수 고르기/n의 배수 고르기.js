function solution(n, numlist) {
    let answer = [];
    answer = numlist.filter((el)=>el % n === 0)
    return answer;
}
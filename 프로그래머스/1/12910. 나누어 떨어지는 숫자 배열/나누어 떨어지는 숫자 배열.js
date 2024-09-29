function solution(arr, divisor, answer = []) {
     
    answer = arr.filter((el) => el % divisor === 0).sort((a,b)=> a-b)
       
    return !answer.length ? [-1] : answer;
}
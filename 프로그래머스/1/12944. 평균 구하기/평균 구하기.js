function solution(arr, answer = 0) {
    answer = arr.reduce((acc, cur)=> acc + cur ,0)
    return answer/arr.length;
}
function solution(arr, answer = []) {
    return arr.filter((val,index) => val != arr[index+1]);
}
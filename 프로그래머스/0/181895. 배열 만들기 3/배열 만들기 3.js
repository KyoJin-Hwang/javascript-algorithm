function solution(arr, intervals) {
    let answer = []
    for(let i = 0; i < intervals.length; i++){
         let start = intervals[i][0];
        let end = intervals[i][1];
        answer = answer.concat(arr.slice(start, end + 1)); 
    }
    return answer;
}
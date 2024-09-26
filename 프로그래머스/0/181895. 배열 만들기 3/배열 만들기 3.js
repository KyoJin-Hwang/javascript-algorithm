function solution(arr, intervals) {
    let answer = []
    for(let i = 0; i < intervals.length; i++){
         let start = intervals[i][0];
        let end = intervals[i][1];
        answer = answer.concat(arr.slice(start, end + 1)); 
    }
    return answer;
}

// 구조분해할당으로 풀이한 간단 풀이식

// function solution(arr, intervals) {
//     const [[a,b],[c,d]] = intervals;

//     return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
// }
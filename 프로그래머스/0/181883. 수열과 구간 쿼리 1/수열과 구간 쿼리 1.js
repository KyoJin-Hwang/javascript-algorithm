// function solution(arr, queries) {
//     let answer = []
//     for(let i = 0; i < queries.length; i++){
//         for(let j = 0; j < queries[i].length; j++){
        
//         answer = arr.map((el,idx) => {
//             idx === queries[i][j] ? el+1 : el
//         })
//         }
//     }
//     return answer
// }

function solution(arr, queries) {
    let answer = [...arr]; 
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i]; 
        for (let j = start; j <= end; j++) { 
            answer[j] += 1; 
        }
    }
    return answer; // 수정된 배열 반환
}
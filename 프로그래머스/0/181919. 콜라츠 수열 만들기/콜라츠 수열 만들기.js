function solution(n) {
    var answer = [];
    let x = n
    while (x !== 1){
        if (x % 2 === 0){ 
            answer.push(x)
            x = x / 2
        }else{ 
            answer.push(x)
            x = 3 * x + 1
        }   
    }
    answer.push(1)
    return answer
}

// 재귀함수
// function solution(n, arr = []) {
//     arr.push(n)
//     if (n === 1) return arr
//     if (n % 2 === 0) return solution(n / 2, arr)
//     return solution(3 * n + 1, arr)
// }
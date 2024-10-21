function solution(triangle) {
    const answer = triangle.slice();    
    for (let i = triangle.length - 2; 0 <= i; i--) {
        for (let j = 0; j < triangle[i].length; j++) {    
            answer[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return answer[0][0]
}

function solution(board, k) {
    let answer = 0;
    for(let i = 0; i < board.length; i++){
        let count = 0
        for(let j = 0; j < board[i].length; j++){
            count = i + j
            if(count <= k){ 
                answer+=board[i][j]
            }
        }
    }
    return answer;
}
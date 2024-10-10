function solution(array, commands) {
    let sliceArr = [];
    let answer = []
    for(let i = 0; i < commands.length; i++){
        sliceArr.push(array.slice(commands[i][0]-1, commands[i][1]))
        sliceArr[i].sort((a,b)=> a-b)
        answer.push(sliceArr[i].filter((el,idx)=> idx === commands[i][2]-1))
    }
    
    return answer.flat();
}
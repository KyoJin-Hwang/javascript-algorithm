function solution(array) {
    let answer = [];
    const max = [...array].sort((a,b)=> b-a)[0]
    const idx = array.indexOf(max)
    answer.push(max)
    answer.push(idx)
    
    return answer;
}
function solution(array) {
    let sort = array.sort((a,b)=> a-b);
    let answer = 0 
    
    answer = sort[Math.floor(sort.length / 2)]
    return answer;
}
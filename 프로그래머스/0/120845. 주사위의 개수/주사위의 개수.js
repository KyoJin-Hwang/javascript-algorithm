function solution(box, n) {
    let answer = 1;
    
    answer = box.reduce((acc,cur)=> acc * Math.trunc(cur/n) ,1)
    return answer
}
function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=> b-a).forEach((el,idx)=>{
        let per = Math.floor(el / (idx+1))
        per ? answer++ : 0
    })
    
    return answer;
}
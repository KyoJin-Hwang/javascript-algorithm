function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((a)=>{
        const sliceStr = a.slice(s, s+l)
        if(sliceStr > k ) answer.push(+sliceStr)
    })
    return answer;
}
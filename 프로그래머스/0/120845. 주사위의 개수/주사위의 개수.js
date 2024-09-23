function solution(box, n) {
    let answer = 0;
    // reduce 로 값을 누적해서 곱해준다. ( 기본값은 처음에 0 일경우 곱하면 0 을 return 해서)
    // Math.floor 로 소수점을 방지한다.
    answer = box.reduce((acc,cur)=> {
       return acc * Math.floor(cur/n) 
    },1)
    return answer;
}

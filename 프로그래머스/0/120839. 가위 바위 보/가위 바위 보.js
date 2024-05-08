function solution(rsp) {
    let answer = ""
    const rspArr = rsp.split('');
    for(let v of rspArr){
        if(v === '0'){
            answer += '5'
        }
        else if(v === '2'){
            answer += '0'
        }
        else{
            answer += '2'
        }
    }
    return answer;
}
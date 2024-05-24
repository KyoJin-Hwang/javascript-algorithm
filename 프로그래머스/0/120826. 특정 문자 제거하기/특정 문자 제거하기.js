function solution(my_string, letter) {
    let answer = '';
    for(let idx in my_string){
        answer += my_string[idx] !== letter ? my_string[idx] : ""
    }
    return answer;
}
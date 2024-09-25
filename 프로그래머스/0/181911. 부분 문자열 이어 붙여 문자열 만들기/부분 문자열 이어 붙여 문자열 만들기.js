function solution(my_strings, parts) {
    let answer = '';
    
    answer = my_strings.map((el,idx)=> el.slice(parts[idx][0], parts[idx][1]+1))
    return answer.join("");
}
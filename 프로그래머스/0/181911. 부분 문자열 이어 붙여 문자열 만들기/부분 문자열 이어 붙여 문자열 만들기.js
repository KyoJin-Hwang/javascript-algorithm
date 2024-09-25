function solution(my_strings, parts) {
    let answer = '';
    
    answer = my_strings.map((el,idx)=> el.slice(parts[idx][0], parts[idx][1]+1))
    return answer.join("");
}

// 설명 
// mystrings 를 map으로 순회하며 각 string 마다 slice 한다. 
// 이때 slice 할때 parts 는 이차원배열이므로 첫번째에 [idx]만큼 명시하며 
// 마지막에 join 으로 텍스트를 합쳐준다. 
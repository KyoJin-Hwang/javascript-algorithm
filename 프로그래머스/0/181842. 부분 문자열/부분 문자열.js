function solution(str1, str2) {
    
    return [str2].filter((e,i)=> e.includes(str1)).length > 0 ? 1 : 0;
}
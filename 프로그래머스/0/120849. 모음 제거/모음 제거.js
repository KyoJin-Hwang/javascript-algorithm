function solution(my_string) {
    const reg = /[aeiou]/g
    
    return my_string.replaceAll(reg, "");
}
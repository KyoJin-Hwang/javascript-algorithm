function solution(my_string) {
    const reg = /[0-9]/g;
    return my_string.match(reg).reduce((acc, cur)=> acc + ~~cur, 0)
    
}
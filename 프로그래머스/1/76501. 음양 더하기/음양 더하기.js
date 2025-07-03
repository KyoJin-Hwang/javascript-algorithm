function solution(absolutes, signs) {
    return absolutes
        .map((el,idx)=> !signs[idx] ? el * -1 : el)
        .reduce((acc,cur)=> acc+cur, 0)
}
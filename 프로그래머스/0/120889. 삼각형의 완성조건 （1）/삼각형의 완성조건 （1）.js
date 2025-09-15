function solution(sides) {
    let max = sides.sort((a,b)=> b-a).shift()
    let sum = sides.reduce((acc,cur)=> acc + cur, 0)
    return max < sum ? 1 : 2;
}
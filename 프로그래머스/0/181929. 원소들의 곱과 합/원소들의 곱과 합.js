function solution(num_list) {
    const a = num_list.reduce((acc,cur)=> acc * cur, 1)
    const b = Math.pow(num_list.reduce((acc,cur)=> acc + cur, 0), 2)    
    
    return a < b ? 1 : 0;
}
function solution(num_list, n) {
    
    return num_list.filter((el)=>el === n).length ? 1 : 0;
}
function solution(my_string, index_list) {
    
    
    return index_list.map((el,idx)=> [...my_string][el]).join("");
}
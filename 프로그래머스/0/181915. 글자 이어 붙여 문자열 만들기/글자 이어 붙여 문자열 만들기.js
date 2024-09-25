function solution(my_string, index_list) {
    return index_list.map((el,idx)=> [...my_string][el]).join("");
}

// 설명 
// index_list 를 map으로 순회하여 my_string에 해당하는 idx위치를 찾아가 index_list 값을 바꿔준다.
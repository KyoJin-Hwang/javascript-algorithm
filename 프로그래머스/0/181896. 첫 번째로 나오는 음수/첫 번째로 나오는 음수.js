function solution(num_list) {
    return num_list.findIndex(v => v < 0)
}

// for 문 풀이 

// function solution(num_list) {
//     for (i = 0; i < num_list.length; i++) {
//         if (num_list[i] < 0) {
//             return i
//         } 
//     }
//     return -1
// }
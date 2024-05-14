// 신박한코드 
// function solution(num_list) {
//     const answer = [0,0]
//     for(let a of num_list){
//         answer[a%2] += 1
//     }
//     return answer;
// }
function solution(num_list) {
    
    let even = 0
    let odd = 0
    num_list.map((el)=>{
        if(el%2 === 0){
            even += 1
        }else{
            odd += 1
        }
    })    
    
    return [even, odd];
}

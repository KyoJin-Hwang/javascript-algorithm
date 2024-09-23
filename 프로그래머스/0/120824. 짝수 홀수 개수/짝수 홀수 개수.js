function solution(num_list) {
    // 변수 생성
    const answer = [0,0]
    
    // Map 함수를 사용하여 배열 순회
    num_list.map((el)=>{
        if(el%2 === 0){
        // el%2 === 0 짝수일경우 answer[0]에 증감연산자
            answer[0]++
        }else{
        // 홀수일경우 answer[1]에 증감연산자
            answer[1]++
        }
    })
    return answer;
}



// 신박한코드 
// function solution(num_list) {
//     const answer = [0,0]
//     for(let a of num_list){
//         answer[a%2]++
//     }
//     return answer;
// }
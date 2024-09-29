// function solution(phone_number) {
//     const str = phone_number.slice(0, -4);
    
//     return phone_number.replace(str, '*'.repeat(str.length));
// }

// 코드 줄임 
function solution(s){
    let result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }
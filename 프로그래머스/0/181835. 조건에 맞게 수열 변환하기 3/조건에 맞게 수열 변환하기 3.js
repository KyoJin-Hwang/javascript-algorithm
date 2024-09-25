function solution(arr, k) {
    return arr.map((el)=>k%2===0 ? el+k: el*k);
}

// 설명
// map 함수로 arr 배열을 순회하여 k 가 짝수일때 와 아닐떄의 삼항연산자로 return 해준다. 
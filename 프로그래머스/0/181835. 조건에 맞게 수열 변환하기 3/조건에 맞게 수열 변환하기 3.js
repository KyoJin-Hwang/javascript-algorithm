function solution(arr, k) {
    
    return arr.map((el)=>k%2===0 ? el+k: el*k);
}
function solution(arr1, arr2) {
    return arr1.map((el,idx)=> el.map((el2,idx2)=> el2 + arr2[idx][idx2]))
    
}
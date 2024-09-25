const arrSum = (arr) => {
    return arr.reduce((acc,cur) => acc + cur , 0)
}

function solution(arr1, arr2) {
    const arr1Len = arr1.length
    const arr2Len = arr2.length
    if(arr1Len !== arr2Len) return arr1Len > arr2Len ? 1 : -1
    
    if(arrSum(arr1) === arrSum(arr2) && arr1Len === arr2Len) return 0
    
    return arrSum(arr1) > arrSum(arr2) ? 1 : -1
    
}
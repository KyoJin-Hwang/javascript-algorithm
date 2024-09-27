function solution(arr) {
    const startIdx = arr.indexOf(2)
    const endIdx = arr.lastIndexOf(2)
    return startIdx === -1 ? [-1] : arr.slice(startIdx, endIdx+1)
}

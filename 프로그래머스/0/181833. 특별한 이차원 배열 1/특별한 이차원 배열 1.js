function solution(n) {
    let arr = Array.from(Array(n), () => Array(n).fill(0)) ;
    return arr.map((arr2, idx)=>{
        return arr2.map((el, idx2)=> idx2 === idx ? 1 : 0)
    })
}
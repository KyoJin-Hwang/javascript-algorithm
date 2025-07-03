function solution(n, arr1, arr2) {
    let result = Array.from({length:n}, () => Array(n).fill(0));
    arr1 = arr1.map((el)=> el.toString(2).padStart(n, 0).split(""))
    arr2 = arr2.map((el)=> el.toString(2).padStart(n, 0).split(""))
    console.log(result)
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result.length; j++){
            if(+arr1[i][j] === 1 || +arr2[i][j] === 1) {
                result[i][j] = 1
            }else{
                result[i][j] = 0
            }
        }
    }
    return result.map((el)=> el.map((el2)=> el2 ? '#' : ' ').join(''))
}
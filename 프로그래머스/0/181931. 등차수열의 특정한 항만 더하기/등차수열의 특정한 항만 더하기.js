function solution(a, d, included) {
   return included.reduce((acc, curr, idx) => {
        if (curr){
            console.log(a,d, acc, idx)
            acc += a + (idx * d);
        }
        return acc;
    }, 0)
}
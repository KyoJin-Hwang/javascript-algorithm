const obj = {
    allOdd: (a, b) => Math.pow(a, 2) + Math.pow(b, 2), 
    oneOdd: (a, b) => 2 * (a + b),                     
    allEven: (a, b) => Math.abs(a - b),                
};

function solution(a, b) {
    const isOdd = (num) => num % 2 === 1;
    return isOdd(a) && isOdd(b) ? 
        obj.allOdd(a,b) : 
        isOdd(a) || isOdd(b) ? 
        obj.oneOdd(a,b) : obj.allEven(a,b)
}


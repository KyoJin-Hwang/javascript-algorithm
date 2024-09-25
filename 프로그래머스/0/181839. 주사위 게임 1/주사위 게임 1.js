const obj = {
    allOdd: (a, b) => Math.pow(a, 2) + Math.pow(b, 2), 
    oneOdd: (a, b) => 2 * (a + b),                     
    allEven: (a, b) => Math.abs(a - b),                
};

function solution(a, b) {
    return a % 2 === 0 && b % 2 === 0
        ? obj.allEven(a, b)    
        : a % 2 !== 0 && b % 2 !== 0
        ? obj.allOdd(a, b)     
        : obj.oneOdd(a, b);   
}


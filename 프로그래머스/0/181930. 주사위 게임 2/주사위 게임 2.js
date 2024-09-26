const result = {
    'not':(a,b,c) => a+b+c,
    'two':(a,b,c) => (a+b+c) * (a*a+b*b+c*c),
    'all':(a,b,c) => (a+b+c) * (a**2+b**2+c**2) * (a**3 + b**3 + c**3),   
}

function solution(a, b, c) {
    if (a === b && b === c) 
        return result['all'](a,b,c);
     else if (a === b || a === c || b === c) 
        return result['two'](a,b,c);
     else 
        return result['not'](a,b,c);
}
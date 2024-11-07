function solution(s) {
    let stack = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i += 1){
        stack.push(s[i]);
        
        const same = stack.filter((item) => item === stack[0]);
        const notSame = stack.filter((item) => item !== stack[0]);
        
        if(same.length === notSame.length){
            count += 1;
            stack = [];
        }
    }
    
    if(stack.length !== 0){
        count += 1;
    }
    
    return count;
}
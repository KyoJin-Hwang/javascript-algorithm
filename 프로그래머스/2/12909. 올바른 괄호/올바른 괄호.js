function solution(s, answer){
    let stack = 0
    for(let char of s){
        if(char === "("){
            stack++
        }else{
            stack--
        }
         if (stack < 0) {
            return false;
        }
        
    }

    return !stack;
}
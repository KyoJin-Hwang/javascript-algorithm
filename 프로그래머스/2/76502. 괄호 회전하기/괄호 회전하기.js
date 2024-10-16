function solution(s) {
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        const stack = [];
        let isCorrect = true;
        
        for (let j = 0; j < s.length; j++) {
            if (opening.includes(rotated[j])) {
                stack.push(rotated[j]);
            } else if (opening[closing.findIndex(v => v === rotated[j])] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                isCorrect = false;
                break;
            }
        }
        
        if (isCorrect && !stack.length) {
            count++;
        }
    }
    
    return count;
}
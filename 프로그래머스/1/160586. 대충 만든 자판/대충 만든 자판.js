function solution(keymap, targets) {
    let answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        let totalPresses = 0;  
        
        let arr = [...targets[i]];
        
        for (let j = 0; j < arr.length; j++) {
            let minPress = Infinity;  
            
            for (let k = 0; k < keymap.length; k++) {
                let val = keymap[k].indexOf(arr[j]);
                
                if (val !== -1) {
                    minPress = Math.min(minPress, val + 1); 
                }
            }
            
            if (minPress === Infinity) {
                totalPresses = -1;  
                break;  
            } else {
                totalPresses += minPress;  
            }
        }
        
        answer.push(totalPresses);  
    }
    
    return answer;
}
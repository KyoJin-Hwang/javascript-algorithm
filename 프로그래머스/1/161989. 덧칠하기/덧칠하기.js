function solution(n, m, section) {
    let answer = 0;
    let cur = 0;  
    
    for (let i = 0; i < section.length; i++) {
        if (cur < section[i]) { 
            answer++;  
            // cur = section[i] + m - 1;
            cur = Math.min(section[i] + m - 1, n)
        }
    }
    return answer;
}
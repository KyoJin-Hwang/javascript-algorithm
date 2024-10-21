function solution(keymap, targets) {
    let answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        let totalPresses = 0;  // 각 타겟에 대한 총 누적 횟수
        let arr = [...targets[i]];
        
        for (let j = 0; j < arr.length; j++) {
            let minPress = Infinity;  // 최소 눌림 수를 무한대로 초기화
            
            for (let k = 0; k < keymap.length; k++) {
                let val = keymap[k].indexOf(arr[j]);
                
                if (val !== -1) {
                    minPress = Math.min(minPress, val + 1); // +1은 키의 위치를 0부터가 아닌 1부터 카운트하기 위해서
                }
            }
            
            if (minPress === Infinity) {
                totalPresses = -1;  // 찾을 수 없는 경우 -1로 설정
                break;  // 이 문자는 찾을 수 없으므로 다음 타겟으로 넘어감
            } else {
                totalPresses += minPress;  // 최소 눌림 수를 총 횟수에 더함
            }
        }
        
        answer.push(totalPresses);  // 각 타겟의 누적 횟수를 answer에 추가
    }
    
    return answer;
}
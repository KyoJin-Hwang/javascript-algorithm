function solution(participant, completion) {
    participant.sort(); 
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}
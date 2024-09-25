function solution(start_num, end_num) {
    let answer = [];
    answer = Array.from(Array(start_num - end_num + 1), (el, idx) => start_num - idx)
    return answer;
}

// 설명 
// 1. Array from 을 통한 배열 초기화
// 2. from 안에 Array 길이에 3까지 배열로 나와야하므로 +1 
// 3. start_num에서 배열의 idx 만큼 뺀다. 0부터 7까지 

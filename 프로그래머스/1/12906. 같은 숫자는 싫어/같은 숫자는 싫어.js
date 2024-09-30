function solution(arr, answer = []) {
    arr.map((el, idx) => {
        
        if (idx === 0 || el !== arr[idx - 1]) {
            answer.push(el);
        }
    });
    return answer;
}
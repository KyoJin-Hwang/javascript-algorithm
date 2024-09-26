function solution(arr, flag) {
    let answer = [];
    
    arr.map((el, idx) => {
        if (flag[idx]) {
            answer.push(...Array(el * 2).fill(el));
        } else {
            answer.splice(answer.length - el, el);
        }
    });

    return answer;
}


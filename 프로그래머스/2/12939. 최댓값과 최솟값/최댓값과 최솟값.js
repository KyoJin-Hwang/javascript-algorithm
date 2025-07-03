function solution(s) {
    let answer = '';
    const a = s.split(' ').map(Number)
    const min = Math.min(...a)
    const max = Math.max(...a)
    answer = `${min} ${max}`
    return answer;
}
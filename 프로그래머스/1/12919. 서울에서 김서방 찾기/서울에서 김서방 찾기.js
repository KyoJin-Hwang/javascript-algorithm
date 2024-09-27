function solution(seoul) {
    const answer = (num) => {
        return `김서방은 ${num}에 있다`
    }
    return answer(seoul.indexOf('Kim'));
}
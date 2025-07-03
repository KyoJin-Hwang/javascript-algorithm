function solution(seoul) {
    const location = seoul.findIndex((el)=> el === 'Kim')
    return `김서방은 ${location}에 있다`;
}
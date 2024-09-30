function solution(s) {
    const wordArr = s.split(' ');  
    return `${Math.min(...wordArr)} ${Math.max(...wordArr)}`;
}
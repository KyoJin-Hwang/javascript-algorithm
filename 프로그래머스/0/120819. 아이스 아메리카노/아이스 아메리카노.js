function solution(money) {
    const americano = 5500; 
    const glass = Math.floor(money / americano);
    const change = money % americano;
    const answer = [glass, change];
    return answer;
}

// function solution(money) {
//     return [Math.floor(money / 5500), money % 5500];
// }
function solution(price) {
    if(price >= 500000) {
        price *= 0.8;
    } else if(price >= 300000) {
        price *= 0.9;
    } else if(price >= 100000) {
        price *= 0.95;
    }
    return Math.floor(price);
}

// 설명
// if문으로 각 조건문에 해당하는 곳에 할인율 만큼 price 곱하여 값을 변경해준다. 
function solution(num_list) {
    let mul = num_list.reduce((a, c) => a*c, 1);
    let sum = num_list.reduce((a, c) => a+c, 0);
    return (mul < sum*sum) ? 1 : 0;
}

// 설명
// reduce mul 과 sum 을 선언하여 계산해준다 
// sum 은 더해야하므로 0 부터 mul 은 * 가 있으므로 1부터 시작한다
// 마지막 return 에서 mul 이 sum*sum 보다 작을 경우 1 클경우는 0으로한다. 
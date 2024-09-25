function solution(num_list) {
    let odd = 0
    let even = 0;

    num_list.map((el, idx) => {
        !(idx % 2) ? even += el : odd += el; 
    })

    return odd > even ? odd : even; 
}

// 설명 
// 홀수 및 짝수 변수 선언
// num_list 를 map 으로 순회하며 idx 가 % 2 했을때 0이나오면 not 연산자를 통해 
// even 변수에 num_list idx 에 맞는 값을 더해준다 .
// odd 는 0 이 아닐때의 나머지가 있으면 false 로 전환하여 odd 변수에 값을 더해준다
// return 에서 더 큰것으로 삼항연산자 계산을하여 그값을 return 한다 
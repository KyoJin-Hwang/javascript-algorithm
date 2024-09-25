function solution(num_list) {
    
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

// 설명
// 스프레드 연산자를 통해 원본배열 변경하지않고 reverse 하여 구조분해할당해서 마지막과 그이전을 가져온다.
// 그리고 한번더 스프레드 연산자를 통하여 원본 배열을 가져오고, 마지막원소와 이전원소 크기를 비교하여 
// 크다면 a-b  작다면 a*2 를 해준다. 
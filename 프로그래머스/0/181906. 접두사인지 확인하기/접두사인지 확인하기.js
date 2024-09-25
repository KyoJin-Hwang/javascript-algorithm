function solution(my_string, is_prefix) {
    let answer = 0;
    answer = +my_string.startsWith(is_prefix)
    return answer;
}

// 설명
// 1. startWidth 로 글자가 시작할때 포함되는지 true false 받기 
// 2. + 를 통한 true / false 숫자 강제변환 
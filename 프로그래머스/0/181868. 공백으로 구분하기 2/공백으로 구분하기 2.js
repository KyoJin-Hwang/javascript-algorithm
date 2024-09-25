function solution(my_string) {
    // split에서의 공백은 한번만 적용된다.
    // 그래서 filter 로 한번 더 제거 
    return my_string.split(' ').filter(el => el !== '')
}
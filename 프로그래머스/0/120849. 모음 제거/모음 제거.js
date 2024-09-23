function solution(my_string) {
    // 모음 변수 생성
    const str_filter = 'aeiou'
    // my_string 을 split 하여 배열로 만든다.
    // filter로 모음에 포함 되는것을 제외한 나머지는 반환한다.
    // join 으로 string 배열을 string 변환하여 반환한다. 
    let newString = my_string.split('').filter((el)=>(!str_filter.includes(el))).join('')
    return newString
}


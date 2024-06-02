function solution(my_string) {
    const str_filter = 'aeiou'
    let newString = my_string.split('').filter((el)=>(!str_filter.includes(el))).join('')
    return newString
    
}
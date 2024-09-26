function solution(my_string, s, e) {
    const arr = [...my_string] 
    const newStr = arr.slice(s, e + 1).reverse() 
    arr.splice(s, newStr.length, newStr)
    return arr.flat().join('');
}
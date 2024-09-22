function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

// 설명
// split 으로 배열을 쪼개준다. 
// 배열의 구조분해할당으로 값을 변경해준다. 
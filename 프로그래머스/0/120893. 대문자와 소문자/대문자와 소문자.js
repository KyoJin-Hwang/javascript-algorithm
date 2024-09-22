function solution(my_string) {
let result = "" 

for (let i of my_string) { 
	if (i === i.toUpperCase()) {
		result += i.toLowerCase() 
	} else { 
		result += i.toUpperCase() 
	}
}
    return result
}
// 설명 
// 1. 빈텍스트를 가진 result 변수 생성
// 2. for of 문을 하용하여 string.length 만큼 순회한다. 
// 3. if 문을 사용하여 대문자로 변경하였을때 같다면 소문자로 변경하고 
// 4. else 문을 사용하여 소문자는 대문자로 변경한다. 
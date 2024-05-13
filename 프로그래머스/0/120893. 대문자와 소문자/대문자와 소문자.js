function solution(my_string) {
let arr = "" 

for (let i of my_string) { 
	if (i === i.toUpperCase()) {
		arr += i.toLowerCase() 
	} else { 
		arr += i.toUpperCase() 
	}
}
    return arr
}
function solution(array) {
    let answer = [];
    let num = 0;
    for(let i of array){
        num = num > i ? num : i
    }
    answer.push(num)
    answer.push(array.indexOf(num,0))
    return answer
}
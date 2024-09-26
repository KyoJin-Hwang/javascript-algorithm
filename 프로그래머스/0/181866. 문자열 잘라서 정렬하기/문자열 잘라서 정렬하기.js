function solution(myString) {
    let answer = [];
    answer = myString.split("x").filter((el)=> el !== "")
    return answer.sort();
}
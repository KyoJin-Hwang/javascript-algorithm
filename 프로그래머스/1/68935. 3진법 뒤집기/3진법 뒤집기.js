function solution(n) {
    let answer = 0;
    const reverse3 = n.toString(3).split("").reverse().join("")
    answer = parseInt(reverse3, 3)

    return answer;
}
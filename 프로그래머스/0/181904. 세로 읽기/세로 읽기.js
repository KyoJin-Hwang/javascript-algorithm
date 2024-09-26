function solution(my_string, m, c) {
    let answer = []
    for (let i = 0; i < my_string.length; i += m) {
        answer.push(my_string.slice(i, i + m).split("")[c-1])
    }
    return answer.join("")
}

// filter 짧은 풀이

// [...my_string].filter((_, i) => i % m === c - 1).join('');
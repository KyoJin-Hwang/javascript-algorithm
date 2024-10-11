function solution(s) {
    let answer = []
    let count = 0
    let after = 0
    while(s !== '1'){
        const prev = s.length
        const cur = s.replaceAll('0', '').length
        console.log(prev, cur)
        s = cur.toString(2)
        count++
        after += prev - cur
    }
    return [count, after]
}
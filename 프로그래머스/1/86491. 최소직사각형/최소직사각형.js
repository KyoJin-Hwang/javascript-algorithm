function solution(sizes) {
    let answer = 0;
    const sort = sizes.map((el)=> {
        return el.sort((a,b)=> b-a)
    })
    let w = 0
    let h = 0
    for(let i = 0; i < sort.length; i++){
        let [first, second] = sort[i]
        if(w < first) w = first
        if(h < second) h = second
    }
    answer = w * h
    return answer;
}
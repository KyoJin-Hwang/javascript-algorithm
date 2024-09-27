function solution(s){
    
    let p = 0
    let y = 0
    for(let i of s){
        if(i.toLowerCase() === 'p') p++
        if(i.toLowerCase() === 'y') y++
    }

    return p === y ? true : false;
}
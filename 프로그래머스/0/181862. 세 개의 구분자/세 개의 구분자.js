function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter((a)=> a)
    return result.length ? result : ["EMPTY"]
}

// match 활용
// const solution=s=>s.match(/[^a-c]+/g)||['EMPTY'] 
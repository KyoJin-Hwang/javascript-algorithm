function solution(s) {
    s = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    for (let char of s) {
        if (char === 'p') pCount++;
        if (char === 'y') yCount++;
    }

    return pCount === yCount;
}
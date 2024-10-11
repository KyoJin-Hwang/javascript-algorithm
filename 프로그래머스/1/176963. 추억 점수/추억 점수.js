function solution(name, yearning, photo) {
    const answer = []
    const nameMap = {};
    name.forEach((e, i) => {
        nameMap[e] = yearning[i];
    });
    
    for(let i = 0; i < photo.length; i++){
        let count = 0 
        for(let j = 0; j < photo[i].length; j++){
             if (nameMap[photo[i][j]] !== undefined) {
                count += nameMap[photo[i][j]];
            }
        }
        answer.push(count)
    }
    return answer;
}
function solution(k, dungeons) {
    let answer = 0;
    
    const dfs = (visit, deps, current) => {
        answer = Math.max(answer, deps)
        
        for(let i = 0; i < dungeons.length; i++){
            let [a, b] = dungeons[i]
            
            if(!visit[i] && current >= a){
                visit[i] = true;
                dfs(visit, deps+1, current-b)
                visit[i] = false;
            }
        }
    }
    dfs(Array(dungeons.length).fill(false), 0, k)
    return answer;
}
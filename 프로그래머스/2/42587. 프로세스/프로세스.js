function solution(priorities, location) {
    let queue = priorities.map((priority, idx)=> ({priority, idx}));
    let count = 0;
    
    while(queue.length){
    let current = queue.shift()
    let hasPriority = queue.some((doc) => doc.priority > current.priority)
    if(hasPriority) queue.push(current)
    else{
        count++
        if(current.idx === location) return count
    }

    }
}
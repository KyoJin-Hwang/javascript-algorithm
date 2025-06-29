function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0)
    let totalWeight = 0 
    let time = 0 
    while(truck_weights.length > 0 || totalWeight > 0){
    time++ 
        
    const exiting = bridge.shift();
    totalWeight -= exiting;
        
    const nextTruck = truck_weights[0]
    if(nextTruck !== undefined && nextTruck + totalWeight <= weight){
        const entering = truck_weights.shift(); 
        bridge.push(entering);                  
        totalWeight += entering;                
    }else{
        bridge.push(0)
    }
    }
    return time++
}
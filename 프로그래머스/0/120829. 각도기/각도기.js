function solution(angle) {
    return angle < 91 ? 
        angle !== 90 ? 1 : 2 
        : angle !== 180 ? 3 : 4 
}
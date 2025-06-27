function solution(nums) {
    const set = new Set(nums);
    const max = nums.length/2
    
    
    return Math.min(set.size, max);
}
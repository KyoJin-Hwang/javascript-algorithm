function solution(nums) {
  const set = new Set(nums); 
  const maxPick = nums.length / 2; // 고를 수 있는 최대 수
  return Math.min(set.size, maxPick); 
}
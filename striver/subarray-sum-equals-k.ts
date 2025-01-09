function subarraySum(nums: number[], k: number): number {
  let currSum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const comp = currSum - k;
    if (map.has(comp)) count += map.get(comp);
    const prev = map.get(currSum) || 0;
    map.set(currSum, prev + 1);
  }
  return count;
}

console.log(subarraySum([1, 2, 3], 5));

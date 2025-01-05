function maxSubArray(nums: number[]): number {
  let total = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    max = Math.max(total, max);
    if (total < 0) total = 0;
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([5, 4, -1, 7, 8])); //23

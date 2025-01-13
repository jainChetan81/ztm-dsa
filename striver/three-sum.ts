function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  if (nums.length < 3) return res;

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;
    if (nums[i] === nums[i - 1]) continue;
    while (start < end) {
      const total = nums[i] + nums[start] + nums[end];
      if (total < 0) start++;
      if (total > 0) end--;
      if (total === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (nums[start] === nums[start - 1] && start < end) start++;
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  const set = new Set(nums);
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) continue;
    let lowest = nums[i];
    let count = 1;
    while (set.has(lowest + 1)) {
      count++;
      lowest++;
    }
    ans = Math.max(count, ans);
  }
  return ans;
}

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); //4

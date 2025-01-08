function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const set = new Set();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let start = j + 1,
        end = nums.length - 1;
      while (end > start) {
        const total = nums[i] + nums[j] + nums[start] + nums[end];
        const str = `${nums[i]}- ${nums[j]} - ${nums[start]} - ${nums[end]}`;
        if (total === target && !set.has(str)) {
          res.push([nums[i], nums[j], nums[start], nums[end]]);
          start++;
          end--;
          set.add(str);
        } else if (total > target) end--;
        else start++;
      }
    }
  }
  return res;
}
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

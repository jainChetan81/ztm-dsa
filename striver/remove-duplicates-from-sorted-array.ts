function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let curr = nums[0];
  let idx = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === curr) continue;
    nums[idx] = nums[i];
    idx++;
    curr = nums[i];
  }
  return idx;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));

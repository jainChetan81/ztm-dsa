/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 1;
  for (; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) break;
  }
  i = i - 1;
  if (i < 0) {
    nums.reverse();
    return;
  }
  let j = nums.length - 1;
  for (; j > i; j--) {
    if (nums[j] > nums[i]) break;
  }
  [nums[j], nums[i]] = [nums[i], nums[j]];
  nums.splice(i + 1, nums.length - i - 1, ...nums.slice(i + 1).reverse());
}

console.log(nextPermutation([1, 2, 3])); //132
console.log(nextPermutation([3, 2, 1])); //123
console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0])); //[2,3,0,0,1,4,5]
// 123,132,213,231,312,321,123

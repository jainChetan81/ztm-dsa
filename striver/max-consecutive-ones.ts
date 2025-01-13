function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0,
    tempMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) tempMax = 0;
    else tempMax++;
    max = Math.max(tempMax, max);
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

function majorityElement(nums: number[]): number[] {
  let one = Infinity;
  let two = Infinity;
  let oneCount = 0;
  let twoCount = 0;
  const n = nums.length / 3;

  for (let i = 0; i < nums.length; i++) {
    if (oneCount === 0 && nums[i] !== two) {
      one = nums[i];
      oneCount++;
    } else if (one === nums[i]) {
      oneCount++;
    } else if (twoCount === 0 && nums[i] !== one) {
      two = nums[i];
      twoCount++;
    } else if (two === nums[i]) {
      twoCount++;
    } else {
      oneCount--;
      twoCount--;
    }
  }
  oneCount = 0;
  twoCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === one) oneCount++;
    if (nums[i] === two) twoCount++;
  }
  if (oneCount > n && twoCount > n) return [one, two];
  if (oneCount > n) return [one];
  if (twoCount > n) return [two];
  return [];
}

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2
console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([6, 6, 6, 7, 7])); //3
console.log(majorityElement([1])); //3
console.log(majorityElement([2, 1, 1, 3, 1, 4, 5, 6])); //[1,3]

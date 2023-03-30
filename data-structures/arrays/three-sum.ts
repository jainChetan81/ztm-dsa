function threeSum(nums: number[], k = 0): number[][] {
	nums.sort((a, b) => a - b);
	const result: number[][] = [];
	for (let i = 0; i < nums.length; i++) {
		let left = i + 1;
		let right = nums.length - 1;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum === k) {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
			}
			if (sum > k) right--;
			if (sum < k) left++;
		}
	}
	return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1], 0)); //[[-1, 0, 1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]
console.log(threeSum([1, 1, -2])); //[[-2,1,1]]

function threeSum(nums: number[], k = 0): number[][] {
	const result: number[][] = [];
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const temp: number[] = [];
		for (let j = i + 1; j < nums.length; j++) {
			const compliment = k - (nums[i] + nums[j]);
			// console.log(nums[i], nums[j], nums[i] + nums[j], compliment, map.get(compliment));
			if (!isNaN(map.get(compliment)!) && nums.includes(compliment)) {
				map.delete(compliment);
				temp.push(compliment, nums[i], nums[j]);

				// console.log(i, j, temp);
			} else {
				map.set(nums[i] + nums[j], i);
			}
		}
		if (temp.length > 0) {
			result.push(temp);
			map.clear();
		}
	}
	return result;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); //[[-1,-1,2],[-1,0,1]]
// console.log(threeSum([-1, 0, 1], 0)); //[[-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); //[]
// console.log(threeSum([0, 0, 0])); //[[0,0,0]]
console.log(threeSum([1, 1, -2])); //[[-2,1,1]]

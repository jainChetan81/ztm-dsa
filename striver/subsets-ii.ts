function subsetsWithDup(nums: number[]): number[][] {
	const result: number[][] = [];
	nums.sort((a, b) => a - b); // Sort to group duplicates together

	function backtrack(index: number, curr: number[]) {
		result.push([...curr]);

		for (let i = index; i < nums.length; i++) {
			if (i > index && nums[i] === nums[i - 1]) continue;
			curr.push(nums[i]);
			backtrack(i + 1, curr);
			curr.pop();
		}
	}

	backtrack(0, []);
	return result;
}
console.log(subsetsWithDup([1, 2, 3]));

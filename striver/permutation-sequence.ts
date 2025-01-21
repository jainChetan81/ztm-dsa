function getPermutation(n: number, k: number): string {
	const res = Array.from({ length: n }, (_, i) => i + 1);
	for (let i = 0; i < k - 1; i++) {
		next_permutation(res);
	}
	return res.join("");
}
function next_permutation(nums: number[]): void {
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
	[nums[i], nums[j]] = [nums[j], nums[i]];
	nums.splice(i + 1, nums.length - i - 1, ...nums.slice(i + 1).reverse());
}

// console.log(getPermutation(3, 3));
console.log(getPermutation(1, 1));

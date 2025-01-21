function singleNonDuplicate(nums: number[]): number {
	function binary(left: number, right: number) {
		if (left === right) return nums[left];

		const mid = Math.floor((left + right) / 2);
		if (mid % 2 === 0) {
			if (nums[mid] === nums[mid + 1]) return binary(mid + 2, right);
			else return binary(left, mid);
		} else {
			if (nums[mid] === nums[mid - 1]) return binary(mid + 1, right);
			else return binary(left, mid - 1);
		}
	}
	return binary(0, nums.length - 1);
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2, 2, 3]));
// console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));

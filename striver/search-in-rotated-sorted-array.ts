function search(nums: number[], target: number): number {
	function binary(left: number, right: number) {
		if (left === right) return nums[left] === target ? left : -1;
		if (right < left) return -1;

		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) return mid;
		console.log(left, right, mid, nums[left], nums[right], nums[mid]);
		if (nums[mid] > nums[left]) {
			// left side is sorted
			// target is in the sorted side
			if (nums[left] <= target && target < nums[mid]) return binary(left, mid - 1);
			else return binary(mid, right);
		} else {
			if (nums[right] >= target && target > nums[mid]) return binary(mid + 1, right);
			else return binary(left, mid);
		}
	}

	return binary(0, nums.length - 1);
}

// console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)); // 4
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); //-1
// console.log(search([1], 0)); //-1
console.log(search([3, 1], 1)); //0

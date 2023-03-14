// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0
function countNegatives(grid: number[][]): number {
	const rows = grid.length;
	let total = 0;
	for (let i = 0; i < rows; i++) {
		const negativeNumbers = findNegativeNumbers(grid[i]);
		total += negativeNumbers;
	}
	return total;
}
function findNegativeNumbers(nums: number[], k = 0, start = 0, end = nums.length - 1, total = 0): number {
	if (start > end) return total;
	const mid = Math.floor((start + end) / 2);
	if (nums[mid] < k) {
		// console.log(mid, nums[mid], start, end);
		let left = mid;
		while (nums[left - 1] < k) {
			left--;
		}
		total += end - left + 1;
		// console.log("total", total, end, left);
		return total;
	}
	if (nums[mid] >= k) return findNegativeNumbers(nums, k, mid + 1, end, total);
	return total;
}
console.log(
	countNegatives([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3]
	])
); //8
// console.log(
// 	countNegatives([
// 		[3, 2],
// 		[1, 0]
// 	])
// ); //0

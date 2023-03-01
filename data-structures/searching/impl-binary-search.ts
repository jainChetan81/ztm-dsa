// implement binary search on a sorted array
//
function binarySearch(arr: number[], target: number): number {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}
// example 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
// example 2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // -1
// example 3
console.log(binarySearch([], 0)); // -1
// example 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // 0
// example 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9

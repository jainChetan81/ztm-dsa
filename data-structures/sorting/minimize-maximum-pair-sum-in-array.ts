// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
//     For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
//     Each element of nums is in exactly one pair, and
//     The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

// Example 1:
// Input: nums = [3,5,2,3]
// Output: 7
// Explanation: The elements can be paired up into pairs (3,3) and (5,2).
// The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

// Example 2:
// Input: nums = [3,5,4,2,4,6]
// Output: 8
// Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
// The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.
function minPairSum(nums: number[]): number {
	quickSort(nums);
	console.log(nums);
	let high = 0;
	for (let i = 0; i < nums.length / 2; i++) {
		if (nums[i] + nums[nums.length - i - 1] > high) {
			high = nums[i] + nums[nums.length - i - 1];
		}
	}
	return high;
}
type A = number[];
type N = number;
function quickSort(array: A, left: N = 0, right: N = array.length - 1) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
	return array;
}

function partition(array: A, pivot: N, left: N, right: N) {
	const pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

function swap(array: A, firstIndex: N, secondIndex: N) {
	[array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}
console.log(minPairSum([3, 5, 2, 3])); // 7
console.log(minPairSum([3, 5, 4, 2, 4, 6])); // 8
console.log(minPairSum([4, 1, 5, 1, 2, 5, 1, 5, 5, 4])); // 8

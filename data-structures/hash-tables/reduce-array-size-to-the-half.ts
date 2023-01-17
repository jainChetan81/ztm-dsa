// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Example 1:
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.

// Example 2:
// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.

// Constraints:
//     2 <= arr.length <= 105
//     arr.length is even.
//     1 <= arr[i] <= 105

function minSetSize(arr: number[]): number {
	const threshold = arr.length / 2;
	const map = new Map<number, number>();
	for (let i = 0; i < arr.length; i++) {
		const value = map.get(arr[i]) ?? 0;
		map.set(arr[i], value + 1);
	}
	const map2: Record<number, Set<number>> = {};
	map.forEach((value, key) => {
		const set = map2[value] ?? new Set<number>();
		set.add(key);
		map2[value] = set;
	});
	let result = 0;
	let once = true;
	let count = 0;
	// console.log(map2);
	Object.keys(map2)
		.sort((a, b) => Number(b) - Number(a))
		.forEach((key) => {
			// console.log(key, map2[key]);
			for (let i = 0; i < map2[key]!.size; i++) {
				count += Number(key);
				once && result++;
				if (count >= threshold && once) {
					once = false;
					// console.log(i, "count", count, result);
					break;
				}
			}
			if (count >= threshold) {
				return;
			}
			// if (count < result) result = count;
		});
	return result;
}

// example 1
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
// output: 2
// example 2
console.log(minSetSize([7, 7, 7, 7, 7, 7]));
// output: 1
console.log(minSetSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// output: 5
console.log(minSetSize([9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19]));
// output 5

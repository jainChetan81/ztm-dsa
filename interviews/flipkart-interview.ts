// Minimum Number of Platforms Required for a Bus Station
// Input arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}
// dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}
// Output: 3
// Explanation: There are at-most three buses at a time (time between 9:40 to 12:00)

// Input: arr[] = {9:00, 9:40}
// dep[] = {9:10, 12:00}
// Output: 1
// Explanation: Only one platform is needed.
// On for loop for both
// 900=>910=>940=>950
// map.set(“900-910”,0)

const arr = [900, 940, 950, 1121, 1500, 1800];
const dep = [910, 1200, 1120, 1130, 1900, 2000];

function findRange(arr: number[], dep: number[]): number {
	let max = 0;
	const map = new Map<number, number>();
	for (let i = 0; i < arr.length; i++) {
		for (let j = arr[i]; j < dep[i]; j++) {
			const numberOfBuses = map.get(j) ?? 0;
			map.set(j, numberOfBuses + 1);
			max = Math.max(map.get(j)!, max);
		}
	}
	return max;
}

console.log(findRange(arr, dep));

// implement LrUCachig

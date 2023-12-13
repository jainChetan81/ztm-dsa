// Minimum Number of Platforms Required for a Bus Station
// Input arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}
// dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}
// Output: 3
// Explanation: There are at-most three buses at a time (time between 9:40 to 12:00)

// Input: arr[] = {9:00, 9:40}
// dep[] = {9:10, 12:00}
// Output: 1
// Explanation: Only one platform is needed.

const arrs = [900, 940, 950, 1121, 1500, 1800];
const dep = [910, 1200, 1120, 1130, 1900, 2000];

function findRange(arrival: number[], departure: number[]): number {
	let max = 0;
	const map = new Map<number, number>();
	for (let i = 0; i < arrival.length; i++) {
		for (let j = arrival[i]; j < departure[i]; j++) {
			const numberOfBuses = map.get(j) ?? 0;
			map.set(j, numberOfBuses + 1);
			max = Math.max(map.get(j)!, max);
		}
	}
	console.log(map);

	return max;
}
function findPlatform(arrival: number[], departure: number[]) {
	// plat_needed indicates number of platforms
	// needed at a time
	let plat_needed = 1,
		result = 1;

	// Run a nested for-loop to find the overlap
	for (let i = 0; i < arrival.length; i++) {
		// Initially one platform is needed
		plat_needed = 1;
		for (let j = 0; j < arrival.length; j++) {
			if (i != j)
				if (arrival[i] >= arrival[j] && departure[j] >= arrival[i])
					// Increment plat_needed when there is an
					// overlap
					plat_needed++;
		}

		// Update the result
		result = Math.max(plat_needed, result);
	}
	return result;
}

console.log(findRange(arrs, dep));
console.log(findPlatform(arrs, dep));

// implement LrUCachig

// You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.
// You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d.
// Return the maximum number of events you can attend.

// Example 1:
// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.

// Example 2:
// Input: events= [[1,2],[2,3],[3,4],[1,2]]
// Output: 4
function maxEvents(events: number[][]): number {
	const map = new Map<number, boolean>();
	events.sort((a, b) => {
		if (a[1] - b[1] === 0) return a[0] - b[0];
		return a[1] - b[1];
	});
	let total = 0;
	for (let i = 0; i < events.length; i++) {
		for (let j = events[i][0]; j <= events[i][1]; j++) {
			const value = map.get(j) ?? false;
			if (!value) {
				map.set(j, true);
				total++;
				break;
			}
		}
	}
	return total;
}
console.log(
	maxEvents([
		[1, 2],
		[2, 3],
		[3, 4]
	])
); // 3
console.log(
	maxEvents([
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 2]
	])
); // 4
console.log(
	maxEvents([
		[1, 2],
		[1, 2],
		[3, 3],
		[1, 5],
		[1, 5]
	])
); // 5
console.log(
	maxEvents([
		[1, 2],
		[2, 2],
		[3, 3],
		[3, 4],
		[3, 4]
	])
); //4

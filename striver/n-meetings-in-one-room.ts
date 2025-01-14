function minNumberOfRooms(start: number[], end: number[]): number[] {
	const meetings = start.map((s, i) => ({
		i: i + 1,
		start: start[i],
		end: end[i]
	}));
	meetings.sort((a, b) => a.end - b.end);
	let lastEnd = meetings[0].end;
	const totalMeetings = [1];
	for (let i = 0; i < meetings.length; i++) {
		if (meetings[i].start <= lastEnd) continue;
		totalMeetings.push(i + 1);
		lastEnd = meetings[i].end;
	}
	return totalMeetings;
}

console.log(minNumberOfRooms([1, 3, 0, 5, 8, 5], [2, 4, 5, 7, 9, 9])); //4
console.log(minNumberOfRooms([10, 12, 20], [20, 25, 30])); //1

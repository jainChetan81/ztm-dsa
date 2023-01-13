// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
//     answer[0] is a list of all players that have not lost any matches.
//     answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.
// Note:
//     You should only consider the players that have played at least one match.
//     The testcases will be generated such that no two matches will have the same outcome.

// Example 1:
// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

// Example 2:

// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = [].
function findWinners(matches: number[][]): number[][] {
	const lostCount = new Map<number, number>();
	for (let i = 0; i < matches.length; i++) {
		const [winner, loser] = matches[i] as [number, number];
		const lossCount = lostCount.get(loser) || 0;
		const winnerCount = lostCount.get(winner) || 0;
		lostCount.set(winner, winnerCount);
		lostCount.set(loser, lossCount + 1);
	}
	const winners: number[] = [];
	const losers: number[] = [];
	console.log(lostCount);
	lostCount.forEach((value, key) => {
		if (value === 0) winners.push(key);
		if (value === 1) losers.push(key);
	});
	return [winners.sort((a, b) => a - b), losers.sort((a, b) => a - b)];
}

// example 1
const matches1 = [
	[1, 3],
	[2, 3],
	[3, 6],
	[5, 6],
	[5, 7],
	[4, 5],
	[4, 8],
	[4, 9],
	[10, 4],
	[10, 9],
];
console.log(findWinners(matches1));
// Output: [[1,2,10],[4,5,7,8]]
// example 2
const matches2 = [
	[2, 3],
	[1, 3],
	[5, 4],
	[6, 4],
];
console.log(findWinners(matches2));
// Output: [[1,2,5,6],[]]

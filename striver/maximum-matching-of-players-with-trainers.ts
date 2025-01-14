function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
	players.sort((a, b) => a - b);
	trainers.sort((a, b) => a - b);
	let totalChild = 0;
	let i = players.length - 1,
		j = trainers.length - 1;
	while (i >= 0 && j >= 0) {
		console.log(i, players[i], j, trainers[j]);
		if (players[i] <= trainers[j]) {
			totalChild++;
			j--;
		}
		i--;
	}
	return totalChild;
}
console.log(findContentChildren([4, 7, 9], [8, 2, 5, 8]));

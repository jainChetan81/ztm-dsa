function sumOfAllSubsets(arr: number[]): number[] {
	const res: number[] = [];
	function loop(i: number, sum: number) {
		if (i >= arr.length) return res.push(sum);
		loop(i + 1, sum + arr[i]);
		loop(i + 1, sum);
	}
	loop(0, 0);

	return res.sort((a, b) => a - b);
}

console.log(sumOfAllSubsets([5, 2, 1]));

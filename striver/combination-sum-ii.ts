function combinationSum2(candidates: number[], target: number): number[][] {
	const res: number[][] = [];
	candidates.sort((a, b) => a - b);
	const temp: number[] = [];
	function backtrack(idx: number, sum: number) {
		if (sum === 0) {
			res.push([...temp]);
			return;
		}
		if (idx >= candidates.length || sum < 0) return;
		for (let i = idx; i < candidates.length; i++) {
			if (i > idx && candidates[i] === candidates[i - 1]) continue;
			if (sum >= candidates[i]) {
				temp.push(candidates[i]);
				backtrack(i + 1, sum - candidates[i]);
				temp.pop();
			}
		}
	}
	backtrack(0, target);
	return res;
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

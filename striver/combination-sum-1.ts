function combinationSum(candidates: number[], target: number): number[][] {
	let t = target;
	const res: number[][] = [];
	let set: number[] = [];
	function backtrack(idx: number, sum: number) {
		if (idx >= candidates.length) return;
		if (sum === 0) {
			res.push([...set]);
			return;
		}
		if (sum < 0) return;
		if (sum >= candidates[idx]) {
			console.log(sum, candidates[idx], set);
			set.push(candidates[idx]);
			backtrack(idx, sum - candidates[idx]);
			set.pop();
		}
		backtrack(idx + 1, sum);
	}
	backtrack(0, t);
	return res;
}
console.log(combinationSum([2, 3, 5], 8));

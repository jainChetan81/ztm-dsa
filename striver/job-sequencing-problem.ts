function JobSequencing(id: number[], deadline: number[], profit: number[]): [number, number] {
	const jobs = id.map((id, i) => {
		return { id, deadline: deadline[i], profit: profit[i] };
	});
	jobs.sort((a, b) => b.profit - a.profit);
	const maxDeadline = Math.max(...deadline);
	const res = new Array(maxDeadline).fill(-1);
	let totalProfit = 0;
	let totalJobs = 0;
	for (let i = 0; i < jobs.length; i++) {
		if (res[jobs[i].deadline - 1] === -1) {
			res[jobs[i].deadline - 1] = jobs[i].profit;
			totalProfit += jobs[i].profit;
			totalJobs++;
			continue;
		}
		for (let j = jobs[i].deadline - 1; j >= 0; j--) {
			if (res[j] === -1) {
				res[j] = jobs[i].profit;
				totalProfit += jobs[i].profit;
				totalJobs++;
				break;
			}
		}
	}
	return [totalJobs, totalProfit];
}

console.log(JobSequencing([1, 2, 3, 4], [4, 5, 6, 6], [20, 15, 10, 5])); //35
console.log(JobSequencing([1, 2, 3, 4, 5], [2, 1, 2, 1, 1], [100, 19, 27, 25, 15])); //127
// Input: id = [1, 2, 3, 4], deadline = [4, 1, 1, 1], profit = [20, 1, 40, 30]
console.log(JobSequencing([1, 2, 3, 4], [4, 1, 1, 1], [20, 1, 40, 30])); //60
// [1, 2, 3, 4, 5], deadline = [2, 1, 2, 1, 1], profit = [100, 19, 27, 25, 15]
console.log(JobSequencing([1, 2, 3, 4, 5], [2, 1, 2, 1, 1], [100, 19, 27, 25, 15])); //127

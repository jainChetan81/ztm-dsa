function medianOfAMatric(matrix: number[][]) {
	let low = Infinity;
	let high = -Infinity;
	const n = matrix.length;
	const m = matrix[0].length;
	const totalDigits = (m * n + 1) / 2;
	for (let i = 0; i < n; i++) {
		low = Math.min(low, matrix[i][0]);
		high = Math.max(high, matrix[i][m - 1]);
	}
	console.log(low, high, totalDigits);

	function countNum(target: number) {
		let count = 0;
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				if (matrix[i][j] <= target) count++;
			}
		}
		return count;
	}
	function binarySearch(left: number, right: number): number {
		if (left > right) return left;

		const mid = Math.floor((left + right) / 2);
		const count = countNum(mid);

		if (count >= totalDigits) return binarySearch(left, mid - 1);
		else return binarySearch(mid + 1, right);
	}
	return binarySearch(low, high);
}

console.log(
	medianOfAMatric([
		[1, 3, 5],
		[2, 6, 9],
		[3, 6, 9]
	])
); //5

console.log(
	medianOfAMatric([
		[1, 1, 1],
		[2, 2, 2],
		[3, 3, 3]
	])
); //2

// vaidate subseuence

function isSubSequenceValid(arr: number[], sub: number[]) {
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === sub[j]) j++;
		if (j === sub.length) return true;
	}
	return false;
}
console.log(isSubSequenceValid([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
console.log(isSubSequenceValid([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 11])); // false

// river sizes
/*
You are given a 2D array of potentially unequal width and height. 0 in the matrix represent land,
1 in the matrix represent water. Write a function which returns the lengths of unique rivers.

0, 0, 0, 1
1, 1, 0, 0,
1, 0, 0, 1,
1, 0, 0, 1

returns [1, 4, 2]

0, 0, 0, 1, 1,
1, 1, 0, 0, 1,
0, 0, 0, 1, 1,
0, 0, 0, 1, 0

returns [6, 2]
*/
console.log("=================RIVER SIZES=================");

function riverSizes(matrix: number[][]) {
	const set = new Set<number>();
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				const newSet = calculateSize(matrix, i, j);
				if (newSet > 0) set.add(newSet);
			}
		}
	}
	return Array.from(set);
}

function calculateSize(matrix: number[][], i: number, j: number, sum = 1): number {
	if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] == 0) {
		return 0;
	}
	matrix[i][j] = 0;

	return (
		sum +
		calculateSize(matrix, i - 1, j, sum) +
		calculateSize(matrix, i, j - 1, sum) +
		calculateSize(matrix, i, j + 1, sum) +
		calculateSize(matrix, i + 1, j, sum)
	);
}

console.log(
	riverSizes([
		[0, 0, 0, 1],
		[1, 1, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1]
	])
); // [1, 4, 2]
console.log(
	riverSizes([
		[0, 0, 0, 1, 1],
		[1, 1, 0, 0, 1],
		[0, 0, 0, 1, 1],
		[0, 0, 0, 1, 0]
	])
); // [6, 2]

// Shift linked list
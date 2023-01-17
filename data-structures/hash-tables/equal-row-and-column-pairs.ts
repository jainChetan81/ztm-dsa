// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Example 2:
// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Constraints:

//     n == grid.length == grid[i].length
//     1 <= n <= 200
//     1 <= grid[i][j] <= 105

function equalPairs(grid: number[][]): number {
	const rows: string[] = [];
	const columns: string[] = [];
	for (let i = 0; i < grid.length; i++) {
		const row = grid[i].join("-") + "-";
		rows.push(row);
		let column = "";
		for (let j = 0; j < grid.length; j++) {
			column += grid[j][i] + "-";
		}
		columns.push(column);
	}
	console.log(rows, "\n", columns);
	let result = 0;
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < columns.length; j++) {
			if (rows[i] === columns[j]) result++;
		}
	}
	return result;
}

// example 1
console.log(
	equalPairs([
		[3, 2, 1],
		[1, 7, 6],
		[2, 7, 7],
	])
);
// output 1

// example 2
// console.log(
// 	equalPairs([
// 		[3, 1, 2, 2],
// 		[1, 4, 4, 5],
// 		[2, 4, 2, 2],
// 		[2, 4, 2, 2],
// 	])
// );
// output 3

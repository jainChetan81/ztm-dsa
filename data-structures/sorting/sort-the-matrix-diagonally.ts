// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].
// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

// Example 1:
// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

// Example 2:
// Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
// Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
function diagonalSort(mat: number[][]): number[][] {
	const m = mat.length;
	const n = mat[0].length;
	const map = new Map<number, number[]>();
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const key = i - j;
			const arr = map.get(key) ?? [];
			arr.push(mat[i][j]);
			map.set(key, arr);
		}
	}
	map.forEach((value, key) => {
		map.set(key, insertionSortNew(value));
	});
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const key = i - j;
			const arr = map.get(key) ?? [];
			mat[i][j] = arr.shift()!;
		}
	}
	// console.log(map);
	return mat;
}
function insertionSortNew(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[i]) {
				[array[j], array[i]] = [array[i], array[j]];
			}
		}
	}
	return array;
}

console.log(
	diagonalSort([
		[3, 3, 1, 1],
		[2, 2, 1, 2],
		[1, 1, 1, 2]
	])
); //[[1,1,1,1],[1,2,2,2],[1,2,3,3]]
console.log(
	diagonalSort([
		[11, 25, 66, 1, 69, 7],
		[23, 55, 17, 45, 15, 52],
		[75, 31, 36, 44, 58, 8],
		[22, 27, 33, 25, 68, 4],
		[84, 28, 14, 11, 5, 50]
	])
); //[[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]

// for (const key in map) {
//     map[key].sort((a, b) => a - b);
// }
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         const key = i - j;
//         mat[i][j] = map[key].shift()!;
//     }
// }
// return mat;

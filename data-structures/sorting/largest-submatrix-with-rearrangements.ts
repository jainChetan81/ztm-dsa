// You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.
// Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

// Example 1:
// Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
// Output: 4
// Explanation: You can rearrange the columns as shown above.
// The largest submatrix of 1s, in bold, has an area of 4.

// Example 2:
// Input: matrix = [[1,0,1,0,1]]
// Output: 3
// Explanation: You can rearrange the columns as shown above.
// The largest submatrix of 1s, in bold, has an area of 3.

// Example 3:
// Input: matrix = [[1,1,0],[1,0,1]]
// Output: 2
// Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.
function sortOne(nums: number[]): number[] {
  let countOne = 0;
  for (let a of nums) {
    if (a === 0) countOne++;
  }
  for (let i = 0; i < nums.length; ++i) {
    if (countOne > 0) {
      nums[i] = 0;
      countOne--;
    } else nums[i] = 1;
  }
  return nums;
}
// function largestSubmatrix(matrix: number[][]): number {
//   let maxArea = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     sortOne(matrix[i]);
//     for (let j = 0; j < matrix.length; j++) {
//       maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
//     }
//   }
//   console.log(maxArea);
//   let height = 0,
//     width = 0;
//   for (let i = matrix.length - 1; i >= 0; i--) {
//     if (matrix[i][matrix[i].length - 1] === 1) height++;
//   }
//   for (let i = matrix[0].length - 1; i >= 0; i--) {
//     if (matrix[matrix.length - 1][i] === 1) width++;
//   }
//   let maxSize = height * width;
//   console.log(height, width, maxSize);
//   for (let i = matrix.length - 1; i >= 0; i--) {}
// }
function largestSubmatrix(matrix: number[][]): number {
  const m: number = matrix.length;
  const n: number = matrix[0].length;
  let maxArea: number = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] != 0 && row > 0) {
        matrix[row][col] += matrix[row - 1][col];
      }
    }

    cosnt currentRow = sortOne([...matrix[row]]);

    for (let i = 0; i < n; i++) {
      maxArea = Math.max(maxArea, currentRow[i] * (i + 1));
    }
  }

  return maxArea;
}
// console.log(
//   largestSubmatrix([
//     [0, 0, 1],
//     [1, 1, 1],
//     [1, 0, 1],
//   ]),
// ); // 4
console.log(largestSubmatrix([[1, 0, 1, 0, 1]])); // 3
// console.log(
//   largestSubmatrix([
//     [1, 1, 0],
//     [1, 0, 1],
//   ]),
// ); // 2

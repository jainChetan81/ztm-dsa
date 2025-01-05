/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
  for (let i = 0; i < n; i++) {
    let low = 0,
      high = n - 1;
    while (high >= low) {
      [matrix[i][low], matrix[i][high]] = [matrix[i][high], matrix[i][low]];
      high--;
      low++;
    }
  }
  console.log(matrix);
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// 0,0 - 0,2
// 0,1 - 1,2
// 2,0 - 2,2
// 1,0 - 0,1
// 1,1 - 1,1
// 1,2 - 2,1
[
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9],
];
// console.log(
//   rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
//   ])
// );

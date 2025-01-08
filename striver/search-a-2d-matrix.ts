function searchMatrix(matrix: number[][], target: number): boolean {
  function binary(f: number, last: number): boolean {
    if (last < f) return false;
    const mid = Math.floor((last + f) / 2);
    const col = mid % matrix[0].length;
    const row = (mid - col) / matrix[0].length;
    console.log(f, last, mid, col, row);
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) return binary(f, mid - 1);
    return binary(mid + 1, last);
  }

  return binary(0, matrix.length * matrix[0].length - 1);
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(searchMatrix([[1]], 1));

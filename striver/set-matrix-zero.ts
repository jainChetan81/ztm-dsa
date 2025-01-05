// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

const setMatrixZero = (matrix: number[][]) => {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) firstColHasZero = true;
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) firstRowHasZero = true;
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0)
      for (let j = 1; j < matrix[0].length; j++) {
        matrix[i][j] = 0;
      }
  }
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0)
      for (let i = 1; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
  }
  if (firstRowHasZero)
    for (let j = 0; j < matrix[0].length; j++) {
      console.log(0, j, matrix[0][j]);
      matrix[0][j] = 0;
    }
  if (firstColHasZero)
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }

  return matrix;
};
console.log(
  setMatrixZero([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
); //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// console.log(
//   setMatrixZero([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// ); // [[1,0,1],[0,0,0],[1,0,1]]
